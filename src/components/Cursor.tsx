import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
      return null;
  }

  const cursorStyle: React.CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `translate(-50%, -50%) scale(${isPointer ? 2.5 : 1})`,
    background: isPointer ? 'rgba(0, 255, 255, 0.1)' : 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 60%)',
    border: isPointer ? '1px solid rgba(0, 255, 255, 0.5)' : 'none',
  };

  return (
    <div
      className="fixed pointer-events-none rounded-full transition-transform,background-color,border-color duration-200 ease-out z-[9999]"
      style={{ ...cursorStyle, width: '40px', height: '40px' }}
    />
  );
};

export default Cursor;