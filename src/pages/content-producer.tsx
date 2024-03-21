import React from 'react';

const ApplyJobPage = () => {
  return (
    <div className="bg-white max-w-2xl mx-auto p-4 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Content Producer. Native English [part-time]</h1>
      <p className="mb-4">
        We are seeking a talented and creative Content Producer with native English skills to join our team. This part-time position involves scriptwriting, content creation, community engagement, social media management, and content scheduling and publishing. The ideal candidate will have a flair for producing engaging content that resonates with our audience and helps build our brand presence across various digital platforms.
      </p>
      <h2 className="text-2xl font-bold mb-2">Required skills:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Exceptional writing and editing skills in English.</li>
        <li>Proven experience in content production and scriptwriting.</li>
        <li>Strong understanding of social media platforms and community engagement strategies.</li>
        <li>Experience in content scheduling and publishing.</li>
        <li>Ability to work independently and manage multiple projects simultaneously.</li>
        <li>Excellent communication and teamwork skills.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">What you will do:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Create and edit engaging written content for various platforms.</li>
        <li>Develop scripts for video and audio content.</li>
        <li>Manage social media accounts and engage with the community.</li>
        <li>Schedule and publish content across multiple channels.</li>
        <li>Collaborate with team members to align content with overall brand strategy.</li>
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
          <input type="hidden" name="jobPosition" value="Content Producer. Native English" />
          <button type="submit" className="btn btn-dark btn-lg btn-block mt-4 mb-4" style={{ backgroundColor: '#FF4081', color: '#ffffff', padding: '0.5rem 1rem' }}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobPage;