import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface StarsBackgroundProps {
  className?: string;
  starCount?: number;
  starColor?: string;
  speed?: number;
  children?: React.ReactNode;
}

const StarsBackground: React.FC<StarsBackgroundProps> = ({
  className,
  starCount = 100,
  starColor = 'hsl(var(--primary) / 0.7)',
  speed = 1,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      brightness: number;
      brightnessFactor: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 1.5 + 0.5;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speed: (Math.random() * 0.05 + 0.025) * speed,
          brightness: Math.random() * 0.5 + 0.5,
          brightnessFactor: Math.random() * 0.01 + 0.005,
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        // Canvas can't use CSS variables directly, so we need to use actual color values
        let starFillColor;
        let starShadowColor;
        if (starColor.includes('--primary')) { 
          starFillColor = `rgba(124, 58, 237, ${star.brightness})`; // Purple color similar to primary
          starShadowColor = 'rgba(124, 58, 237, 0.7)'; // Purple shadow
        } else if (starColor.includes('--accent')) {
          starFillColor = `rgba(56, 189, 248, ${star.brightness})`; // Blue color similar to accent
          starShadowColor = 'rgba(56, 189, 248, 0.7)'; // Blue shadow
        } else {
          starFillColor = `rgba(255, 255, 255, ${star.brightness})`; // Default white
          starShadowColor = 'rgba(255, 255, 255, 0.7)'; // White shadow
        }
        
        ctx.fillStyle = starFillColor;
        ctx.shadowBlur = star.size * 2;
        ctx.shadowColor = starShadowColor;
        ctx.fill();

        // Update brightness for twinkling effect
        star.brightness += star.brightnessFactor;
        if (star.brightness >= 1 || star.brightness <= 0.5) {
          star.brightnessFactor = -star.brightnessFactor;
        }

        // Move stars downward
        star.y += star.speed;

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(drawStars);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawStars();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [starCount, starColor, speed]);

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

export { StarsBackground };