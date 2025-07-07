import { useEffect, useState } from 'react';
import { fetchCharacters } from '@/services/characters';
import { Character, CharacterStatus } from '@/types/character';

export const useCharactersRows = () => {
  const [charactersRow1, setCharactersRow1] = useState<Character[]>([]);
  const [charactersRow2, setCharactersRow2] = useState<Character[]>([]);
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [totalPages1, setTotalPages1] = useState(1);
  const [totalPages2, setTotalPages2] = useState(1);

  useEffect(() => {
    const loadCharacters1 = async () => {
      try {
        const data = await fetchCharacters(page1, search1);
        setCharactersRow1(
          data.results.map((char) => ({
            ...char,
            status: char.status as CharacterStatus
          }))
        );
        setTotalPages1(data.info.pages);
      } catch (error) {
        console.error('Error fetching characters for row 1:', error);
        setCharactersRow1([]);
        setTotalPages1(1);
      }
    };
    loadCharacters1();
  }, [page1, search1]);

  useEffect(() => {
    const loadCharacters2 = async () => {
      try {
        const data = await fetchCharacters(page2, search2);
        setCharactersRow2(
          data.results.map((char) => ({
            ...char,
            status: char.status as CharacterStatus
          }))
        );
        setTotalPages2(data.info.pages);
      } catch (error) {
        console.error('Error fetching characters for row 2:', error);
        setCharactersRow2([]);
        setTotalPages2(1);
      }
    };
    loadCharacters2();
  }, [page2, search2]);

  return {
    charactersRow1,
    charactersRow2,
    search1,
    search2,
    setSearch1,
    setSearch2,
    page1,
    page2,
    setPage1,
    setPage2,
    totalPages1,
    totalPages2,
  };
};
