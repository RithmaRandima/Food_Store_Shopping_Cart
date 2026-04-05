import React from "react";

const Splash = () => {
  return (
    <div className="relative splash-container flex items-center justify-center h-screen">
      {/* Center Content */}
      <div className="absolute left-[50%] bottom-20 -translate-x-[50%] flex flex-col items-center">
        <h1 className="text-white text-4xl sm:text-6xl tracking-[10px] font-bold">
          FRESHMET
        </h1>

        {/* Progress Bar Track */}
        <div className="mt-6 w-20 h-4 p-[2px] border-2 border-white rounded-full overflow-hidden">
          {/* Moving Stroke */}
          <div className="h-full w-1/3  bg-gradient-to-r from-green-400 to-emerald-500 animate-slide"></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
