import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CharacterCard } from '@/components/organisms/CharacterCard';

import type { Character, CharacterStatus } from '@/types/character';

const mockCharacter: Character = {
  id: 1,
  image: 'image-url',
  name: 'Rick',
  status: 'Alive' as CharacterStatus,
  species: 'Human',
  gender: 'Male',
  origin: { name: 'Earth' },
  location: { name: 'Earth' },
  episode: [],
};

test('renders character card and triggers select', () => {
  const onSelect = jest.fn();
  render(<CharacterCard character={mockCharacter} onSelect={onSelect} />);
  const name = screen.getByText('Rick');
  expect(name).toBeInTheDocument();

  fireEvent.click(name);
  expect(onSelect).toHaveBeenCalled();
});
