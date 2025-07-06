import { useEffect, useState } from "react";

export const LoadingScreen = ({ oncomplete }) => {
  const [text, setText] = useState("");
  const fullText = "<CodeXnam/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          oncomplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [oncomplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-mono font-bold mb-4">
          {text} <span className="ml-1 animate-blink">|</span>
        </div>
        <div className="relative w-52 h-1 bg-gray-700 rounded overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};


