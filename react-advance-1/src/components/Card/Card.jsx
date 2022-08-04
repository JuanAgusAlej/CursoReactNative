import React from 'react';

const Card = ({ character, getIdPersonaje }) => {
  const handleClick = () => {
    getIdPersonaje(character.id);
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <img src={character.image} className="card-img-top" alt="..."></img>
          <p className="card-text">{character.species}</p>
          <button onClick={handleClick} className="btn btn-primary">
            Go somewhere
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
