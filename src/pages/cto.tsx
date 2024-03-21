import React from 'react';

const ApplyJobPage = () => {
  return (
    <div className="bg-white max-w-2xl mx-auto p-4 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Kinera - Chief Technology Officer (CTO)</h1>
      <p className="mb-4">
        As the CTO at Kinera, you will be responsible for developing and ensuring our products are innovative, secure, and aligned with our business goals. We are seeking a highly skilled Substrate developer to lead our technology team in achieving excellence. Your role will include overseeing technology research and development, product development, and ensuring expertise in blockchain, cryptography, security, and risk management. 
      </p>
      <p className="mb-4">
        This is a leadership role requiring strong skills in team management, infrastructure management, regulatory compliance, and partnership collaboration. You will also be responsible for maintaining an excellent user experience and interface, alongside efficient budget management. Learn more about our vision at <a href="http://www.kinera.network" className="text-blue-500">www.kinera.network</a>.
      </p>
      <h2 className="text-2xl font-bold mb-2">Required skills and qualifications:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Proven experience as a CTO or similar leadership role in technology.</li>
        <li>Expertise in Substrate development and blockchain technologies.</li>
        <li>Strong understanding of cryptography and security protocols.</li>
        <li>Experience with infrastructure management and cloud technologies.</li>
        <li>Knowledge of regulatory compliance and standards in the tech industry.</li>
        <li>Excellent leadership and team management skills.</li>
        <li>Strong budget management and financial acumen.</li>
        <li>Ability to drive innovation and product development.</li>
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
          <input type="hidden" name="jobPosition" value="Kinera - Chief Technology Officer" />
          <button type="submit" className="btn btn-dark btn-lg btn-block mt-4 mb-4" style={{ backgroundColor: '#FF4081', color: '#ffffff', padding: '0.5rem 1rem' }}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobPage;