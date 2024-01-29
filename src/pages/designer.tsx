import React from 'react';

const ApplyJobPage = () => {
  return (
    <div className="bg-white max-w-2xl mx-auto p-4 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Kinera - Designer</h1>
      <p className="mb-4">
        Kinera is looking for a skilled Designer to join our team. The ideal candidate will design our websites and platform application, focusing on creating user-friendly, aesthetically pleasing, and functional digital interfaces. You will play a crucial role in shaping the visual and interactive aspects of our products, ensuring a seamless and engaging user experience.
      </p>
      <p className="mb-4">
        If you have a keen eye for design and are passionate about creating interfaces that resonate with users, we encourage you to apply. Visit our website at <a href="http://www.kinera.network" className="text-blue-500">www.kinera.network</a> to learn more about our projects.
      </p>
      <h2 className="text-2xl font-bold mb-2">Required skills:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Proven experience in UX/UI design.</li>
        <li>Strong portfolio of design projects.</li>
        <li>Familiarity with graphic design and relevant software (e.g., Adobe Creative Suite).</li>
        <li>Understanding of brand alignment in design.</li>
        <li>Experience working in collaboration with developers.</li>
        <li>Excellent communication and teamwork skills.</li>
        <li>Ability to create documentation and style guides for design projects.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">What you will do:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Design user-friendly and aesthetically pleasing interfaces for our platforms.</li>
        <li>Work closely with developers to bring concepts to life.</li>
        <li>Contribute to all stages of the design process.</li>
        <li>Ensure brand consistency throughout our digital assets.</li>
        <li>Create and maintain design documentation and style guides.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Nice to have:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Experience in web and mobile application design.</li>
        <li>Knowledge of HTML, CSS, and JavaScript.</li>
        <li>Experience with user research and usability testing.</li>
      </ul>
      <div className="pt-12 pb-4 md:flex md:place-content-center">
        <form action="https://formsubmit.co/kine.newsletter@gmail.com" method="POST" encType="multipart/form-data">
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