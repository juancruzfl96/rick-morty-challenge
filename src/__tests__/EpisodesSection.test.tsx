import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EpisodesSection } from '@/components/organisms/EpisodesSection';

test('renders episodes list', () => {
  const episodes = [
    { id: 1, name: 'Pilot', episode: 'S01E01' },
    { id: 2, name: 'Lawnmower Dog', episode: 'S01E02' },
  ];
  render(<EpisodesSection episodes={episodes} />);
  expect(screen.getByText('S01E01')).toBeInTheDocument();
  expect(screen.getByText('S01E02')).toBeInTheDocument();
});
