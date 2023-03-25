import React, { useState } from "react";

const context = React.createContext({ count: 0 });

const consumer = context.Consumer;

const provider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <context.Provider value={{ count, setCount }}>{children}</context.Provider>
  );
};

export { provider, consumer };
