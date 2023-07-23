import { useEffect, useState, MutableRefObject } from 'react'

export function useIsVisible(ref: MutableRefObject<HTMLDivElement>) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
        }, { threshold: 1 });

        ref.current && observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}