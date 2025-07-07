type SearchInputProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({ placeholder = "Buscar...", value, onChange }: SearchInputProps) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className="border border-gray-600 rounded-lg p-2 w-full bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />
);
