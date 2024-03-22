import React from 'react';
import "./About.scss";

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/portfolio1.jpg";
import resumePdf from "../../../assets/Namburi_Dhanunjay_resume.pdf"; // Import your resume PDF file

const About = () => {
  return (
    <div className="container" id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            "I'm a skilled web developer adept at crafting secure and efficient software solutions. Proficient in both front-end and back-end development, with expertise in CentOS Linux and AWS cloud services. Strong communication and collaboration skills drive my enthusiasm for taking on new challenges and contributing to innovative projects.
          </p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href={resumePdf} // Set the href attribute to your resume PDF file
            download="Namburi_Dhanunjay_resume.pdf" // Optionally, set the download attribute to specify the filename when downloading
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
