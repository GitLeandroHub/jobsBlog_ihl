import React from 'react';

const ApplyJobPage = () => {
  return (
    <div className="bg-white max-w-2xl mx-auto p-4 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Kinera - Junior Developer</h1>
      <p className="mb-4">
        Kinera is the home for the best audiovisual media content in the Web3 environment. We are building a highly ambitious team of blockchain, application, and video software engineers to implement a resilient, tokenised, curation ecosystem that unites a diverse community of viewers and nonconformist media creators. This time we are looking for a junior passionate developer in the best case graduated as a software engineer with an interest or experience in substrate and knowledge of the Polkadot environment.
      </p>
      <p className="mb-4">
        If you want to work on a challenging project focusing on new media narratives that mirror the complexity and creativity of the world we live in, then this is your role. Take a look at the project at <a href="http://www.kinera.network" className="text-blue-500">www.kinera.network</a>
      </p>
      <h2 className="text-2xl font-bold mb-2">Required skills:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Experience with C++, Rust, Go, or similar languages.</li>
        <li>At least 1 year of professional experience with blockchain technology.</li>
        <li>Experience working remotely.</li>
        <li>Strong English skills.</li>
        <li>Comfortable with personal organization and communication.</li>
        <li>Ability to quickly learn and adapt under pressure.</li>
        <li>Able to read and understand documentation and source code.</li>
        <li>Knowledgeable of Git and CI/CD practices.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">What you will do:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Organize yourself alongside the team.</li>
        <li>Build, operate and maintain our backend codebase.</li>
        <li>Document your work.</li>
        <li>Team up with other members to implement solutions.</li>
        <li>Contribute to the project via your personal input.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Nice to have:</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Experience with DotSama technology, Substrate, or FRAME.</li>
        <li>Experience contributing to Open Source/ Blockchain projects.</li>
        <li>Prior attendance at blockchain events.</li>
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
            <label>Locate me</label>
            <input type="checkbox" name="locateMe" className="hs_email" />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Resume/CV *</label>
            <input type="file" name="resume" accept=".pdf, .doc, .docx, .txt, .rtf" className="hs_email w-full mb-4" required />
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