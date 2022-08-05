// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Home } from './page/Home';
import { Card } from './components/Card';
// eslint-disable-next-line import/no-named-as-default
import useFetch from './hooks/CustomFetch/useFetch';
import { ThemeProvider, useThemeContext } from './providers/ThemeProvider';
import { Header } from './components/Header';

function App() {
  const [idPersonaje, setIdPersonaje] = useState(1);
  // const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon';
  const { data, loading, error } = useFetch(url);
  const dataPersonaje = useFetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
  const getCharacter = () => {
    console.log(data);
  };
  const getIdPersonaje = (id) => {
    setIdPersonaje(id);
  };
  console.log(dataPersonaje.data);

  useEffect(() => {
    getCharacter();
  }, [loading]);

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    // </Routes>
    // </BrowserRouter>
    <ThemeProvider>
      <Header />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data?.results?.map((character) => (
        <Card
          character={character}
          key={character.id}
          getIdPersonaje={getIdPersonaje}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
