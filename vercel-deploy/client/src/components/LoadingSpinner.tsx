import { useEffect, useState } from "react";

const LoadingSpinner = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Logo/Brand */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">AK Detailing</h1>
        <p className="text-gray-600 text-center">Premium Mobile Auto Detailing</p>
      </div>

      {/* Main Spinner */}
      <div className="relative mb-6">
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-t-primary"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-pulse border-t-blue-400 opacity-60"></div>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <p className="text-gray-600 animate-pulse">
          {progress < 30 && "Initializing services..."}
          {progress >= 30 && progress < 60 && "Loading service areas..."}
          {progress >= 60 && progress < 90 && "Preparing your experience..."}
          {progress >= 90 && "Almost ready!"}
        </p>
        <p className="text-sm text-gray-400 mt-2">{Math.round(progress)}%</p>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce delay-0"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-1000"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;