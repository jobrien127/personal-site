import React from 'react';
import SEO from '../components/common/SEO';
import { useScrollToTop } from '../utils/hooks';

const Contact: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Joseph O'Brien. Connect via email, phone, LinkedIn, or GitHub for professional inquiries and collaboration opportunities."
        keywords={[
          'contact',
          'email',
          'phone',
          'LinkedIn',
          'GitHub',
          'software engineer',
          'app developer',
          'hire',
        ]}
      />
      <section id="contact">
        <div className="contact-text">
          <h2>Contact Information</h2>
        </div>
        <ul>
          <li>
            Email:{' '}
            <a href="mailto:jmobrien127@gmail.com">jmobrien127@gmail.com</a>
          </li>
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
    </>
  );
};

export default Contact;
