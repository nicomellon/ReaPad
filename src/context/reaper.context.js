import { createContext, useState } from 'react';

const ReaperContext = createContext();

function ReaperProviderWrapper(props) {
  const [value, setValue] = useState();

  return (
    <ReaperContext.Provider value={{ value, setValue }}>
      {props.children}
    </ReaperContext.Provider>
  );
}

export { ReaperContext, ReaperProviderWrapper };
