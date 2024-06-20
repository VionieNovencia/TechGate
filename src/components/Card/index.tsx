import React from 'react';
import { cx } from '@linaria/core';

import Typography from '../Typography';
import NavLink from '../Link';

import close from '../../assets/close-icon.png';

import { formatCurrency } from '../../utils/formatCurrency';

import styles from './styles';
import BaseButton from '../BaseButton';


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
  return (
    <div 
      className={cx(
        selectedJob.length > 0 ? styles.cardWithDetailContainer : styles.cardContainer,
        id === selectedJob ? styles.darkBorder : ''
      )} 
      onClick={onClick}
    >
      <div className={styles.flexRow}>
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
            <BaseButton onClick={() => {}} className={styles.applyButton}>
              <Typography color='white'>
                Apply now
              </Typography>
            </BaseButton>
          )}
          
        </div>
      </div>
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