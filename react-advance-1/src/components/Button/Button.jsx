import React from 'react';

const Button = () => {
  const handleButton = () => {
    console.log('Soy un boton');
  };

  return <button onClick={handleButton}>My Button</button>;
};

export default Button;
