import { useState, useEffect } from 'react';
import { fetchEpisodesById } from '@/services/episodes'; 
import { Character } from '@/types/character';
import { Episode } from '@/types/episode';

export const useCharacterSelection = () => {
  const [selectedCharacter1, setSelectedCharacter1] = useState<Character | null>(null);
  const [selectedCharacter2, setSelectedCharacter2] = useState<Character | null>(null);
  const [episodesCharacter1, setEpisodesCharacter1] = useState<Episode[]>([]);
  const [episodesCharacter2, setEpisodesCharacter2] = useState<Episode[]>([]);
  const [sharedEpisodes, setSharedEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const loadEpisodes = async (character: Character, setEpisodes: (eps: Episode[]) => void) => {
      try {
        if (character.episode.length === 0) {
          setEpisodes([]);
          return;
        }
        const episodeIds = character.episode.map(ep => parseInt(ep.split('/').pop() || '0'));
        const data = await fetchEpisodesById(episodeIds);
        setEpisodes(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error('Error fetching episodes:', error);
        setEpisodes([]);
      }
    };

    if (selectedCharacter1) {
      loadEpisodes(selectedCharacter1, setEpisodesCharacter1);
    } else {
      setEpisodesCharacter1([]);
    }

  }, [selectedCharacter1]);

  useEffect(() => {
    const loadEpisodes = async (character: Character, setEpisodes: (eps: Episode[]) => void) => {
      try {
        if (character.episode.length === 0) {
          setEpisodes([]);
          return;
        }
        const episodeIds = character.episode.map(ep => parseInt(ep.split('/').pop() || '0'));
        const data = await fetchEpisodesById(episodeIds);
        setEpisodes(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error('Error fetching episodes:', error);
        setEpisodes([]);
      }
    };

    if (selectedCharacter2) {
      loadEpisodes(selectedCharacter2, setEpisodesCharacter2);
    } else {
      setEpisodesCharacter2([]);
    }

  }, [selectedCharacter2]);

  useEffect(() => {
    const shared = episodesCharacter1.filter(ep1 =>
      episodesCharacter2.some(ep2 => ep2.id === ep1.id)
    );
    setSharedEpisodes(shared);
  }, [episodesCharacter1, episodesCharacter2]);

  return {
    selectedCharacter1,
    setSelectedCharacter1,
    selectedCharacter2,
    setSelectedCharacter2,
    episodesCharacter1,
    episodesCharacter2,
    sharedEpisodes
  };
};
