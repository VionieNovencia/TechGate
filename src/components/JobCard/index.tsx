import React, { useMemo, useState } from 'react';
import { cx } from '@linaria/core';

import Typography from '../Typography';
import NavLink from '../Link';

import close from '../../assets/close-icon.png';

import { formatCurrency } from '../../utils/formatCurrency';

import styles from './styles';
import BaseButton from '../BaseButton';
import ApplyModal from '../JobDetail/ApplyModal';
import { useAuth } from '../../context/AuthContext';


const Card = ({
  id,
	title,
	icon,
	company,
	location,
	salaryStart,
	salaryEnd,
	posted,
  onClick,
  selectedJob='',
  link,
  closeButton=true,
  applyButton=false
}:{
  id: string
	title: string,
	icon?: string,
	company?: string,
	location: string,
	salaryStart: number,
	salaryEnd: number,
	posted: number, 
  onClick: () => void,
  selectedJob?: string,
  link: string,
  closeButton?: boolean,
  applyButton?: boolean,
}) => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const { addAppliedJob, appliedJob } = useAuth();
  const handleApply = () => {
    addAppliedJob({jobId : id});
  }

  const isApplied = useMemo(() => {
    return (appliedJob.includes(id))
  }, [appliedJob, id]);


  return (
    <div 
      className={cx(
        selectedJob.length > 0 ? styles.cardWithDetailContainer : styles.cardContainer,
        id === selectedJob ? styles.darkBorder : ''
      )} 
    >
      <div className={styles.flexRow} onClick={onClick}>
        {icon && (
          <img src={icon} alt='' width={60} height={60} className={styles.cardImage}/>
        )}
        <div>
          <Typography variant='title2'>
            {title}
          </Typography>
          <NavLink to={link}>
            <Typography>
              {company}
            </Typography>
          </NavLink>
          <Typography>
            {location}
          </Typography>
          <Typography>
            {formatCurrency(salaryStart)} - {formatCurrency(salaryEnd)}
          </Typography>
          <Typography>
            posted {posted} days ago
          </Typography>
          {applyButton && (
            <BaseButton
              onClick={() => setIsApplyModalOpen(true)}
              className={isApplied ? styles.appliedButton : styles.applyButton}
              disabled={isApplied}
            >
              <Typography color={isApplied ? '#FF7900' : 'white'}>
                {isApplied ? 'Applied' : 'Apply now'}
              </Typography>
            </BaseButton>
          )}
          
        </div>
      </div>
      <ApplyModal 
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        onApply={handleApply}
      />
      {closeButton && (
        <BaseButton 
          onClick={() => {}}
          className={styles.closeIcon}
        >
          <img src={close} alt='' width={24} height={24} />
        </BaseButton>
      )}
      
    </div>
  );
};

export default Card;