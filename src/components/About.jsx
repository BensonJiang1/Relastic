import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-30 h-30 object-contain mb-4'
        />

        <h3 className='text-white text-[16px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* Change the color of "Our Mission" to green */}
        <h2 className={`${styles.sectionHeadText} text-green-800`}>
          Our Mission
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-bold text-black text-[17px] max-w-3xl leading-[30px]'
      >
        RELASTIC is an online platform for students to learn and engage in the use of sustainable resources around campus. We aim to motivate students to be mindful of the environment in a fast paced environment where replacing is more convenient than reusing.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-bold text-black text-[17px] max-w-3xl leading-[30px]'
      >
        Through RELASTIC, we aim for:
        <ul className="list-disc pl-6 mt-2">
          <li>Structured reduction in usage of plastic products</li>
          <li>Promote Eco-friendly products and incentivize Eco-friendly behavior</li>
        </ul>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
