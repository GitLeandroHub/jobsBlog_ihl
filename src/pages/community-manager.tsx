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
        <form action="https://formcarry.com/s/d6F5r-PyHwG" method="POST" acceptCharset="UTF-8" encType="multipart/form-data">
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
          <input type="hidden" name="jobPosition" value="Kinera - Community Manager" />
          <button type="submit" className="btn btn-dark btn-lg btn-block mt-4 mb-4" style={{ backgroundColor: '#FF4081', color: '#ffffff', padding: '0.5rem 1rem' }}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobPage;