import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface MatrixCodeBackgroundProps {
  className?: string;
  codeColor?: string;
  speed?: number;
  density?: number;
  children?: React.ReactNode;
}

const MatrixCodeBackground: React.FC<MatrixCodeBackgroundProps> = ({
  className,
  codeColor = 'hsl(var(--primary) / 0.5)',
  speed = 1,
  density = 50,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Arabic and programming characters
    const arabic = 'أبتثجحخدذرزسشصضطظعغفقكلمنهوي';
    const programming = '{}[]()<>+-*/=&|!?:;,.~#%^';
    const binary = '01';
    const allChars = arabic + programming + binary;
    
    // Matrix columns
    let columns: Array<{
      x: number;
      chars: string[];
      startY: number;
      speed: number;
      length: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initColumns();
    };

    const initColumns = () => {
      const fontSize = 14;
      const columnCount = Math.floor(canvas.width / fontSize * (density / 100));
      
      columns = [];
      for (let i = 0; i < columnCount; i++) {
        const columnLength = Math.floor(Math.random() * 15 + 5);
        const chars = [];
        
        // Generate random characters for this column
        for (let j = 0; j < columnLength; j++) {
          chars.push(allChars.charAt(Math.floor(Math.random() * allChars.length)));
        }
        
        columns.push({
          x: i * fontSize,
          chars,
          startY: Math.random() * canvas.height * -1, // Start above the canvas
          speed: (Math.random() * 2 + 1) * speed,
          length: columnLength,
        });
      }
    };

    const drawMatrix = () => {
      // Add semi-transparent black layer for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set font
      ctx.font = '14px monospace';
      
      // Draw each column
      columns.forEach(column => {
        // Draw each character in the column with gradient opacity
        for (let i = 0; i < column.chars.length; i++) {
          const y = column.startY + i * 20;
          
          // Only draw if within canvas
          if (y > 0 && y < canvas.height) {
            // Calculate opacity - first character is brightest
            const opacity = i === 0 ? 1 : 1 - (i / column.length);
            
            // Canvas can't use CSS variables directly, so we need to use actual color values
            let charColor;
            if (codeColor.includes('--primary')) {
              charColor = `rgba(124, 58, 237, ${opacity})`; // Purple color similar to primary
            } else if (codeColor.includes('--accent')) {
              charColor = `rgba(56, 189, 248, ${opacity})`; // Blue color similar to accent
            } else {
              charColor = `rgba(139, 92, 246, ${opacity})`; // Default purple
            }
            
            ctx.fillStyle = charColor;
            
            // Draw the character
            ctx.fillText(column.chars[i], column.x, y);
            
            // Randomly change characters except the first one (which is the "head")
            if (i > 0 && Math.random() < 0.01) {
              column.chars[i] = allChars.charAt(Math.floor(Math.random() * allChars.length));
            }
          }
        }
        
        // Move the column down
        column.startY += column.speed;
        
        // If the column has moved completely out of view, reset it
        if (column.startY - 20 * column.length > canvas.height) {
          column.startY = Math.random() * canvas.height * -1; // Reset to above the canvas
          column.speed = (Math.random() * 2 + 1) * speed;
          
          // Generate new characters
          for (let j = 0; j < column.chars.length; j++) {
            column.chars[j] = allChars.charAt(Math.floor(Math.random() * allChars.length));
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawMatrix);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawMatrix();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [codeColor, speed, density]);

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

export { MatrixCodeBackground };