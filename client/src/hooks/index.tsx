import {
  useEffect,
  useState,
  MutableRefObject,
  SetStateAction,
  Dispatch,
} from "react";

export function useIsVisible(ref: MutableRefObject<HTMLDivElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 1 },
    );

    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export function useClickOff(
  setState: Dispatch<SetStateAction<boolean>>,
  targets: string[],
) {
  useEffect(() => {
    function handleClickOff(e: any) {
      const targetClass = e.target.classList[0];

      if (targets.includes(targetClass)) {
        setState(false);
      }
    }

    document.addEventListener("click", handleClickOff);

    return () => document.removeEventListener("click", handleClickOff);
  }, []);
}

export function useViewportQuery(initWidth: number, initHeight: number) {
  const [dimensions, setDimensions] = useState([initWidth, initHeight])

  useEffect(() => {
    function handleResize(_: any) {
      setDimensions([window.innerWidth, window.innerHeight]) 
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return dimensions;
}