import { createContext, useReducer } from 'react';
import { createActions } from './countReducer/countReducer';
import reducer from './countReducer/countReducer';

const CountContext = createContext();

const CountProvider = (props) => {
  const [count, dispatch] = useReducer(reducer, 0);
  const action = createActions(dispatch);

  return (
    <CountContext.Provider value={{ count, ...action }}>
      {props.children}
    </CountContext.Provider>
  );
};

export { CountProvider, CountContext };
