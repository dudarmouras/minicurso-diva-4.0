import "./style.css";

interface SearchBarProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; //onChange é uma função que recebe um evento do tipo React.ChangeEvent<HTMLInputElement>
}

// onChange={onChange} conecta o evento nativo do input com a função que veio via prop — 
// quando o usuário digita, 
// o input dispara o evento, que chama onChange, que lá no App.tsx chama setSearchTerm
const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Procure um produto..."
        className="input-box"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;