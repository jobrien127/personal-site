import React from 'react';
import { useScrollToTop } from '../utils/hooks';

const About: React.FC = () => {
  useScrollToTop();

  const background = `My name is Joseph McGettigan O'Brien, but I go by Mac, a nickname 
  derived from my middle name. I was born and raised in Modesto, California, the hometown 
  of George Lucas and American Graffiti. When I first watched Star Wars on VHS as a kid, I 
  was shocked and proud to learn that something so incredible came from a fellow Modestan. 
  Growing up in Modesto was a unique experience—surrounded by some of the most productive 
  farmland in the world while being sandwiched between the Bay Area and the Sierra Nevada 
  mountains. Its proximity to Silicon Valley fueled my curiosity about the computing 
  industry, which seemed to mature and evolve alongside me.`;

  const education = `In the fall of 2015, I moved to Golden, Colorado, to attend the
  Colorado School of Mines. While I had always been interested in computing, I wasn’t set
  on pursuing a programming career until my second semester of freshman year, when I took 
  a C++ programming course. That class sparked my desire to major in Computer Science. As
  I explored various software-related career paths, I quickly found myself drawn to mobile
  app development, particularly for iOS.`;

  const experience = `My career officially began in May 2018, when I started an iOS 
  development internship at VML Apps (formerly Wunderman Thompson Apps) in Denver, CO. I
  continued working there while finishing my Computer Science degree and transitioned to
  full-time employment in July 2019. I was set to graduate in May 2020, but when COVID-19 
  disrupted everything, I decided to wait—having worked so hard, I wanted the privilege of 
  walking across the stage. I continued working full-time at VML Apps and, in May 2023, 
  finally received my diploma in person. I remained with VML Apps until August 2024.`;

  const outro = `I currently live in Dillon, Colorado, and outside of programming, I 
  enjoy traveling, skiing, disc golf, regular golf, cooking, and exploring nature. 
  I'm always seeking new technologies to learn and new adventures to embark on.
  At this time, I'm actively looking for a new role and am open to both relocation and remote 
  opportunities.`;

  return (
    <section id="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          {background}
          <br />
          <br />
          {education}
          <br />
          <br />
          {experience}
          <br />
          <br />
          {outro}
          <br />
          <br />
          Cheers!
        </p>
      </div>
    </section>
  );
};

export default About;
