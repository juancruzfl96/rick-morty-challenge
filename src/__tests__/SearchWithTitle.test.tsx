import { render, screen, fireEvent } from '@testing-library/react';
import { SearchWithTitle } from '@/components/molecules/SearchWithTitle';

test('renders SearchWithTitle and triggers onSearchChange', () => {
  const onSearchChange = jest.fn();
  render(<SearchWithTitle title="Buscar" searchValue="" onSearchChange={onSearchChange} />);

  expect(screen.getByText('Buscar')).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText('Buscar personaje...'), {
    target: { value: 'Morty' },
  });

  expect(onSearchChange).toHaveBeenCalledWith('Morty');
});
