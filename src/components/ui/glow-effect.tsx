import React from 'react';
import { cn } from '@/lib/utils';

interface GlowEffectProps {
  className?: string;
  children?: React.ReactNode;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  intensity?: 'low' | 'medium' | 'high';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

const GlowEffect: React.FC<GlowEffectProps> = ({
  className,
  children,
  color = 'hsl(var(--primary))',
  size = 'md',
  intensity = 'medium',
  position = 'center',
}) => {
  // Size mapping
  const sizeMap = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[30rem] h-[30rem]',
  };

  // Intensity mapping
  const intensityMap = {
    low: 'opacity-20 blur-3xl',
    medium: 'opacity-30 blur-3xl',
    high: 'opacity-40 blur-3xl',
  };

  // Position mapping
  const positionMap = {
    'top-left': '-top-20 -left-20',
    'top-right': '-top-20 -right-20',
    'bottom-left': '-bottom-20 -left-20',
    'bottom-right': '-bottom-20 -right-20',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        className={cn(
          'absolute rounded-full pointer-events-none',
          sizeMap[size],
          intensityMap[intensity],
          positionMap[position]
        )}
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};

export { GlowEffect };