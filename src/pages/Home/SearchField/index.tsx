import React, { Dispatch, SetStateAction, useState } from 'react';

import searchIcon from '../../../assets/search-icon.png';
import jobIcon from '../../../assets/job.png';
import locationIcon from '../../../assets/location.png';
import dollarIcon from '../../../assets/dollar.png';

import Typography from '../../../components/Typography';

import styles from './styles';

interface SearchInputProps {
  job: string;
  setJob: Dispatch<SetStateAction<string>>;
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  startWage: number;
  setStartWage: Dispatch<SetStateAction<number>>;
  endWage: number;
  setEndWage: Dispatch<SetStateAction<number>>;
}

const SearchInput: React.FC<SearchInputProps> = ({
  job,
  setJob,
  location,
  setLocation,
  startWage,
  setStartWage,
  endWage,
  setEndWage,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleWageInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    setWage: Dispatch<SetStateAction<number>>
  ) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setWage(value ? Number(value) : 0);
  };

  return (
    <React.Fragment>
      {!isClicked && (
        <div className={styles.container} onClick={() => setIsClicked(true)}>
          <Typography color='#6C757D'>
            Search...
          </Typography>
          <img src={searchIcon} alt='Search Icon' width={24} height={24} />
        </div>
      )}
      {isClicked && (
        <div className={styles.flexRow}>
          <div className={styles.searchContainer}>
            <img
              src={jobIcon}
              alt='Job Icon'
              width={24}
              height={24}
            />
            <input
              type='text'
              value={job}
              onChange={(e) => setJob(e.target.value)}
              required
              placeholder='E.g. Software Engineer'
              className={styles.searchInput}
            />
          </div>
          <div className={styles.searchContainer}>
            <img
              src={locationIcon}
              alt='Location Icon'
              width={24}
              height={24}
            />
            <input
              type='text'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              placeholder='E.g. Bandung'
              className={styles.searchInput}
            />
          </div>
          <div className={styles.searchContainer}>
            <img
              src={dollarIcon}
              alt='Dollar Icon'
              width={24}
              height={24}
            />
            <div className={styles.wageContainer}>
              <Typography color={startWage ? 'black' : '#6C757D'}>
                Rp
              </Typography>
              <input
                type='text'
                value={startWage ? startWage.toString() : ''}
                onChange={(e) => handleWageInput(e, setStartWage)}
                required
                placeholder='5.000.000'
                className={styles.wageInput}
              />
            </div>
            <Typography variant='title2'>
              -
            </Typography>
            <div className={styles.wageContainer}>
              <Typography color={endWage ? 'black' : '#6C757D'}>
                Rp
              </Typography>
              <input
                type='text'
                value={endWage ? endWage.toString() : ''}
                onChange={(e) => handleWageInput(e, setEndWage)}
                required
                placeholder='7.000.000'
                className={styles.wageInput}
              />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchInput;
