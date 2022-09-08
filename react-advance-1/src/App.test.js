import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // renderiza el componente
  const linkElement = screen.getByText(/learn react/i); // buscamos que haya renderizado nuestro componente
  expect(linkElement).toBeInTheDocument(); // si tuvo o no que ser renderizado el mismo
});
