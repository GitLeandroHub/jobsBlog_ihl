import React from 'react';

const ApplyJobPage = () => {
  return (
    <div className="bg-white max-w-2xl mx-auto p-4 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Data Analyst - Cryptocurrency Domain</h1>
      <p className="mb-4">
        We are seeking a skilled Data Analyst with a strong background in mathematics and a keen understanding of the cryptocurrency market. Your role will involve analyzing complex data sets to drive decision-making, optimize strategies, and contribute significantly to the project's success in the dynamic and evolving world of blockchain technology.
      </p>
      <p className="mb-4">
        As a key member of our team, you will be responsible for data collection and management, performing statistical and market analysis, identifying trends, developing algorithms, and managing risks. Your insights will be vital in predictive modeling, forecasting, and shaping our strategic direction.
      </p>
      <h2 className="text-2xl font-bold mb-2">Key Responsibilities:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Data collection and management.</li>
        <li>Statistical analysis and reporting.</li>
        <li>Market analysis and trend identification.</li>
        <li>Algorithm development and optimization.</li>
        <li>Risk assessment and management.</li>
        <li>Blockchain data analysis.</li>
        <li>Predictive modeling and forecasting.</li>
        <li>Contributing to strategy development and decision-making.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Required skills:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Strong analytical skills and mathematical acumen.</li>
        <li>Experience in data analysis, preferably in the cryptocurrency domain.</li>
        <li>Proficiency in statistical software and data visualization tools.</li>
        <li>Knowledge of blockchain technology and data structures.</li>
        <li>Excellent problem-solving abilities.</li>
        <li>Ability to interpret complex data and present findings clearly.</li>
        <li>Strong communication and teamwork skills.</li>
        <li>Detail-oriented and organized approach to work.</li>
      </ul>
      <div className="pt-12 pb-4 md:flex md:place-content-center">
        <form action="https://formsubmit.co/miguel@invisiblehandlab.com" method="POST" encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input type="text" name="firstName" className="hs_email w-full mb-4" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" name="lastName" className="hs_email w-full mb-4" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" name="email" className="hs_email w-full mb-4" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" className="hs_email w-full mb-4" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location (City) *</label>
            <input type="text" name="location" className="hs_email w-full mb-4" required />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Resume/CV</label>
            <input type="file" name="resume" accept=".pdf, .doc, .docx, .txt, .rtf" className="hs_email w-full mb-4" />
          </div>
          <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter</label>
            <input type="file" name="coverLetter" accept=".pdf, .doc, .docx, .txt, .rtf" className="hs_email w-full mb-4" />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn Profile</label>
            <input type="text" name="linkedin" className="hs_email w-full mb-4" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input type="text" name="website" className="hs_email w-full mb-4" />
          </div>
          <button type="submit" className="btn-dark btn-lg btn-block mt-4 mb-4" style={{ backgroundColor: '#FF4081', color: '#ffffff', padding: '0.5rem 1rem' }}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobPage;