import { useEffect, useState } from "react";

export function useLoaderDots(totalDots: number = 8) {
  const [activeDot, setActiveDot] = useState(0);

  // Equivalent of Angular's ngOnInit / ngOnDestroy
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDot((v) => (v + 1) % totalDots);
    }, 150);

    return () => clearInterval(intervalId);
  }, [totalDots]);

  const isActive = (i: number) => i === activeDot;

  const isPrevious = (i: number) =>
    i === (activeDot - 1 + totalDots) % totalDots;

  const getRotation = (i: number) => (i * 360) / totalDots;

  return { activeDot, isActive, isPrevious, getRotation };
}
