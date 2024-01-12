import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

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
        className='bg-[#102525] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
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
      <p className={styles.sectionSubText}
      >Introduction</p>
      <h2 className={styles.heroHeadText}
      >Overview 👋</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I am a Software Web Developer living in Medellín, 
      Colombia. Experience working on JS/TS, Node.js with frameworks like Express.js and Nest.js,
      HTML-CSS, React.js, Next.js, GraphQL, and recently I have used .Net. Advanced English skills (B2). 
      I have always been good at teamwork, I usually get 
      along with people and I've always liked helping. As 
      a rule I have a excellent attitude facing problems 
      either in a personal o group level, also learning 
      skills quickly, I love learning new things. I have 
      experiences working with Agile Methodologies, mainly 
      SCRUM with several tools like Jira, Trello and Taiga. 
      I prefer to always leave a good impression, and let 
      my work speak for me.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")