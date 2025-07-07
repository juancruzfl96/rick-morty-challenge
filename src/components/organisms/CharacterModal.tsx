import React from 'react';

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  image: string;
  episode: string[];
};

type CharacterModalProps = {
  character: Character;
  onClose: () => void;
};

export const CharacterModal = ({ character, onClose }: CharacterModalProps) => (
  <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white text-black rounded-lg shadow-xl w-full max-w-md p-6 relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        aria-label="Cerrar"
      >
        ✕
      </button>

      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-center">{character.name}</h2>
        <img
          src={character.image}
          alt={character.name}
          className="rounded-full w-40 h-40 object-cover border-2 border-gray-200"
        />
        <div className="text-sm space-y-2 w-full">
          <p><span className="font-semibold">Status:</span> {character.status}</p>
          <p><span className="font-semibold">Especie:</span> {character.species}</p>
          <p><span className="font-semibold">Género:</span> {character.gender}</p>
          <p><span className="font-semibold">Origen:</span> {character.origin.name}</p>
          <p><span className="font-semibold">Ubicación:</span> {character.location.name}</p>
          <p><span className="font-semibold">Episodios:</span> {character.episode.length}</p>
        </div>
      </div>
    </div>
  </div>
);
