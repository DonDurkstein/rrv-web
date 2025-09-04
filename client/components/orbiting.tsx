"use client"
import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type GlowColor = 'cyan' | 'purple' | 'blue';

interface OrbitingItemConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
  description?: string;
  icon?: string;
}

interface OrbitingItemProps {
  config: OrbitingItemConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Configuration for the Orbiting Items ---
const orbitingItemsConfig: OrbitingItemConfig[] = [
  // Inner Orbit - RRV Core Values for Business Standout
  { 
    id: 'unique_identity',
    orbitRadius: 80, 
    size: 50, 
    speed: 1, 
    phaseShift: 0, 
    glowColor: 'blue',
    label: 'Unique Identity',
    description: 'Create a distinctive brand presence that sets you apart in the market',
    icon: '✨'
  },
  { 
    id: 'compelling_narrative',
    orbitRadius: 100, 
    size: 65, 
    speed: 1, 
    phaseShift: (2 * Math.PI) / 3, 
    glowColor: 'blue', // Changed to blue
    label: 'Compelling Narrative'
  },
  { 
    id: 'visual_excellence',
    orbitRadius: 100, 
    size: 60, 
    speed: 1, 
    phaseShift: (4 * Math.PI) / 3, 
    glowColor: 'blue', // Changed to blue
    label: 'Visual Excellence'
  },
  // Outer Orbit - Style & Growth for Business Standout
  { 
    id: 'market_differentiation',
    orbitRadius: 180, 
    size: 70, 
    speed: -0.6, 
    phaseShift: 0, 
    glowColor: 'blue', // Changed to blue
    label: 'Market Differentiation'
  },
  { 
    id: 'customer_connection',
    orbitRadius: 180, 
    size: 65, 
    speed: -0.6, 
    phaseShift: (2 * Math.PI) / 3, 
    glowColor: 'blue', // Changed to blue
    label: 'Customer Connection'
  },
  { 
    id: 'growth_strategy',
    orbitRadius: 180, 
    size: 60, 
    speed: -0.6, 
    phaseShift: (4 * Math.PI) / 3, 
    glowColor: 'blue', // Changed to blue
    label: 'Growth Strategy'
  },
];

// --- Memoized Orbiting Item Component ---
const OrbitingItem = memo(({ config, angle }: OrbitingItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const { 
    orbitRadius: initialOrbitRadius, 
    size: initialSize, 
    label, 
    glowColor, 
    description, 
    icon 
  } = config;

  // Calculate responsive sizes
  const [responsiveOrbitRadius, setResponsiveOrbitRadius] = useState(initialOrbitRadius);
  const [responsiveSize, setResponsiveSize] = useState(initialSize);
  
  // Handle 3D rotation effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 10;
    const y = (e.clientX - rect.left - rect.width / 2) / 10;
    setRotation({ x, y });
  };

  useEffect(() => {
    const handleResize = () => {
      let baseWidth;
      if (window.innerWidth >= 768) {
        baseWidth = 400; // md breakpoint
      } else if (window.innerWidth >= 640) {
        baseWidth = 350; // sm breakpoint
      } else {
        baseWidth = Math.min(300, window.innerWidth * 0.9); // mobile
      }
      
      const scale = baseWidth / 400; // Scale relative to md size
      setResponsiveOrbitRadius(initialOrbitRadius * scale);
      setResponsiveSize(initialSize * scale);
    };

    handleResize(); // Set initial sizes
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initialOrbitRadius, initialSize]);

  const x = Math.cos(angle) * responsiveOrbitRadius;
  const y = Math.sin(angle) * responsiveOrbitRadius;

  const glowColors = {
    blue: {
      primary: 'rgba(0, 123, 255, 0.4)',
      secondary: 'rgba(0, 123, 255, 0.2)',
    }
  };
  const colors = glowColors[glowColor] || glowColors.blue;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out perspective-1000"
      style={{
        width: `${responsiveSize}px`,
        height: `${responsiveSize}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`
          relative w-full h-full rounded-full flex items-center justify-center text-center
          transition-all duration-300 cursor-pointer group
        `}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Main orbiting item */}
        <div
          className={`
            absolute w-full h-full rounded-full flex items-center justify-center
            transition-all duration-300 text-white font-semibold backdrop-blur-sm
            ${isHovered ? 'scale-110 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
          `}
          style={{
            background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
            boxShadow: isHovered
              ? `0 0 30px ${colors.primary}, 0 0 60px ${colors.secondary}`
              : undefined,
            transform: `translateZ(20px)`,
          }}
        >
          <div className="flex flex-col items-center gap-1">
            {icon && <span className="text-lg">{icon}</span>}
            <span className="text-xs">{label}</span>
          </div>
        </div>

        {/* Particle effects */}
        {isHovered && (
          <div className="absolute inset-0 -z-10">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-particle"
                style={{
                  background: colors.primary,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Info card on hover */}
        {isHovered && description && (
          <div
            className="absolute p-4 rounded-lg bg-black/80 backdrop-blur-md text-white
                       text-sm w-48 transform transition-all duration-300 opacity-0
                       group-hover:opacity-100 pointer-events-none"
            style={{
              transform: `translateZ(50px) translateY(${responsiveSize + 20}px)`,
              boxShadow: `0 0 20px ${colors.primary}`,
            }}
          >
            {description}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingItem.displayName = 'OrbitingItem';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'blue', animationDelay = 0 }: GlowingOrbitPathProps) => { // Default to blue
  const glowColors = {
    blue: { // Changed to blue
      primary: 'rgba(0, 123, 255, 0.4)',
      secondary: 'rgba(0, 123, 255, 0.2)',
      border: 'rgba(0, 123, 255, 0.3)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.blue; // Default to blue

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main App Component ---
// Add keyframes for particle animation
const particleKeyframes = `
@keyframes particle {
  0% {
    transform: scale(1) translateZ(0);
    opacity: 1;
  }
  100% {
    transform: scale(2) translateZ(50px);
    opacity: 0;
  }
}

.animate-particle {
  animation: particle 2s ease-out infinite;
}
`;

export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [perspective, setPerspective] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 80, glowColor: 'blue', delay: 0 },
    { radius: 140, glowColor: 'blue', delay: 1.5 }
  ];

  // Handle container perspective
  const handleContainerMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 30;
    const y = -(e.clientX - rect.left - rect.width / 2) / 30;
    setPerspective({ x, y });
  };

  return (
    <main className="w-full flex items-center justify-center overflow-hidden">
      <style>{particleKeyframes}</style>
      <div 
        className="relative w-[min(300px,90vw)] h-[min(300px,90vw)] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] 
                   flex items-center justify-center perspective-1000 my-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setPerspective({ x: 0, y: 0 });
        }}
        onMouseMove={handleContainerMouseMove}
        style={{
          transform: `rotateX(${perspective.x}deg) rotateY(${perspective.y}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        
        {/* Central RRV Logo with enhanced glow */}
        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-transparent rounded-full flex items-center justify-center z-10 relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-blue-700/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <img src="/rrv-20logo-20hd-20bw-20-no-20background-20-1-.png" alt="RRV Logo" className="w-full h-full object-contain p-2" />
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting items */}
        {orbitingItemsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingItem
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </main>
  );
}
