import React from 'react';
import { Star } from 'lucide-react';

export const Rating = ({ value, onChange, readOnly = false }) => {
  const handleClick = (index) => {
    if (!readOnly && onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-6 w-6 cursor-pointer ${index < value ? 'text-yellow-500' : 'text-gray-300'}`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};