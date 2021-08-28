import { useContext } from 'react';
import { CountContext } from './CountProvider';

const Conroller = () => {
  const { increment, decrement, reset } = useContext(CountContext);

  return (
    <>
      <button className="btn btn-secondary my-2" onClick={() => increment()}>
        Increment
      </button>
      <button className="btn btn-secondary my-2" onClick={() => decrement()}>
        Decrement
      </button>
      <button className="btn btn-danger my-2" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
};

export default Conroller;
