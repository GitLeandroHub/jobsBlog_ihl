import React from 'react';
import { Link } from 'gatsby';

const JobListing = ({ team, title, location }) => {
  return (
    <div className="px-4 py-8 lg:flex lg:justify-between lg:py-12">
      <div className="lg:w-1/3 flex items-center"> {/* Added flex and items-center */}
        <h3 className="mt-0">{team}</h3>
        <span role="img" aria-label="developer" className="ml-1">■</span> {/* Wrapped icon in a span */}
      </div>
      <div className="divide-y divide-gray-200 lg:w-2/3">
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center transition duration-150 ease-in-out px-2 pt-4 pb-2 md:p-2">
            <div>
              <h5 className="m-0 pb-2">{title}</h5>
              <p className="m-0">{location}</p>
            </div>
            <div className="flex justify-end">
              <Link to="/apply-job" className="text-sm text-parityPink flex items-center">
                View Job <span className="ml-2">&#8658;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;  