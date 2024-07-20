import React from "react";
import { cx } from "@linaria/core";

import Typography from "../../../components/Typography";

import styles from './styles'

const Card = ({
  title,
  logo,
  company,
  location,
  jobType,
  desc,
  date,
  isLastItem = false,
  isSertification = false,
} : {
  title: string,
  logo: string,
  desc?: string,
  date: string,
  company?: string,
  location?: string,
  jobType?: string,
  isLastItem?: boolean;
  isSertification?: boolean;
}) => {
  return (
    <div className={cx(styles.container, isLastItem && styles.lastItem)}>
      <div className={styles.logo}>
        {logo.length > 0 && (
          <img src={logo} alt="" width={50} height={50} />
        )}
        <div className={styles.logoPlaceholder}/>
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <Typography variant="title2">
            {title}
          </Typography>
          <Typography>
            {date}
          </Typography>
        </div>
        {company && (
          <Typography>
            {`${company} ${jobType && '| ' + jobType}`}
          </Typography>
        )}
        {location && (
          <Typography>{location}</Typography>
        )}
        {desc && (
          <Typography>{desc}</Typography>
        )}
        {isSertification && (
          <Typography className={styles.underline}>
            See Details
          </Typography>
        )}
      </div>
      
    </div>
  )
};

export default Card;