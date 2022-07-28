// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Home } from './page/Home';
import { Card } from './components/Card';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [idPersonaje, setIdPersonaje] = useState(0);

  const getCharacter = async () => {
    setIsLoading(true);
    // peticiones
    // opcion una
    // fetch('https://rickandmortyapi.com/api/character')
    //   .then((data) => data.json())
    //   .then((json) => console.log(json.results));
    // Async await
    // const data = await fetch('https://rickandmortyapi.com/api/character');
    // const json = await data.json();
    // console.log(json.results);
    // axios
    const { data } = await axios('https://rickandmortyapi.com/api/character');
    setCharacters(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  console.log(idPersonaje);

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    // </Routes>
    // </BrowserRouter>
    <>
      {isLoading && <p>Loading...</p>}
      {characters?.map((character) => (
        <Card
          character={character}
          key={character.id}
          setIdPersonaje={setIdPersonaje}
        />
      ))}
    </>
  );
}

export default App;
