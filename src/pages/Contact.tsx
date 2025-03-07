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
        <h2>Contact Information</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:dev@jm-ob.com">dev@jm-ob.com</a>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            <span>+1 (209) 534-5372</span>
          </div>
          <div className="contact-card">
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/j-m-obrien"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joseph O&apos;Brien
            </a>
          </div>
          <div className="contact-card">
            <h3>GitHub</h3>
            <a
              href="https://github.com/jobrien127"
              target="_blank"
              rel="noopener noreferrer"
            >
              jobrien127
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
