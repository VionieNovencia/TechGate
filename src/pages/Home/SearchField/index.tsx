import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import searchIcon from '../../../assets/search-icon.png';
import jobIcon from '../../../assets/job.png';
import locationIcon from '../../../assets/location.png';
import dollarIcon from '../../../assets/dollar.png';
import Typography from '../../../components/Typography';
import styles from './styles';
import { cities } from './cities';

const jobs = [
  'Software Engineer',
  'Data Scientist',
  'Product Manager',
  'Designer',
  'DevOps Engineer',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'Project Manager',
  'Marketing Specialist',
  'Sales Manager',
  'UX/UI Designer',
  'Business Analyst',
  'System Administrator',
  'Network Engineer',
  'Database Administrator',
  'Cloud Architect',
  'Machine Learning Engineer',
  'Security Analyst',
  'IT Support Specialist',
  'Mobile App Developer',
  'IT Manager',
  'Solutions Architect',
  'Technical Writer',
  'Quality Assurance Engineer',
  'Technical Support Engineer',
  'Scrum Master',
  'Site Reliability Engineer',
  'Data Analyst',
  'Artificial Intelligence Engineer'
];

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
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
  const [jobSuggestions, setJobSuggestions] = useState<string[]>([]);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState<boolean>(false);
  const [showJobSuggestions, setShowJobSuggestions] = useState<boolean>(false);

  const handleWageInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    setWage: Dispatch<SetStateAction<number>>
  ) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setWage(value ? Number(value) : 0);
  };

  const handleClear = (setFunction: Dispatch<SetStateAction<any>>, defaultValue: any) => {
    setFunction(defaultValue);
  };

  useEffect(() => {
    if (location) {
      const filteredSuggestions = cities.filter((city) =>
        city.toLowerCase().startsWith(location.toLowerCase())
      );
      setLocationSuggestions(filteredSuggestions);
      setShowLocationSuggestions(true);
    } else {
      setLocationSuggestions([]);
      setShowLocationSuggestions(false);
    }
  }, [location]);

  useEffect(() => {
    if (job) {
      const filteredSuggestions = jobs.filter((jobTitle) =>
        jobTitle.toLowerCase().includes(job.toLowerCase())
      );
      setJobSuggestions(filteredSuggestions);
      setShowJobSuggestions(true);
    } else {
      setJobSuggestions([]);
      setShowJobSuggestions(false);
    }
  }, [job]);

  return (
    <React.Fragment>
      {!isClicked && (
        <div className={styles.container} onClick={() => setIsClicked(true)}>
          <Typography color='#6C757D'>Search...</Typography>
          <img src={searchIcon} alt='Search Icon' width={24} height={24} />
        </div>
      )}
      {isClicked && (
        <div className={styles.flexRow}>
          <div className={styles.searchContainer}>
            <img src={jobIcon} alt='Job Icon' width={24} height={24} />
            <input
              type='text'
              value={job}
              onChange={(e) => setJob(e.target.value)}
              required
              placeholder='E.g. Software Engineer'
              className={styles.searchInput}
              onFocus={() => setShowJobSuggestions(true)}
              onBlur={() => setTimeout(() => setShowJobSuggestions(false), 100)}
            />
            {job && (
              <button
                className={styles.clearButton}
                onClick={() => handleClear(setJob, '')}
              >
                &times;
              </button>
            )}
            {showJobSuggestions && jobSuggestions.length > 0 && (
              <div className={styles.suggestionsContainer}>
                {jobSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className={styles.suggestion}
                    onMouseDown={() => {
                      setJob(suggestion);
                      setShowJobSuggestions(false);
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.searchContainer}>
            <img src={locationIcon} alt='Location Icon' width={24} height={24} />
            <input
              type='text'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              placeholder='E.g. Bandung'
              className={styles.searchInput}
              onFocus={() => setShowLocationSuggestions(true)}
              onBlur={() => setTimeout(() => setShowLocationSuggestions(false), 100)}
            />
            {location && (
              <button
                className={styles.clearButton}
                onClick={() => handleClear(setLocation, '')}
              >
                &times;
              </button>
            )}
            {showLocationSuggestions && locationSuggestions.length > 0 && (
              <div className={styles.suggestionsContainer}>
                {locationSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className={styles.suggestion}
                    onMouseDown={() => {
                      setLocation(suggestion);
                      setShowLocationSuggestions(false);
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.searchContainer}>
            <img src={dollarIcon} alt='Dollar Icon' width={24} height={24} />
            <div className={styles.wageContainer}>
              <Typography color={startWage ? 'black' : '#6C757D'}>Rp</Typography>
              <input
                type='text'
                value={startWage ? startWage.toString() : ''}
                onChange={(e) => handleWageInput(e, setStartWage)}
                required
                placeholder='5.000.000'
                className={styles.wageInput}
              />
              {startWage !== 0 && (
                <button
                  className={styles.clearButton}
                  onClick={() => handleClear(setStartWage, 0)}
                >
                  &times;
                </button>
              )}
            </div>
            <Typography variant='title2'>-</Typography>
            <div className={styles.wageContainer}>
              <Typography color={endWage ? 'black' : '#6C757D'}>Rp</Typography>
              <input
                type='text'
                value={endWage ? endWage.toString() : ''}
                onChange={(e) => handleWageInput(e, setEndWage)}
                required
                placeholder='7.000.000'
                className={styles.wageInput}
              />
              {endWage !== 0 && (
                <button
                  className={styles.clearButton}
                  onClick={() => handleClear(setEndWage, 0)}
                >
                  &times;
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchInput;
