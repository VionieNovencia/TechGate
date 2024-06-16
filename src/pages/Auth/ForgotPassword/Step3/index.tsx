import React, { useState, useRef } from "react";
import Typography from "../../../../components/Typography";

import styles from "../../styles";

const Step3 = ({
  onNext,
  email,
}: {
  onNext: () => void,
  email: string,
}) => {
  const [first, setFirst] = useState<string>('');
  const [second, setSecond] = useState<string>('');
  const [third, setThird] = useState<string>('');
  const [forth, setForth] = useState<string>('');

  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const forthRef = useRef<HTMLInputElement>(null);

  const handleNext = (e: any) => {
    e.preventDefault();
    onNext();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>, nextRef?: React.RefObject<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setValue(value);
      if (value.length === 1 && nextRef) {
        nextRef.current?.focus();
      }
    }
  };

  return (
    <React.Fragment>
      <Typography variant='headline' textAlign="center">
        Forgot Password
      </Typography>
      <div>
        <Typography width="325px" color="#6C757D" textAlign="center">
          {`Please enter the 4 digits code sent to `}
        </Typography>
        <Typography textAlign="center" fontWeight={500}>
          {email}
        </Typography>
      </div>
      
      <form onSubmit={handleNext} className={styles.flexColumnCenter}>
        <div className={styles.dropdownContainer}>
          <input
            type="tel"
            value={first}
            onChange={(e) => handleInputChange(e, setFirst, secondRef)}
            maxLength={1}
            required
            className={styles.pinInputContainer}
            style={{ textAlign: 'center' }}
          />
          <input
            type="tel"
            value={second}
            onChange={(e) => handleInputChange(e, setSecond, thirdRef)}
            maxLength={1}
            required
            className={styles.pinInputContainer}
            ref={secondRef}
            style={{ textAlign: 'center' }}
          />
          <input
            type="tel"
            value={third}
            onChange={(e) => handleInputChange(e, setThird, forthRef)}
            maxLength={1}
            required
            className={styles.pinInputContainer}
            ref={thirdRef}
            style={{ textAlign: 'center' }}
          />
          <input
            type="tel"
            value={forth}
            onChange={(e) => handleInputChange(e, setForth)}
            maxLength={1}
            required
            className={styles.pinInputContainer}
            ref={forthRef}
            style={{ textAlign: 'center' }}
          />
        </div>
        <button type="submit" className={styles.authButton}>
          <Typography variant="title2" color="white" textAlign="center">
            Verify
          </Typography>
        </button>
      </form>
    </React.Fragment>
  );
};

export default Step3;
