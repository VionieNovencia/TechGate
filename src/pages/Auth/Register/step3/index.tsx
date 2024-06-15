import React, { useState } from "react";
import Typography from "../../../../components/Typography";

import styles from "../../styles";

const Step3 = ({
  onNext
}: {
  onNext: () => void
}) => {
  const [isHaveJobChecked, setIsHaveJobChecked] = useState<boolean>(true);
  const [jobTitle, setJobTitle] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [startMonth, setStartMonth] = useState<string>('');
  const [startYear, setStartYear] = useState<string>('');
  const [endMonth, setEndMonth] = useState<string>('');
  const [endYear, setEndYear] = useState<string>('');
  const [isStillInRole, setIsStillInRole] = useState<boolean>(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from(new Array(50), (val, index) => new Date().getFullYear() - index);


  const handleRegister = (e: any) => {
    e.preventDefault();
    onNext();
  };

  return (
    <React.Fragment>
      <Typography variant='headline' textAlign="center">
        Recent Experience
      </Typography>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          value={'haveExprience'}
          onChange={() => setIsHaveJobChecked(!isHaveJobChecked)}
          checked={isHaveJobChecked}
          required
        />
        <Typography>
          I have experience
        </Typography>
      </div>
      <form onSubmit={handleRegister} className={styles.gap}>
        {isHaveJobChecked && (
          <React.Fragment>
            <div>
              <Typography variant="title1" >
                Job Title
              </Typography>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
                className={styles.inputContainer}
              />
            </div>
            <div>
              <Typography variant="title1" >
                Company Name
              </Typography>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className={styles.inputContainer}
              />
            </div>
            <div>
              <Typography variant="title1">
                Start Date
              </Typography>
              <div className={styles.dropdownContainer}>
                <select
                  value={startMonth}
                  onChange={(e) => setStartMonth(e.target.value)}
                  required
                  className={styles.dateInputContainer}
                >
                  <option value="" disabled>Select Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                  required
                  className={styles.dateInputContainer}
                >
                  <option value="" disabled>Select Year</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <Typography variant="title1">
                End Date
              </Typography>
              <div className={styles.dropdownContainer}>
                <select
                  value={endMonth}
                  onChange={(e) => setEndMonth(e.target.value)}
                  required={!isStillInRole}
                  className={styles.dateInputContainer}
                  disabled={isStillInRole}
                >
                  <option value="" disabled>Select Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                  required={!isStillInRole}
                  className={styles.dateInputContainer}
                  disabled={isStillInRole}
                >
                  <option value="" disabled>Select Year</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={isStillInRole}
                  onChange={() => setIsStillInRole(!isStillInRole)}
                />
                <Typography>
                  I am currently in this role
                </Typography>
              </div>
            </div>
          </React.Fragment>
        )}
        {!isHaveJobChecked && (
          <div className={styles.noExperienceContainer}>
            <Typography>
              New to the industry? That's fine. You can always add your work experience later in your Profile.
            </Typography>
          </div>
        )}
        <button type="submit" className={styles.authButton}>
          <Typography variant="title2" color="white" textAlign="center">
            Next
          </Typography>
        </button>
      </form>
    </React.Fragment>
  )
};

export default Step3;