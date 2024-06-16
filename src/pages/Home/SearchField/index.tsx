import React, { useState } from 'react';

import searchIcon from '../../../assets/search-icon.png'
import Typography from '../../../components/Typography';

import styles from './styles';

interface SearchInputProps {
    placeholder?: string;
    onSearch?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search...', onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && onSearch) {
            onSearch(searchTerm);
        }
    };

  return (
    <div className={styles.container}>
      <Typography
        color='#6C757D'
      >
        Search...
      </Typography>
      <img src={searchIcon} alt='' width={24} height={24} />
    </div>
    );
};

export default SearchInput;