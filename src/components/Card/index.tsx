import React from 'react';

import Typography from '../Typography';

import { formatCurrency } from '../../utils/formatCurrency';

import { CardContainer, CardImage } from './styles';

const Card = ({
	title,
	icon,
	company,
	location,
	salaryStart,
	salaryEnd,
	posted,
}:{
	title: string,
	icon: string,
	company: string,
	location: string,
	salaryStart: number,
	salaryEnd: number,
	posted: number, 
}) => {
    return (
      <CardContainer>
        <CardImage>
          <img src={icon} alt='' width={60} height={60}/>
        </CardImage>
        <div>
          <Typography variant='title1'>
            {title}
          </Typography>
          <Typography>
            {company}
          </Typography>
          <Typography>
            {location}
          </Typography>
          <Typography>
            {formatCurrency(salaryStart)} - {formatCurrency(salaryEnd)}
          </Typography>
          <Typography>
            posted {posted} days ago
          </Typography>
        </div>
      </CardContainer>
    );
};

export default Card;