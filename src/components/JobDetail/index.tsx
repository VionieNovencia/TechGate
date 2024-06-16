import React, { useMemo } from "react";

import companyIcon from '../../assets/company-icon.png';
import locationIcon from '../../assets/location.png';
import jobTypeIcon from '../../assets/job.png';
import dollarIcon from '../../assets/dollar.png';
import closeIcon from '../../assets/close-icon.png';

import Typography from "../Typography";

import { Jobs } from "../../data/Job";

import styles from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import BaseButton from "../BaseButton";

interface JobDetailProps {
  jobId: string;
  clearSelectedJob: () => void;
}

const JobDetail: React.FC<JobDetailProps> = ({ jobId, clearSelectedJob }) => {
  const selectedJob = useMemo(() => {
    return Jobs[jobId];
  }, [jobId]);

  if (!selectedJob) {
    return <Typography>No job found</Typography>;
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
        </div>
      )}
    </div>
  );
};

export default JobDetail;
