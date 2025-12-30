
import React from 'react';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="loader scale-150"></div>
    </div>
  );
};

export default LoadingOverlay;
