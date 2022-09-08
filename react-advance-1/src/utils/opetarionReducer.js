const reducer = (state, action) => {
  switch (action) {
    case 'incrementar':
      return state + 1;

    case 'decrementar':
      return state - 1;

    case 'reset':
      return 0;

    default:
      return state;
  }
};

export default reducer;
