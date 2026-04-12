"use client";
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over a clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button');
      
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)` 
      }}
    >
      {/* The Dot */}
      <div className={`
        w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300
        ${isPointer ? 'scale-[4] opacity-50' : 'scale-100'}
      `} />
    </div>
  );
}