// src/context/theme.context.js

import { createContext, useState } from 'react';

const TransportContext = createContext();

function TransportProviderWrapper(props) {
  const [transport, setTransport] = useState({
    recording: false,
    playing: false,
    repeat: false,
    paused: false,
  });

  const startPlayback = () => {
    setTransport({
      recording: false,
      playing: true,
      repeat: false,
      paused: false,
    });
  };

  const stopPlayback = () => {
    setTransport({
      recording: false,
      playing: false,
      repeat: false,
      paused: false,
    });
  };

  return (
    <TransportContext.Provider value={transport}>
      {props.children}
    </TransportContext.Provider>
  );
}

export {
  TransportContext,
  TransportProviderWrapper,
  startPlayback,
  stopPlayback,
};
