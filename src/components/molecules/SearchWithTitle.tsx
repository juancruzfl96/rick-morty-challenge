import { Title } from "../atoms/Title";
import { SearchInput } from "../atoms/SearchInput";

type SearchWithTitleProps = {
  title: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
};

export const SearchWithTitle = ({ title, searchValue, onSearchChange }: SearchWithTitleProps) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 w-full">
    <Title text={title} />
    <div className="flex-1 w-full">
      <SearchInput 
        value={searchValue} 
        onChange={onSearchChange} 
        placeholder="Buscar personaje..." 
      />
    </div>
  </div>
);
