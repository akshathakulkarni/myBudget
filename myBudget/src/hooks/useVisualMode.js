import React, {useState} from 'react';

const useVisualMode = (initialMode) => {
  const [mode, setMode] = useState(initialMode);

  const transition = (mode) => {
    return setMode(mode);
  }
  return {
    mode: mode,
    transition: transition
  };
};

export default useVisualMode;