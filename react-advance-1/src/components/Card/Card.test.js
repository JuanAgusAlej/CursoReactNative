/* eslint-disable import/no-unresolved */
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/extensions
import Card from './Card';

const character = {
  name: 'Mateo',
  species: 'human',
  image: 'http://.../',
};

describe('Card test', () => {
  test('Esperamos que renderice el componente card', () => {
    render(<Card character={character} />); // renderizamos el componente
    const element = screen.getByText(character.name); // buscamos lo que renderizamos
    expect(element).toBeInTheDocument();
  });
});
