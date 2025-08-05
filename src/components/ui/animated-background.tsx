import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
  density?: number;
  speed?: number;
  color?: string;
  secondaryColor?: string;
  children?: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className,
  density = 50,
  speed = 1,
  color = 'hsl(var(--primary) / 0.15)',
  secondaryColor = 'hsl(var(--accent) / 0.1)',
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      glow: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / (20000 / density));
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 1;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          color: Math.random() > 0.5 ? color : secondaryColor,
          glow: Math.random() * 5 + 2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Canvas can't use CSS variables directly, so we need to use actual color values
        let particleColor;
        if (particle.color.includes('--primary')) {
          particleColor = 'rgba(124, 58, 237, 0.15)'; // Purple color similar to primary
        } else if (particle.color.includes('--accent')) {
          particleColor = 'rgba(56, 189, 248, 0.1)'; // Blue color similar to accent
        } else {
          particleColor = 'rgba(139, 92, 246, 0.15)'; // Default purple
        }
        
        ctx.fillStyle = particleColor;
        ctx.shadowBlur = particle.glow;
        ctx.shadowColor = particleColor;
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
      });

      // Draw connections
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            const opacity = (1 - distance / 100) * 0.2;
            
            // Canvas can't use CSS variables directly, so we need to use actual color values
            let connectionColor;
            if (particles[i].color.includes('--primary')) {
              connectionColor = `rgba(124, 58, 237, ${opacity})`; // Purple color similar to primary
            } else if (particles[i].color.includes('--accent')) {
              connectionColor = `rgba(56, 189, 248, ${opacity})`; // Blue color similar to accent
            } else {
              connectionColor = `rgba(139, 92, 246, ${opacity})`; // Default purple
            }
            
            ctx.strokeStyle = connectionColor;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, speed, color, secondaryColor]);

  return (
    <div className={cn('fixed inset-0 -z-10 overflow-hidden', className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {children}
    </div>
  );
};

export { AnimatedBackground };