import React, { useContext, useReducer } from 'react';
import reducer from './reducer';
import { IState, Actions } from './interfaces';

const initialState = {
  cases: {},
  loading: {
    cases: false,
    history: false,
    vaccines: false,
  },
};

const store = React.createContext<[IState, React.Dispatch<Actions>]>([
  initialState,
  () => null,
]);

const { Provider } = store;

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

const useStore = (): [IState, React.Dispatch<Actions>] => {
  const state = useContext(store);
  return state;
};

export default useStore;
export { StoreProvider };
