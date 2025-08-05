import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CirclesBackgroundProps {
  className?: string;
  circleColor?: string;
  secondaryColor?: string;
  density?: number;
  speed?: number;
  children?: React.ReactNode;
}

const CirclesBackground: React.FC<CirclesBackgroundProps> = ({
  className,
  circleColor = 'hsl(var(--primary) / 0.1)',
  secondaryColor = 'hsl(var(--accent) / 0.05)',
  density = 15,
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
    let circles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
      opacitySpeed: number;
      growing: boolean;
      growSpeed: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initCircles();
    };

    const initCircles = () => {
      circles = [];
      const circleCount = Math.floor((canvas.width * canvas.height) / (50000 / density));
      
      for (let i = 0; i < circleCount; i++) {
        const radius = Math.random() * 50 + 20;
        const growing = Math.random() > 0.5;
        circles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          color: Math.random() > 0.7 ? secondaryColor : circleColor,
          speedX: (Math.random() - 0.5) * speed * 0.5,
          speedY: (Math.random() - 0.5) * speed * 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          opacitySpeed: Math.random() * 0.005 * speed,
          growing,
          growSpeed: (growing ? 1 : -1) * Math.random() * 0.2 * speed,
        });
      }
    };

    const drawCircles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw circles
      circles.forEach((circle) => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        
        // Create gradient for each circle
        const gradient = ctx.createRadialGradient(
          circle.x, circle.y, 0,
          circle.x, circle.y, circle.radius
        );
        
        // Canvas can't use CSS variables directly, so we need to use actual color values
        // Use a fallback color that matches the theme
        const centerColor = circle.color.includes('--primary') 
          ? `rgba(124, 58, 237, ${circle.opacity * 1.5})` // Purple color similar to primary
          : circle.color.includes('--accent')
            ? `rgba(56, 189, 248, ${circle.opacity * 1.5})` // Blue color similar to accent
            : `rgba(139, 92, 246, ${circle.opacity * 1.5})`; // Default purple
        
        const transparentColor = circle.color.includes('--primary')
          ? 'rgba(124, 58, 237, 0)' // Transparent purple
          : circle.color.includes('--accent')
            ? 'rgba(56, 189, 248, 0)' // Transparent blue
            : 'rgba(139, 92, 246, 0)'; // Default transparent purple
        
        gradient.addColorStop(0, centerColor);
        gradient.addColorStop(1, transparentColor);
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Update position
        circle.x += circle.speedX;
        circle.y += circle.speedY;

        // Bounce off edges
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > canvas.width) {
          circle.speedX = -circle.speedX;
        }
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > canvas.height) {
          circle.speedY = -circle.speedY;
        }

        // Update opacity
        circle.opacity += circle.opacitySpeed;
        if (circle.opacity > 0.4 || circle.opacity < 0.1) {
          circle.opacitySpeed = -circle.opacitySpeed;
        }

        // Update size
        circle.radius += circle.growSpeed;
        if (circle.radius > 70 || circle.radius < 20) {
          circle.growSpeed = -circle.growSpeed;
        }
      });

      animationFrameId = requestAnimationFrame(drawCircles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawCircles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, speed, circleColor, secondaryColor]);

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

export { CirclesBackground };