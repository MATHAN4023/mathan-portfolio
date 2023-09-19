import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { linkedin } from "../assets";
import { SectionWrapper } from "../hoc";
import { social } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const SocialCard = ({
  index,
  image,
  logo,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[430px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={logo}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const SocialM = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Contact</p>
        <h2 className={`${styles.sectionHeadText}`}>Social Media</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {social.map((social, index) => (
          <SocialCard key={`social-${index}`} index={index} {...social} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SocialM, "");
