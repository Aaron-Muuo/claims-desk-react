import React, { useMemo, useState, useRef } from "react";

const GRID_COLUMNS = 40;
const TOTAL_CELLS = 800;

const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "÷", "%", "=", "$", "£", "€", ".", ","];

export function HeroAnimatedGrid() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { cells } = useMemo(() => {
    // Fill every cell with a random math symbol or number
    const cellsArray = Array.from({ length: TOTAL_CELLS }).map(
      () => chars[Math.floor(Math.random() * chars.length)]
    );
    return { cells: cellsArray };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center"
    >
      {/* Container that captures mouse movements */}
      <div 
        ref={containerRef}
        className="relative w-full h-full pointer-events-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Layer 1: Background grid (no text) */}
        <div 
          className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, 52px)",
            gridAutoRows: "52px",
            opacity: 0.8
          }}
        >
          {cells.map((_, i) => (
            <div 
              key={"bg-" + i} 
              className="w-full h-full border-r border-b border-border/30 bg-surface-soft/20"
            />
          ))}
        </div>

        {/* Layer 2: Text reveal layer and Spotlight Background */}
        <div 
          className="absolute inset-0 grid pointer-events-none"
          style={{
            gridTemplateColumns: "repeat(auto-fill, 52px)",
            gridAutoRows: "52px",
            opacity: 1,
            backgroundImage: mousePos.x !== -1000 ? "radial-gradient(250px at " + mousePos.x + "px " + mousePos.y + "px, rgba(245, 158, 11, 0.15), transparent 100%)" : "none",
            maskImage: "radial-gradient(250px at " + mousePos.x + "px " + mousePos.y + "px, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(250px at " + mousePos.x + "px " + mousePos.y + "px, black 0%, transparent 100%)",
          }}
        >
          {cells.map((char, i) => (
            <div 
              key={"text-" + i} 
              className="w-full h-full flex items-center justify-center select-none"
            >
              {char && (
                <span className="text-lg font-bold text-muted-foreground">{char}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
