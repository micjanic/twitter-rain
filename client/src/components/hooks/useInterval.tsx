import { useEffect, useRef } from 'react'

export function useInterval(callback: () => any, delay: number) {
  const savedCallback = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback])

  useEffect(() => {
    function tick(): void {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay])
}