import { useEffect, useState, useContext } from 'react';

import { UserContext } from './UserContext';

const Hooks = () => {
  const [count, setCount] = useState(199);
  const [age, setAge] = useState(22);
  const [post, setPost] = useState({});

  const value = useContext(UserContext);
  console.log(value);

  useEffect(() => {
    const clear = setTimeout(() => {
      console.log('subscribe');
    }, 2000);

    return () => {
      clearTimeout(clear);
      console.log('unsubscribe');
    };
  }, [count]);

  useEffect(() => {
    console.log('I have grown up', age);
  }, [age]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <h3>Hook is awesome</h3>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div>
        <h1>My age is {age}</h1>
        <button onClick={() => setAge(age + 1)}>Increment</button>
      </div>
      <div>
        {post && (
          <>
            <h3>{post.title}</h3>
            <p>
              <strong>{post.body}</strong>
            </p>
          </>
        )}
      </div>
      <div>
        <h2>My Name is {value.user.name}</h2>
        <h5>My Email is {value.user.email}</h5>
      </div>
    </div>
  );
};

export default Hooks;
