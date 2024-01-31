import React from 'react';

const ApplyJobPage = () => {
  return (
    <div className="bg-white max-w-2xl mx-auto p-4 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Kinera - Community Manager</h1>
      <p className="mb-4">
        As a Community Manager at Kinera, you will be at the forefront of building, nurturing, and maintaining our dynamic community. Your role is crucial in creating a positive environment, promoting engagement, and ensuring members are well-informed and enthusiastic about our projects. We are looking for an individual who is passionate about community building and can effectively manage various community-oriented tasks.
      </p>
      <h2 className="text-2xl font-bold mb-2">Required skills:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Strong communication and interpersonal skills.</li>
        <li>Experience in community management or related field.</li>
        <li>Proficiency in social media platforms and online community tools.</li>
        <li>Ability to create engaging content for various mediums.</li>
        <li>Understanding of online community trends and user behavior.</li>
        <li>Knowledge in organizing online events and AMAs.</li>
        <li>Awareness of regulatory compliance related to online communities.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">What you will do:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Engage with the community and moderate discussions.</li>
        <li>Create, manage, and distribute content across different channels.</li>
        <li>Build and sustain a positive community culture.</li>
        <li>Organize and facilitate online events and AMAs.</li>
        <li>Develop and implement educational initiatives for the community.</li>
        <li>Maintain awareness of regulatory compliance in community activities.</li>
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