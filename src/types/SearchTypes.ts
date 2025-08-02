export interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export interface SearchButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export interface SearchState {
  query: string;
  isSearching: boolean;
}