import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const background = `My name is Joseph McGettigan O'Brien. I get "Mac" from
          my middle name. I was born and raised in Modesto, California, the home
          of George Lucas and American Graffiti. This is something I have been
          proud of since the first time I watched Star Wars on VHS as a kid. Modesto was
          an interesting place to grow up, being surrounded by some of the most
          productive farmland in the world and sandwhiched between the Bay Area
          and the Sierra Nevada mountains. Modesto's close proximity to Silicon 
          Valley drove me to become curious about the computing industry which 
          seemed to mature and grow as I did.`;

  const education = `I Moved to Golden, Colorado in the Fall of 2015 to attend the Colorado
          School of Mines. Though, I was always interested learning more about 
          computing, I was not sold on pursuing a programming career until the
          second semester of my freshman year while taking a C++ programming
          course. However, I found myself drawn to the mobile
          development space and began to learn about developing iOS apps.`;

  const experience = `My career officially began in May of 2018 when I began an intership as
          an iOS developer at VML Apps (formerly Wunderman Thompson Apps) in
          Denver, CO. I continued to work for VML Apps while I worked to finish
          up my degree in Compter Science and began full-time work in July of
          2019. I was all set to graduate in May of 2020 and wrap up my final
          classes over the Summer of 2020, but COVID-19 changed things. I worked
          to hard in school to not get the privelege of actually walking accross
          that stage. So, I decided to wait until things calmed down. I
          continued to work full-time for VML and ended up getting my diploma in
          person in May of 2023. I worked for VML Apps until August of 2024.`;

  const outro = `I currently live in Summit County, Colorado. I am always looking for
          new technologies to explore and new adventures to embark on. At this
          time, I am looking for a new role in the software development
          industry. I am open to relocation and remote work.`;

  return (
    <section id="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Greetings!
          <br />
          <br />
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
