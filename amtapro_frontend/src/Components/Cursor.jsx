import { useEffect, useState } from "react";

export default function Cursor() { 
  const [position, setPosition] = useState({ 
    y: window.innerHeight/2,
    x: window.innerWidth/2 
  });

  useEffect(() => {
    const move = (mouse) => {
      setPosition({ x: mouse.clientX, y: mouse.clientY });
    };
    
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  
  return (
    <div 
        className="cursor"
        style={{
            top: (position.y),
            left: (position.x),
            color: "black"
        }}
    ></div>
  );
}