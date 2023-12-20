import React from 'react';
import JobListing from './JobListingComponent';

const JobBoard = () => {
  return (
    <div>
      <h2>TI Team - Web3 Engineering:</h2>
      <JobListing
        title="Software Engineer - Web3 environment"
        location="Remote"
        description="This position can be remote or based near one of our offices in Berlin, Lisbon, or London. It's up to you to decide where you work best."
      />
    </div>
  );
};

export default JobBoard;