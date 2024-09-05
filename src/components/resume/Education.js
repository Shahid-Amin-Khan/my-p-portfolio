import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Civil Engineering"
            subTitle="National Institute of Technology Srinagar (2021 - 2025)"
            result="7.7/10"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Science "
            subTitle="Govt. Boys School (2018 - 2020)"
            result="76.2/100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="School Education"
            subTitle="Mohammadiya High School (2018)"
            result="81.2/100"
            des="School eduction is the best experience of life."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022-present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="CESA, NIT - (2023 - Present)"
            result="Srinagar"
            des="Web development is where creativity meets logic. It's about transforming ideas into interactive, functional websites that people use daily."
          />
          <ResumeCard
            title="Collage Project"
            subTitle="SFD and BMD using Python - (2022)"
            result="NIT Srinagar"
            des="Integrating coding in civil engineering streamlines design, enhances data analysis, and automates tasks, leading to more efficient, accurate, and innovative solutions."
          />
          <ResumeCard
            title="Tutor"
            subTitle="chegg"
            result="india"
            des="Helping students solve doubts clears confusion, builds confidence, and deepens their understanding of concepts."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education