import React, { useMemo } from "react";
import Card from "../../../components/Card";
import { JobList } from "../../../data/Job";

import styles from "./styles";
const Jobs = ({
  company
}: {
  company: string
}) => {
  const job = useMemo(() => Object.values(JobList).filter((job) => job.company.toLowerCase() === company), [company]);
  console.log(job)
  return (
    <div className={styles.container}>
      {job.map((j) => (
        <Card
          id={j.id}
          title={j.title}
          salaryEnd={j.endWage}
          salaryStart={j.startWage}
          link={j.link}
          location={j.location}
          posted={j.posted}
          onClick={() => {}}
          closeButton={false}
        />
      ))}
    </div>
  )
};

export default Jobs;