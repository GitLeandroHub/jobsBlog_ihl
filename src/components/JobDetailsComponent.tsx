import React from 'react';
import { Link } from 'gatsby';

const JobDetails = ({ title, location, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{description}</p>
      {/* Other job details */}
      <Link to="/apply-job">Apply for this Job</Link>
    </div>
  );
};

export default JobDetails;