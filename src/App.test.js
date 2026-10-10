import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el formulario de contacto', () => {
  render(<App />);
  expect(screen.getByText(/formulario de contacto/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
});
