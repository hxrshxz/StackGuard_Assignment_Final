import { useState, useEffect } from "react";

export const useCountUp = (end: number, duration: number = 1500): string => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let frame = 0;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const easeOutCubic = (t: number): number => --t * t * t + 1;

    const counter = setInterval(() => {
      frame++;
      const progress = easeOutCubic(frame / totalFrames);
      setCount(end * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count.toLocaleString(undefined, { maximumFractionDigits: 0 });
};
