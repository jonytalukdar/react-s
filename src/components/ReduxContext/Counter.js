import { useContext } from 'react';
import Controller from './Controller';
import { CountContext } from './CountProvider';

const Counter = () => {
  const { count } = useContext(CountContext);

  return (
    <>
      <div className="card card-body text-center my-3">
        <h3>{count}</h3>
      </div>
      <div className="card card-body text-center my-3">
        <Controller />
      </div>
    </>
  );
};

export default Counter;
