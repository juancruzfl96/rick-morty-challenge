export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  image: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  episode: string[];
}

export interface CharacterAPIResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}
