import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number, isPhone: boolean) {
  const savedCallback = useRef(null);
  
  useEffect(() => {
    savedCallback.current = callback;
  });
  
  useEffect(() => {
    console.log(isPhone)    
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay || 0);
      return () => {console.log('destroyed');clearInterval(id)};  // 组件卸载的时候执行清除操作，此处组件为何为卸载?
    }    
  }, [delay, isPhone]);
}
