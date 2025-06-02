import React from 'react';

const About = () => {
  return (
    <div className='mt-36 ml-64 border border-gray-600 rounded-lg h-auto w-[950px] p-8 text-left bg-white shadow-lg'>
      <h1 className='text-3xl font-bold mb-4 text-center text-blue-700'>About Civic Eye</h1>

      <p className='mb-4 text-gray-800'>
        <strong>Civic Eye</strong> is a citizen-driven complaint registration portal designed to empower the public to report and track civic issues with ease and transparency. Our goal is to create cleaner, safer, and more responsible communities by bridging the gap between the public and the authorities.
      </p>

      <h2 className='text-2xl font-semibold mb-2 text-gray-700'>What We Do</h2>
      <ul className='list-disc list-inside mb-4 text-gray-800'>
        <li><strong>Public Nuisance</strong> – Loud noises, vandalism, or disturbances affecting neighborhood peace.</li>
        <li><strong>Traffic Violations</strong> – Illegal parking, signal jumping, rash driving, and other traffic offenses.</li>
        <li><strong>Waste Dumping</strong> – Improper garbage disposal, overflowing bins, or littering in public areas.</li>
        <li><strong>And More</strong> – Any other civic concern that affects the community's well-being.</li>
      </ul>

      <h2 className='text-2xl font-semibold mb-2 text-gray-700'>Why Civic Eye?</h2>
      <ul className='list-disc list-inside mb-4 text-gray-800'>
        <li><strong>Easy to Use</strong> – User-friendly interface for submitting complaints with photos, locations, and descriptions.</li>
        <li><strong>Transparent</strong> – Track the progress of your complaint in real-time.</li>
        <li><strong>Effective</strong> – Connects directly with responsible municipal or enforcement bodies for faster resolution.</li>
      </ul>

      <h2 className='text-2xl font-semibold mb-2 text-gray-700'>Our Mission</h2>
      <p className='text-gray-800'>
        To foster active citizen participation in civic governance by offering a transparent, efficient, and accessible platform for reporting and resolving community issues.
      </p>
    </div>
  );
}

export default About;
