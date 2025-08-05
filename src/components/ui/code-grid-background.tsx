import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CodeGridBackgroundProps {
  className?: string;
  gridColor?: string;
  textColor?: string;
  density?: number;
  speed?: number;
  children?: React.ReactNode;
}

const CodeGridBackground: React.FC<CodeGridBackgroundProps> = ({
  className,
  gridColor = 'hsl(var(--primary) / 0.1)',
  textColor = 'hsl(var(--primary) / 0.15)',
  density = 30,
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
    let gridSize = Math.floor(600 / density);
    let columns: number;
    let rows: number;
    
    // Binary and programming symbols to display
    const symbols = ['0', '1', '{', '}', '(', ')', '[', ']', '<', '>', '/', '*', '+', '-', '=', ';', ':', '?', '!', '@', '#', '$', '%', '^', '&'];
    
    // Matrix of symbols
    let symbolsArray: Array<Array<{
      value: string;
      opacity: number;
      speed: number;
    }>> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      columns = Math.ceil(canvas.width / gridSize);
      rows = Math.ceil(canvas.height / gridSize);
      
      initSymbols();
    };

    const initSymbols = () => {
      symbolsArray = [];
      
      for (let i = 0; i < columns; i++) {
        symbolsArray[i] = [];
        for (let j = 0; j < rows; j++) {
          // Only show symbols occasionally based on density
          const shouldShow = Math.random() < 0.1;
          symbolsArray[i][j] = {
            value: shouldShow ? symbols[Math.floor(Math.random() * symbols.length)] : '',
            opacity: shouldShow ? Math.random() * 0.5 + 0.1 : 0,
            speed: (Math.random() * 0.01 + 0.005) * speed,
          };
        }
      }
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.beginPath();
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let i = 0; i <= columns; i++) {
        const x = i * gridSize;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      
      // Horizontal lines
      for (let j = 0; j <= rows; j++) {
        const y = j * gridSize;
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      
      ctx.stroke();

      // Draw symbols
      ctx.font = `${Math.floor(gridSize * 0.6)}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const symbol = symbolsArray[i][j];
          
          if (symbol.value) {
            // Canvas can't use CSS variables directly, so we need to use actual color values
            let symbolColor;
            if (textColor.includes('--primary')) {
              symbolColor = `rgba(124, 58, 237, ${symbol.opacity})`; // Purple color similar to primary
            } else if (textColor.includes('--accent')) {
              symbolColor = `rgba(56, 189, 248, ${symbol.opacity})`; // Blue color similar to accent
            } else {
              symbolColor = `rgba(139, 92, 246, ${symbol.opacity})`; // Default purple
            }
            
            ctx.fillStyle = symbolColor;
            ctx.fillText(
              symbol.value,
              i * gridSize + gridSize / 2,
              j * gridSize + gridSize / 2
            );
            
            // Randomly change symbols and their opacity
            if (Math.random() < 0.005 * speed) {
              symbol.value = symbols[Math.floor(Math.random() * symbols.length)];
            }
            
            // Fade in and out
            symbol.opacity += symbol.speed;
            if (symbol.opacity >= 0.6 || symbol.opacity <= 0.1) {
              symbol.speed = -symbol.speed;
            }
          } else if (Math.random() < 0.0005 * speed) {
            // Occasionally add new symbols
            symbol.value = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.opacity = 0.1;
            symbol.speed = Math.abs(symbol.speed);
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gridColor, textColor, density, speed]);

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

export { CodeGridBackground };