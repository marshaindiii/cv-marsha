import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section bg-gray-100 p-8" id='contact'>
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.instagram.com/nelachaa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:underline"
        >
          Instagram
        </a>

        <a
          href="https://github.com/marshaindi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://www.tiktok.com/@404.adn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 hover:underline"
        >
          TikTok
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
