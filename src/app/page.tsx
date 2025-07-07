'use client';

import { useState } from 'react';
import { CharactersTemplate } from '@/components/templates/CharactersTemplate';
import { EpisodesSection } from '@/components/organisms/EpisodesSection';
import { useCharactersRows } from '@/hooks/useCharactersRows';
import { fetchEpisodesById } from '@/services/episodes';
import { Character } from '@/types/character';
import { Episode } from '@/types/episode';

export default function Home() {
  const {
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
  } = useCharactersRows();

  const [selectedCharacter1, setSelectedCharacter1] = useState<Character | null>(null);
  const [selectedCharacter2, setSelectedCharacter2] = useState<Character | null>(null);
  const [episodes1, setEpisodes1] = useState<Episode[]>([]);
  const [episodes2, setEpisodes2] = useState<Episode[]>([]);
  const [sharedEpisodes, setSharedEpisodes] = useState<Episode[]>([]);

  async function handleCharacter1Select(char: Character | null) {
    if (!char) {
      setSelectedCharacter1(null);
      setEpisodes1([]);
      updateShared([], episodes2);
      return;
    }

    setSelectedCharacter1(char);
    const epData = await loadEpisodes(char);
    setEpisodes1(epData);
    updateShared(epData, episodes2);
  }

  async function handleCharacter2Select(char: Character | null) {
    if (!char) {
      setSelectedCharacter2(null);
      setEpisodes2([]);
      updateShared(episodes1, []);
      return;
    }

    setSelectedCharacter2(char);
    const epData = await loadEpisodes(char);
    setEpisodes2(epData);
    updateShared(episodes1, epData);
  }

  async function loadEpisodes(char: Character): Promise<Episode[]> {
    try {
      const ids = char.episode.map((url) =>
        parseInt(url.split('/').pop() || '0')
      );
      const data = await fetchEpisodesById(ids);
      return Array.isArray(data) ? data : [data];
    } catch (err) {
      console.error('Error loading episodes', err);
      return [];
    }
  }

  function updateShared(eps1: Episode[], eps2: Episode[]) {
    const shared = eps1.filter((e1) => eps2.some((e2) => e2.id === e1.id));
    setSharedEpisodes(shared);
  }

  return (
    <div className="flex flex-col h-screen">
      <div className={selectedCharacter1 && selectedCharacter2 ? 'h-2/3' : 'h-full'}>
        <CharactersTemplate
          charactersRow1={charactersRow1}
          charactersRow2={charactersRow2}
          search1={search1}
          search2={search2}
          onSearch1Change={(value) => {
            setPage1(1);
            setSearch1(value);
          }}
          onSearch2Change={(value) => {
            setPage2(1);
            setSearch2(value);
          }}
          currentPage1={page1}
          totalPages1={totalPages1}
          currentPage2={page2}
          totalPages2={totalPages2}
          onPage1Change={setPage1}
          onPage2Change={setPage2}
          selectedCharacter1={selectedCharacter1}
          selectedCharacter2={selectedCharacter2}
          onCharacter1Select={handleCharacter1Select}
          onCharacter2Select={handleCharacter2Select}
        />
      </div>

     {(selectedCharacter1 && selectedCharacter2) && (
  <div className="h-1/3 grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-auto p-2 bg-gray-900 text-white">
    <div className="flex flex-col">
      <h3 className="text-center font-bold mb-2">Personaje 1 - Episodios</h3>
      <EpisodesSection episodes={episodes1} />
    </div>
    <div className="flex flex-col">
      <h3 className="text-center font-bold mb-2">Compartidos</h3>
      <EpisodesSection episodes={sharedEpisodes} emptyMessage="Sin episodios compartidos" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-center font-bold mb-2">Personaje 2 - Episodios</h3>
      <EpisodesSection episodes={episodes2} />
    </div>
  </div>
)}
    </div>
  );
}
