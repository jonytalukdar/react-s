import React, { useEffect, useReducer } from 'react';

const initialState = {
  isLoading: true,
  isError: '',
  posts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        isError: '',
      };

    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        posts: [],
        isError: 'Something error happened',
      };

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, disPatch] = useReducer(reducer, initialState);

  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        disPatch({ type: 'SUCCESS', payload: data });
      })
      .catch((err) => {
        disPatch({ type: 'ERROR' });
      });
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      {state.isLoading && <h2>Loading...</h2>}

      <h2>{state.isError || null}</h2>

      {state.posts.map((post) => {
        const { id, title } = post;
        return <h3 key={id}>{title}</h3>;
      })}
    </div>
  );
};

export default UseReducer;
