import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  //set to true by default for now because there aren't enough projects to warrant a show more button
  const [showAll, setShowAll] = useState(true);

  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16 -mb-2"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          Official partners
        </motion.h1>
        <ul className={`${showAll ? '' : 'max-h-[100rem]'} grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 pb-1 gap-4 overflow-hidden`}>
          {!showAll &&
            <div className="absolute flex justify-center bottom-[5rem] z-10 bg-gradient-to-t from-background pb-8 pt-32 max-w-4xl w-full">
              <Button label="Show More" onClick={() => setShowAll(true)} width="w-[10rem]" />
            </div>
          }
          <ProjectCard
            discordUrl="https://discord.gg/76hxYB5HtB"
            title="BAU"
            fullDescription={[
              "Head Jersey Designer"
            ]}
            cardImage="/bau logo.png"
            cardDescription="Head Jersey Designer"
            media={[]}
            myRole="Head Jersey Designer"
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            discordUrl="https://discord.gg/76hxYB5HtB"
            title="PBA"
            fullDescription={[
              "Head Jersey Designer"
            ]}
            cardImage="/pba logo.png"
            cardDescription="Head Jersey Designer"
            media={[]}
            myRole="Head Jersey Designer"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            discordUrl="https://discord.gg/76hxYB5HtB"
            title="LBU"
            fullDescription={[
              "Head Jersey Designer & Media Member"
            ]}
            cardImage="/lbu logo.png"
            cardDescription="Head Jersey Designer & Media Member"
            media={[]}
            myRole="Head Jersey Designer & Media Member"
            delay={0.3}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            discordUrl="https://discord.gg/4pHsXXaujt"
            title="DBA"
            fullDescription={[
              "Head of Media"
            ]}
            cardImage="/dbalogo.png"
            cardDescription="Head of Media"
            media={[]}
            myRole="Head of Media"
            delay={0.4}
            gradient="bg-gradient-to-tl"
          />
        </ul>
      </section>
    </>
  );
}
