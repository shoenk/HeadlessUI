import React from 'react';
import './Toggle.scss';

export default function Toggle({ on, toggle }) {
  return (
    <button
      onClick={toggle}
      className={`toggle-btn ${on ? 'on' : ''}`}
    >
      {on ? 'ON' : 'OFF'}
    </button>
  );
}