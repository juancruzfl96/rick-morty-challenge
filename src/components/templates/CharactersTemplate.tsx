import { CharacterRow } from '../organisms/CharacterRow';
import { Character } from '@/types/character';

type CharactersTemplateProps = {
  charactersRow1: Character[];
  charactersRow2: Character[];
  search1: string;
  search2: string;
  onSearch1Change: (value: string) => void;
  onSearch2Change: (value: string) => void;
  currentPage1: number;
  totalPages1: number;
  currentPage2: number;
  totalPages2: number;
  onPage1Change: (page: number) => void;
  onPage2Change: (page: number) => void;
  selectedCharacter1: Character | null;
  selectedCharacter2: Character | null;
  onCharacter1Select: (character: Character | null) => Promise<void> | void;
  onCharacter2Select: (character: Character | null) => Promise<void> | void;
};

export const CharactersTemplate = ({
  charactersRow1,
  charactersRow2,
  search1,
  search2,
  onSearch1Change,
  onSearch2Change,
  currentPage1,
  totalPages1,
  currentPage2,
  totalPages2,
  onPage1Change,
  onPage2Change,
  selectedCharacter1,
  selectedCharacter2,
  onCharacter1Select,
  onCharacter2Select,
}: CharactersTemplateProps) => (
  <div className="grid grid-cols-2 gap-4 h-full">
    <div className="overflow-y-auto border-r border-gray-600 p-2">
      <CharacterRow
        rowTitle={selectedCharacter1 ? selectedCharacter1.name : "Personaje 1"}
        characters={charactersRow1}
        searchValue={search1}
        onSearchChange={onSearch1Change}
        currentPage={currentPage1}
        totalPages={totalPages1}
        onPageChange={onPage1Change}
        selectedCharacter={selectedCharacter1}
        onCharacterSelect={onCharacter1Select}
      />
    </div>
    <div className="overflow-y-auto p-2">
      <CharacterRow
        rowTitle={selectedCharacter2 ? selectedCharacter2.name : "Personaje 2"}
        characters={charactersRow2}
        searchValue={search2}
        onSearchChange={onSearch2Change}
        currentPage={currentPage2}
        totalPages={totalPages2}
        onPageChange={onPage2Change}
        selectedCharacter={selectedCharacter2}
        onCharacterSelect={onCharacter2Select}
      />
    </div>
  </div>
);
