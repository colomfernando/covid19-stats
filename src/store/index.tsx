import React, { useContext, useReducer } from 'react';
import reducer from './reducer';
import { IState, IGetCasesAction } from './interfaces';

const initialState = {
  cases: {},
};

const store = React.createContext<[IState, React.Dispatch<IGetCasesAction>]>([
  initialState,
  () => null,
]);

const { Provider } = store;

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

const useStore = (): [IState, React.Dispatch<IGetCasesAction>] => {
  const state = useContext(store);
  return state;
};

export default useStore;
export { StoreProvider };
