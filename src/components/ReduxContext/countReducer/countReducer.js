export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const createActions = (dispatch) => ({
  increment: (value) => dispatch({ type: INCREMENT, payload: value || 1 }),
  decrement: (value) => dispatch({ type: DECREMENT, payload: value || 1 }),
  reset: () => dispatch({ type: RESET }),
});

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export default reducer;
