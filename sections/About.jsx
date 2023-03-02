'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components'; 

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02" />
    <motion.div
      variants={staggerContainer} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: .25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| Explore Mars"
        textStyles="text-center" 
      />

      <motion.p
        variants={fadeIn('up', 'tween', .2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
         <span className="font-extrabold text-white">Marsverse </span>
         is a new home in the future, where you can enjoy living on mars
          by feeling like it's really real, you can feel what you 
         feel in this marsverse world, because this is really the 
         <span className="font-extrabold text-white"> madness of the marsverse </span> 
         of today, using only 
         <span className="font-extrabold text-white"> VR </span>
         devices you can easily explore the marsverse
         world you want, turn your dreams into reality. Let's 
         <span className="font-extrabold text-white"> explore </span>
         the 
         <span className="font-extrabold text-white"> madness of the marsverse </span> 
         by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', .3, 1)}
        src="/arrow-down.svg"
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
