import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          {/* Intro */}
          Greetings!
          <br />
          {/* Background */}
          My name is Joseph McGettigan O&apos;Brien. I get &quot;Mac&quot; from
          my middle name. I was born and raised in Modesto, California, the home
          of George Lucas and American Graffiti. This is something I have been
          proud of since the first time my brother and I watched Star Wars on
          VHS. Modesto is an interesting place to grow up, surrounded by some of
          the most productive farmland in the world and being sandwhiched
          between the Bay Area and the Sierra Nevada mountains.
          <br />
          <br />
          {/* Work background */}
          I Moved to Colorado in the Fall of 2015 to attend the Colorado School
          of Mines and lived in Golden, CO for 5 years. Began my career at VML
          Apps (formerly Wunderman Thompson Apps) in Denver, CO in May of 2018.
          I continued to work for VML Apps while I was in school and began
          full-time work in July of 2019. I worked for VML Apps until August of
          2024.
          <br />
          <br />
          {/* Current Hobbies and aspirations */}
          I currently live in Summit County, Colorado. I am always looking for
          new technologies to explore and new adventures to embark on. At this
          time, I am looking for a new role in the software development
          industry. I am open to relocation and remote work.
          <br />
          <br />
          {/* Modesto - Golf, Ag, Curious about how things work Colorado - Golden,
          Denver, Summit County Hobbies - Golf, Disc golf, Drums, Guitar,
          Snowboarding, Skiing, Hiking, Camping, Traveling, Photography,
          Cooking, Gardening, Reading, Movies, Music Tech: Mines Possible Mobile
          eventually became Wunderman Thompson Apps and then more recently VML
          Apps. */}
        </p>
      </div>
    </section>
  );
};

export default About;
