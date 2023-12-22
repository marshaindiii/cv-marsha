import React from 'react';

const EducationPage = () => {
  return (
    <div className="education-page bg-gray-200 p-8">
      <h1 className="text-4xl font-bold mb-4">Education</h1>

      <section className="mb-8" id='education'>
        <h3 className="text-2xl font-bold mb-2">SMP Negeri 7 Denpasar</h3>
        <p>
        I Studied junior high school at SMP Negeri 7 Denpasar. While here, I studied various subjects
          and develop my abilities. Below is some additional information about educational experiences
          I'm at SMP Negeri 7 Denpasar.
        </p>
        <ul className="list-disc ml-8">
          <li>Participate in school organizations (OSIS).</li>
          <li>Take part in events organized by PMR.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-2">SMK Negeri 1 Denpasar</h3>
        <p>
        After completing my education at junior high school, I continued to SMK Negeri 1 Denpasar. Here, I choose
          major or skills program that suits my interests and talents.
        </p>
        <ul className="list-disc ml-8">
          <li>Majoring in software engineering.</li>
          <li>Create a personal website using HTML and CSS.</li>
          <li>Take part in creating a business website with the group.</li>
        </ul>
      </section>
    </div>
  );
};

export default EducationPage;
