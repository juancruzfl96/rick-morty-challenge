import { useState } from 'react';
import { CharacterModal } from './CharacterModal';
import { Character } from '@/types/character';

type CharacterCardProps = {
  character: Character;
  isSelected?: boolean;
  onSelect?: () => void;
};

export const CharacterCard = ({ character, isSelected = false, onSelect }: CharacterCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded shadow p-2 w-40 flex flex-col items-center cursor-pointer 
        ${isSelected ? 'bg-blue-100 border-blue-500' : 'bg-white'}
      `}
      onClick={() => {
        if (onSelect) onSelect();
      }}
    >
      <img src={character.image} alt={character.name} className="rounded mb-2" />
      <h3 className="font-semibold text-center">{character.name}</h3>
      <p className="text-sm text-center">{character.status} - {character.species}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className="mt-2 text-xs text-blue-600 hover:underline"
      >
        Ver más
      </button>

      {open && (
        <CharacterModal character={character} onClose={() => setOpen(false)} />
      )}
    </div>
  );
};
