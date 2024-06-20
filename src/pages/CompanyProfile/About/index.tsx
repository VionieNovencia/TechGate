import React from "react";
import Typography from "../../../components/Typography";
import NavLink from "../../../components/Link";
import styles from "./styles";

interface Company {
  name: string;
  icon: string;
  desc: string;
  overview: string[];
  website: string;
  industry: string;
  companySize: string;
  headquarters: string;
  founded: string;
  cover: string;
  location: string;
}

const About = ({company}:{company: Company}) => {
  return (
    <div className={styles.gap}>
      <div>
        <Typography variant="title2">
          Overview
        </Typography>
        {company.overview.map((item) => (
          <Typography width='840px' textAlign="justify">
            {item}
          </Typography>
        ))}
      </div>
      <div>
        <Typography variant="title3">
          Website
        </Typography>
        <NavLink to={company.website}>
          <Typography color="#007BFF">
            {company.website}
          </Typography>
        </NavLink>
      </div>
      <div>
        <Typography variant="title3">
          Company Size
        </Typography>
        <Typography color="#6C757D">
          {company.companySize}
        </Typography>
      </div>
      <div>
        <Typography variant="title3">
          Industry
        </Typography>
        <Typography color="#6C757D">
          {company.industry}
        </Typography>
      </div>
      <div>
        <Typography variant="title3">
          Headquarters
        </Typography>
        <Typography color="#6C757D">
          {company.headquarters}
        </Typography>
      </div>
      <div>
        <Typography variant="title3">
          Founded
        </Typography>
        <Typography color="#6C757D">
          {company.founded}
        </Typography>
      </div>
    </div>
  )
};

export default About;