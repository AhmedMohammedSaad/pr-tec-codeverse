import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface WaveBackgroundProps {
  className?: string;
  waveColor?: string;
  secondWaveColor?: string;
  thirdWaveColor?: string;
  children?: React.ReactNode;
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({
  className,
  waveColor = 'hsl(var(--primary) / 0.15)',
  secondWaveColor = 'hsl(var(--accent) / 0.1)',
  thirdWaveColor = 'hsl(var(--secondary) / 0.08)',
  children,
}) => {
  return (
    <div className={cn('absolute inset-0 overflow-hidden -z-10', className)}>
      {/* First Wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[20vh] opacity-70"
        initial={{ y: 100 }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'easeInOut',
        }}
      >
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={waveColor}
            fillOpacity="1"
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,154.7C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      {/* Second Wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[25vh] opacity-70"
        initial={{ y: 100 }}
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={secondWaveColor}
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,144C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      {/* Third Wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[30vh] opacity-70"
        initial={{ y: 100 }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={thirdWaveColor}
            fillOpacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,261.3C384,245,480,203,576,202.7C672,203,768,245,864,261.3C960,277,1056,267,1152,240C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      {children}
    </div>
  );
};

export { WaveBackground };