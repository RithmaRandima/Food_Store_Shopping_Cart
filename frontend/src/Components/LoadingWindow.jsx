import React from "react";

const LoadingWindow = () => {
  return (
    <div className="z-4 absolute w-full h-full bg-black/70 backdrop-blur-[4px] rounded-4xl">
      <div className="fixed inset-0 flex flex-col justify-center items-center z-50">
        <div className="b w-[400px] p-6 rounded-3xl shadow-2xs text-center flex flex-col items-center gap-4 pt-8">
          {/* Spinner */}
          <div className="w-6 h-6 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

          {/* Success message */}
          <h2 className="text-green-600 font-bold text-xl text-[16px] tracking-[2px]">
            Loading Please wait!
          </h2>
          <p className="text-white/70 font-bold text-xl text-[10px] w-[300px] tracking-[2px] -mt-2">
            Get the best quality and most delicious grocery food
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingWindow;
