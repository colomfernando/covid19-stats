import React, { useContext } from 'react';

const store = React.createContext(0);

const { Provider } = store;

const StoreProvider: React.FC = ({ children }) => {
  return <Provider value={2}>{children}</Provider>;
};

const useStore = (): number => {
  const state = useContext(store);
  return state;
};

export default useStore;
export { StoreProvider };
