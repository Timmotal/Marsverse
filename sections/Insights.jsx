'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText} from '../components';
import { insights } from '../constants';



const Insights = () => (
  <section className={` ${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: .25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="| Projects"
        textStyles="text-center" 
      />
      <TitleText
        title="Essential Mars hacks"
        textStyles="text-center" 
      />
      <div className='mt-[50px] flex flex-col gap-[30px]'>
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            // again i ask, why do we spread insight?
            index={index + 1} // i think it is because we are adding to 'index', seems that's just rubbish though
          />
        ))}
      </div>
  </motion.div>
  </section>
);

export default Insights;
