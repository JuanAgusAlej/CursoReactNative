import classNames from 'classnames';
import React from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';

const Card = ({ character, getIdPersonaje }) => {
  const handleClick = () => {
    getIdPersonaje(character.id);
  };
  const theme = useThemeContext();

  return (
    <>
      <div className="card">
        <div
          className={classNames('card-body text-center', {
            'bg-light': theme === 'light',
            'bg-dark text-white': theme === 'dark',
          })}
        >
          <h5 className="card-title">{character.name}</h5>
          <img src={character.image} className="card-img-top" alt="..."></img>
          <p className="card-text">{character.species}</p>
          <button
            onClick={handleClick}
            className={classNames('btn', {
              'btn-primary': theme === 'ligth',
              'btn-success': theme === 'dark',
            })}
          >
            Go somewhere
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
