import { useState, useCallback } from 'react';

export default function useToggle(initial = false) {
  // [] 의존성 없음 콜백 컴포넌트 마운트 시 한 번만 생성됨 
  // 불필요한 렌더링이나 함수 재생성 방지 가능
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn(prev => !prev), []);
  const turnOn = useCallback(() => setOn(true), []);
  const turnOff = useCallback(() => setOn(false), []);

  return { on, toggle, turnOn, turnOff };
}