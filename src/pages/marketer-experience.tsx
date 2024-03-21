import React from 'react';

const ApplyJobPage = () => {
  return (
    <div className="bg-white max-w-2xl mx-auto p-4 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Marketer with Crypto Experience [April to January]</h1>
      <p className="mb-4">
        We are seeking a marketer with experience in cryptocurrency and community building, particularly for crowdfunding campaigns. The ideal candidate should have a strong background in developing and executing effective marketing strategies, with a focus on crowdfunding campaign strategy development, regulatory compliance, and risk management.
      </p>
      <h2 className="text-2xl font-bold mb-2">Required skills:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Proven experience in cryptocurrency marketing.</li>
        <li>Strong knowledge of crowdfunding campaign strategies and execution.</li>
        <li>Understanding of regulatory compliance and risk management in crypto markets.</li>
        <li>Ability to develop and execute comprehensive marketing strategies.</li>
        <li>Excellent communication and community building skills.</li>
        <li>Experience in digital marketing tools and platforms.</li>
        <li>Strong analytical and problem-solving skills.</li>
      </ul>
      <div className="pt-12 pb-4 md:flex md:place-content-center">
        <form action="https://formcarry.com/s/CHaqz6Qj_y7" method="POST" acceptCharset="UTF-8" encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input type="text" name="firstName" className="form-control w-full mb-4" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" name="lastName" className="form-control w-full mb-4" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" name="email" className="form-control w-full mb-4" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" className="form-control w-full mb-4" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location (City) *</label>
            <input type="text" name="location" className="form-control w-full mb-4" required />
          </div>
          <div className="form-group">
            <label htmlFor="resumeLink">Resume/CV Link *</label>
            <textarea name="resumeLink" className="form-control form-textarea w-full mb-4" placeholder="Paste the shareable link to your resume/CV here." required />
          </div>
          <div className="form-group">
            <label htmlFor="coverLetterLink">Cover Letter Link *</label>
            <textarea name="coverLetterLink" className="form-control form-textarea w-full mb-4" placeholder="Paste the shareable link to your cover letter here." required />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn Profile</label>
            <input type="text" name="linkedin" className="form-control w-full mb-4" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input type="text" name="website" className="form-control w-full mb-4" />
          </div>
          <input type="hidden" name="jobPosition" value="Marketer with Crypto Experience" />
          <button type="submit" className="btn btn-dark btn-lg btn-block mt-4 mb-4" style={{ backgroundColor: '#FF4081', color: '#ffffff', padding: '0.5rem 1rem' }}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobPage;