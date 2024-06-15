import React, { useState } from "react";
import Typography from "../../../../components/Typography";
import styles from "../../styles";

const Step4 = ({ onNext }: { onNext: () => void }) => {
  const [jobTitles, setJobTitles] = useState<string[]>([]);
  const [currentJobTitle, setCurrentJobTitle] = useState<string>('');
  const [locations, setLocations] = useState<string[]>([]);
  const [currentLocation, setCurrentLocation] = useState<string>('');

  const handleJobTitleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && currentJobTitle.trim()) {
      event.preventDefault();
      setJobTitles([...jobTitles, currentJobTitle.trim()]);
      setCurrentJobTitle('');
    }
  };

  const handleLocationKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && currentLocation.trim()) {
      event.preventDefault();
      setLocations([...locations, currentLocation.trim()]);
      setCurrentLocation('');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Desired Job Titles/Positions:', jobTitles);
    console.log('Preferred work Locations:', locations);
    onNext();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.gap}>
        <div>
          <Typography variant="title1">
            Desired Job Title/Position
          </Typography>
          <div className={styles.multipleInputContainer}>
            <div className={styles.tagContainer}>
              {jobTitles.map((title, index) => (
                <div key={index} className={styles.tag}>
                  <Typography>
                    {title}
                  </Typography>
                  <button
                    type="button"
                    className={styles.socialIcons}
                    onClick={() => setJobTitles(jobTitles.filter((_, i) => i !== index))}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <input
              type="text"
              id="jobTitle"
              value={currentJobTitle}
              onChange={(e) => setCurrentJobTitle(e.target.value)}
              onKeyDown={handleJobTitleKeyDown}
              placeholder="Press Enter to add"
              className={styles.multipleInput}
            />
          </div>
        </div>
        <div>
          <Typography>
            Preferred work Location(s)
          </Typography>
          <div className={styles.multipleInputContainer}>
            <div className={styles.tagContainer}>
              {locations.map((location, index) => (
                <div key={index} className={styles.tag}>
                  <Typography>
                    {location}
                  </Typography>
                  <button
                    type="button"
                    className={styles.socialIcons}
                    onClick={() => setLocations(locations.filter((_, i) => i !== index))}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <input
              type="text"
              id="location"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              onKeyDown={handleLocationKeyDown}
              placeholder="Press Enter to add"
              className={styles.multipleInput}
            />
          </div>
        </div>
        

        
        <button type="submit" className={styles.authButton}>
          <Typography variant="title2" color="white" textAlign="center">
            Submit
          </Typography>
        </button>
      </form>
    </div>
  );
};

export default Step4;
