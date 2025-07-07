import { CharacterAPIResponse } from '@/types/character';

const BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchCharacters(
  page: number = 1,
  name: string = ''
): Promise<CharacterAPIResponse> {
  const url = `${BASE_URL}/character?page=${page}&name=${encodeURIComponent(
    name
  )}`;
  const res = await fetch(url);

  if (res.status === 404) {
    return {
      info: {
        count: 0,
        pages: 1,
        next: null,
        prev: null,
      },
      results: [],
    };
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch characters: ${res.statusText}`);
  }

  return res.json();
}
