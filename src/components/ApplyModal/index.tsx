import React, { useState } from "react";
import Modal from "../Modal";
import Typography from "../Typography";
import BaseButton from "../BaseButton";

import close from '../../assets/close-icon.png';

import styles from './styles';

const ApplyModal = ({
  isOpen,
  onClose,
  onApply,
}: {
  isOpen: boolean,
  onClose: () => void,
  onApply: () => void,
}) => {
  const [CVFileList, setCVFileList] = useState<File[]>([]);
  const [selectedCVFileIndex, setSelectedCVFileIndex] = useState<number | null>(null);
  const [CLFileList, setCLFileList] = useState<File[]>([]);
  const [selectedCLFile, setSelectedCLFile] = useState<string | null>('noCL');

  const handleCVFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCVFileList((prevFileList) => [...prevFileList, file]);
    }
  };

  const handleCLFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCLFileList((prevFileList) => [...prevFileList, file]);
    }
  };

  const handleRadioChange = (index: number) => {
    setSelectedCVFileIndex(index);
  };

  const handleCLRadioChange = (value: string) => {
    setSelectedCLFile(value);
  };

  const handleApply = () => {
    onClose();
    onApply();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.header}>
        <Typography variant="title1">Apply Job</Typography>
        <BaseButton onClick={onClose} className={styles.closeIcon}>
          <img src={close} alt="" width={24} height={24} />
        </BaseButton>
      </div>
      <form className={styles.form}>
        <div>
          <div className={styles.header}>
            <Typography variant="title2">CV</Typography>
            <input
              type="file"
              id="fileInput"
              onChange={handleCVFileChange}
              accept=".pdf,.doc,.docx"
              className={styles.input}
            />
          </div>
          {CVFileList.length > 0 && (
            <div>
              {CVFileList.map((file, index) => (
                <div key={index} className={styles.fileItem}>
                  <input
                    type="radio"
                    id={`file-${index}`}
                    name="selectedFile"
                    value={file.name}
                    checked={selectedCVFileIndex === index}
                    onChange={() => handleRadioChange(index)}
                    className={styles.radioButton}
                  />
                  <label htmlFor={`file-${index}`}>
                    <Typography>
                      {file.name}
                    </Typography>
                    
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className={styles.header}>
            <Typography variant="title2">Cover Letter</Typography>
            <input
              type="file"
              id="fileInput"
              onChange={handleCLFileChange}
              accept=".pdf,.doc,.docx"
              className={styles.input}
            />
          </div>
          <div className={styles.fileItem}>
            <input
              type="radio"
              id='noCL'
              name="CL"
              value={'noCL'}
              checked={selectedCLFile === 'noCL'}
              onChange={() => handleCLRadioChange('noCL')}
              className={styles.radioButton}
            />
            <label htmlFor='noCL'>
              <Typography>
                Apply without cover letter
              </Typography>
              
            </label>
          </div>
          {CVFileList.length > 0 && (
            <div>
              {CLFileList.map((file, index) => (
                <div key={index} className={styles.fileItem}>
                  <input
                    type="radio"
                    id={`file-${index}`}
                    name="CL"
                    value={file.name}
                    checked={selectedCLFile === `file-${index}`}
                    onChange={() => handleCLRadioChange(`file-${index}`)}
                    className={styles.radioButton}
                  />
                  <label htmlFor={`file-${index}`}>
                    <Typography>
                      {file.name}
                    </Typography>
                    
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        <BaseButton onClick={handleApply} className={styles.button}>
          <Typography color="white">
            Apply
          </Typography>
        </BaseButton>
      </form>
    </Modal>
  );
};

export default ApplyModal;