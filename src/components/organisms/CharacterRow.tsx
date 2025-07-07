import { SearchWithTitle } from '../molecules/SearchWithTitle';
import { CharacterCard } from './CharacterCard';
import { Pagination } from '../atoms/Pagination';
import { Character } from '@/types/character';

type CharacterRowProps = {
  rowTitle: string;
  characters: Character[];
  searchValue: string;
  onSearchChange: (value: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  selectedCharacter: Character | null;
  onCharacterSelect: (character: Character | null) => void | Promise<void>;
};

export const CharacterRow = ({
  rowTitle,
  characters,
  searchValue,
  onSearchChange,
  currentPage,
  totalPages,
  onPageChange,
  selectedCharacter,
  onCharacterSelect,
}: CharacterRowProps) => (
  <div>
    <SearchWithTitle
      title={rowTitle}
      searchValue={searchValue}
      onSearchChange={onSearchChange}
    />
    <div className="flex flex-wrap gap-4 justify-center">
      {characters.map((char) => (
        <CharacterCard
          key={char.id}
          character={char}
          isSelected={selectedCharacter?.id === char.id}
          onSelect={() =>
            onCharacterSelect(selectedCharacter?.id === char.id ? null : char)
          }
        />
      ))}
    </div>
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  </div>
);
