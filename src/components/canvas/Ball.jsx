import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  Decal, Float, OrbitControls, Preload, useTexture 
} from '@react-three/drei'

import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/motion'


const BallCard = ({name, icon, index}) => {
  return (
      <div>
      <Tilt className='xs:w-[100px] w-full'>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-[104px] green-pink-gradient p-[1px] rounded-[50%] shadow-card'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-[#ffffff] w-[100px] h-[100px] rounded-[50%] py-5 px-5 min-h-[100px] flex justify-evenly items-center flex-col'
          >
            <img
              src={icon}
              alt='web-development'
              className='w-36 h-36 object-center'
            />
          </div>
        </motion.div>
      </Tilt>
      </div>
  )
}

export default BallCard