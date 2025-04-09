import { useState, useCallback } from 'react';

export default function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn(prev => !prev), []);
  const turnOn = useCallback(() => setOn(true), []);
  const turnOff = useCallback(() => setOn(false), []);

  return { on, toggle, turnOn, turnOff };
}