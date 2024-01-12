import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { contacMe } from "../constants";

const Contact = () => {
  console.log(contacMe)

  const [loading, setLoading] = useState(false);

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        className="bg-[#102525] rounded-[20px] pt-10 pb-20 px-10 min-h-[80px]"
        >
          
        <p className='sm:text-[18px] text-[#4fe9e9] uppercase tracking-wider no-underline hover:underline" href={e.content}>{e.content}</a> : <h5 className="sm:text-[18px] text-secondary uppercase tracking-wider'>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact. 🤝</h3>

        <div className="mt-5 flex flex-col justify-center gap-20">
          {
            contacMe.map( e => (
              <div className="text-center justify-center">
                <img className="justify-self-center mx-auto w-16" src={e.red} alt={e.name}/>
                {
                  e.link ? <a className="sm:text-[18px] text-secondary uppercase tracking-wider no-underline hover:underline" href={e.content}>{e.content}</a> : <h5 className="sm:text-[18px] text-secondary uppercase tracking-wider">{e.content}</h5>
                }
                
              </div>
            ))
          }
        </div>
        </div>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");