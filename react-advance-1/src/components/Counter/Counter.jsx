import React, { useCallback, useReducer, useState } from 'react';
import reducer from '../../utils/opetarionReducer';

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>Counter:{state}</div>
      <button onClick={() => dispatch('incrementar')}>incremento</button>
      <button onClick={() => dispatch('decrementar')}>decrementar</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </>
  );
};

export default Counter;
