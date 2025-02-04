import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="contact-text">
        <h2>Contact Information</h2>
      </div>
      <ul>
        <li>Email: jmobrien127@gmail.com</li>
        <li>Phone: +1 (209) 534-5372</li>
        <li>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/joseph-obrien-387a721a3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joseph O&apos;Brien
          </a>
        </li>
        <li>
          GitHub:{' '}
          <a
            href="https://github.com/jobrien127"
            target="_blank"
            rel="noopener noreferrer"
          >
            jobrien127
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
