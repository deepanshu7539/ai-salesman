import React, { useState } from 'react';

const ResizableComponent = () => {
  const [widthA, setWidthA] = useState(300); // Initial width of section A
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      const newWidthA = widthA + deltaX;
      setWidthA(newWidthA);
      setStartX(e.clientX); // Update start position
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex h-full">
      {/* Section A */}
      <div
        className="resizeable-section bg-gray-200 p-4"
        style={{ width: `${widthA}px` }}
      >
        Section A
      </div>
      
      {/* Divider with draggable handle */}
      <div
        className="divider bg-gray-300 w-2 cursor-col-resize"
        onMouseDown={handleMouseDown}
      ></div>
      
      {/* Section B */}
      <div className="resizeable-section bg-gray-600 p-4 flex-1">
        Section B
      </div>

      {/* Transparent overlay to capture mouse events */}
      {isDragging && (
        <div
          className="fixed inset-0 cursor-col-resize"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        ></div>
      )}
    </div>
  );
};

export default ResizableComponent;
