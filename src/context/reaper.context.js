import { createContext, useState } from 'react';

const ReaperContext = createContext();

function ReaperProviderWrapper(props) {
  const [value, setValue] = useState({
    recording: false,
    playing: false,
    repeat: false,
    paused: false,
  });

  return (
    <ReaperContext.Provider value={{ value, setValue }}>
      {props.children}
    </ReaperContext.Provider>
  );
}

export { ReaperContext, ReaperProviderWrapper };
