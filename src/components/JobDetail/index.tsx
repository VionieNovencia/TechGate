import React, { useEffect, useMemo, useState } from "react";

import companyIcon from '../../assets/company-icon.png';
import locationIcon from '../../assets/location.png';
import jobTypeIcon from '../../assets/job.png';
import dollarIcon from '../../assets/dollar.png';
import closeIcon from '../../assets/close-icon.png';

import Typography from "../Typography";

import { JobList } from "../../data/Job";

import styles from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import BaseButton from "../BaseButton";
import { useAuth } from "../../context/AuthContext";
import ApplyModal from "./ApplyModal";
import Stepper from "../ProgressBar";

interface JobDetailProps {
  jobId: string;
  clearSelectedJob: () => void;
  isButtonHidden?: boolean
}

const JobDetail: React.FC<JobDetailProps> = ({ jobId, clearSelectedJob, isButtonHidden=true }) => {
  const { savedJob, updateSavedJob, appliedJob, addAppliedJob } = useAuth();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);

  const selectedJob = useMemo(() => {
    return JobList[jobId];
  }, [jobId]);

  const isSaved = useMemo(() => {
    return (savedJob.includes(jobId))
  }, [savedJob, jobId]);

  const isApplied = useMemo(() => {
    return (appliedJob.includes(jobId))
  }, [appliedJob, jobId]);

  if (!selectedJob) {
    return <Typography>No job found</Typography>;
  }

  const handleSaved = () => {
    updateSavedJob({jobId});
  };

  const handleApply = () => {
    addAppliedJob({jobId});
  }

  return (
    <div className={styles.container}>
      <div className={styles.headSection}>
        <div className={styles.headContent}>
          <Typography
            variant="title1"
          >
            {selectedJob.title}
          </Typography>
          <Typography>
            {`${selectedJob.posted} days ago${selectedJob.applicants !== undefined ? ' - ' + selectedJob.applicants + ' applicants' : ''}`}
          </Typography>
          <div className={styles.flexRow}>
            <img src={companyIcon} alt="" width={24}  height={24} />
            <Typography>
              {selectedJob.company}
            </Typography>
          </div>
          <div className={styles.flexRow}>
            <img src={locationIcon} alt="" width={24}  height={24} />
            <Typography>
              {selectedJob.location}
            </Typography>
          </div>
          <div className={styles.flexRow}>
            <img src={jobTypeIcon} alt="" width={24}  height={24} />
            <Typography>
              {selectedJob.type}
            </Typography>
          </div>
          <div className={styles.flexRow}>
            <img src={dollarIcon} alt="" width={24}  height={24} />
            <Typography>
              {`${formatCurrency(selectedJob.startWage)} - ${formatCurrency(selectedJob.endWage)} `}
            </Typography>
          </div>
          {!isButtonHidden && (
            <div className={styles.buttonContainer}>
              <BaseButton onClick={() => setIsApplyModalOpen(true)} className={isApplied ? styles.appliedButton : styles.applyButton}>
                <Typography color={isApplied ? '#FF7900' : 'white'}>
                  {isApplied ? 'Applied' : 'Apply'}
                </Typography>
              </BaseButton>
              <BaseButton onClick={handleSaved} className={isSaved ? styles.savedButton : styles.saveButton}>
                <Typography color={isSaved ? '#007BFF' : 'white'}>
                  {isSaved ? 'Saved' : 'Save'}
                </Typography>
              </BaseButton>
            </div>
          )}
        </div>
        <BaseButton
          onClick={clearSelectedJob}
        >
          <img src={closeIcon} alt='' width={24} height={24} />
        </BaseButton>
      </div>
      <div className={styles.divider} />
      {selectedJob.detail && (
        <div className={styles.gap20px}>
          <div className={styles.gap5px}>
            <Typography variant="title2">
              Job Description
            </Typography>
            <div>
              {selectedJob.detail.jobDescription.map((desc) => (
                <ul className={styles.gap5px}>
                  <li>
                    <Typography>
                      {desc}
                    </Typography>
                  </li>
                </ul>
              ))}
            </div>
            
          </div>
          <div className={styles.gap5px}>
            <Typography variant="title2">
              Requirements
            </Typography>
            {selectedJob.detail.requirements.map((req) => (
              <ul className={styles.gap5px}>
                <li>
                  <Typography>
                    {req}
                  </Typography>
                </li>
              </ul>
            ))}
          </div>
          <div className={styles.gap5px}>
            <Typography variant="title2">
              Application Process
            </Typography>
            <Stepper step={selectedJob.detail.steps} />
          </div>
        </div>
      )}
      <ApplyModal 
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        onApply={handleApply}
      />
    </div>
  );
};

export default JobDetail;
