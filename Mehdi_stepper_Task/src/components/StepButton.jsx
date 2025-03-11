import React from 'react';

const StepButton = ({ number, title, status, onClick, className = '' }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 text-white border-green-500';
      case 'current':
        return 'bg-blue-600 text-white border-blue-600';
      default:
        return 'bg-white text-gray-500 border-gray-300';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={status === 'upcoming'}
      className={`flex flex-col items-center ${className}`}
    >
      <div
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center font-medium text-sm md:text-base transition-colors ${getStatusStyles()}`}
      >
        {number}
      </div>
      <div className="mt-2 text-center">
        <span className={`text-xs md:text-sm font-medium ${
          status === 'current' ? 'text-blue-600' : 'text-gray-500'
        }`}>
          {title}
        </span>
      </div>
    </button>
  );
};

export default StepButton;
