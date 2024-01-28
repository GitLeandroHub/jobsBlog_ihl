import React from 'react';
import JobListing from './JobListingComponent';

const JobBoard = () => {
  return (
    <div>
      <h2>Open Jobs</h2>
      <JobListing
        title="Software Engineer - Web3 environment"
        location="Remote"
        description="This position can be remote or based near one of our offices in Berlin, Lisbon, or London. It's up to you to decide where you work best."
        jobPagePath="/apply-job"
      />
      <JobListing
        title="Data analyst/ Mathematician"
        location="Remote"
        description="A Data Analyst or Mathematician's responsibilities combine analytical skills, mathematical expertise, and knowledge of the cryptocurrency domain. He is crucial in analysing data to drive decisions, optimise strategies, and contribute to the project's success. Key tasks include data collection and management, statistical analysis, market analysis, and more."
        jobPagePath="/data-analyst"
      />
      <JobListing
        title="CTO"
        location="Remote"
        description="The Chief Technology Officer develops and ensures its products are innovative, secure, and aligned with business goals. A highly skilled Substrate developer. Key tasks include leadership and team management, technology research, product development oversight, and more."
        jobPagePath="/cto"
      />
      <JobListing
        title="Designer"
        location="Remote"
        description="Design the websites and the platform application while creating user-friendly, aesthetically pleasing, and functional digital interfaces. Key tasks include UX/UI design, graphic design, brand alignment, and more."
        jobPagePath="/designer"
      />
      <JobListing
        title="Community Manager"
        location="Remote"
        description="The Community Manager builds, nurtures, and maintains our community. Their tasks aim to foster a positive environment, promote engagement, and ensure members are well-informed and enthusiastic about the project. Key tasks include community engagement and moderation, content creation, and more."
        jobPagePath="/community-manager"
      />
      <JobListing
        title="Marketer with Crypto Experience"
        location="Remote"
        description="A marketer with experience in cryptocurrency and community building for crowdfunding campaigns. Key tasks include crowdfunding campaign strategy development, regulatory compliance, and risk management."
        jobPagePath="/marketer-experience"
      />
      <JobListing
        title="Content Producer - Native English [part-time]"
        location="Remote"
        description="Responsible for scriptwriting and content creation, community engagement, and social media management. Key tasks include content scheduling and publishing."
        jobPagePath="/content-producer"
      />
    </div>
  );
};

export default JobBoard;