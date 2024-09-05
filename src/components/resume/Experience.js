import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022-2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="CESA, NIT - (2023 - Present)"
            result="Srinaga"
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
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Student Trainer"
            subTitle="Doubt solve"
            result="KAshmir"
            des="Something that gives you good feeling"
          />
          <ResumeCard
            title="Tutor"
            subTitle="chegg"
            result="India"
            des="Sharing knowledge empowers others and fosters growth for everyone involved."
          />
          <ResumeCard
            title="Helper"
            subTitle="Mathematics"
            result="Shopain"
            des="Helping students solve doubts clears confusion, builds confidence, and deepens their understanding of concepts."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
