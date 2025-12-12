import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section id='experience' className="max-w-4xl w-full flex flex-col mx-auto">
                <motion.h1
                    className="text-center font-bold text-5xl mt-16 -mb-2"
                    initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                    whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    Experience
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden`}>
                    <ExperienceCard
                        title="Da Hood Wealth"
                        discordUrl="https://discord.gg/udyMyrXZep"
                        vouchesUrl="https://myvouch.es/aidan"
                        fullDescription={[
                            "Accumulating over $1500+ USD in revenue and over 900+ vouches, this was my first big project. While running DHW, I learned about the ins and outs of not just developing, but running a business efficiently; having to pay a multitude of people repeatedly for contributing, along with developing the Discord bot that kept the server afloat."
                        ]}
                        cardImage="/dhw.png"
                        cardDescription="Accumulating over $1500+ USD in revenue and over 900+ vouches, this was my first big project. While running DHW, I learned about the ins and outs of not just developing, but running a business efficiently; having to pay a multitude of people repeatedly for contributing, along with developing the Discord bot that kept the server afloat."
                        media={[]}
                        myRole="Founder/Head Developer"
                        timeline="September 2024 - November 2024"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                    <ExperienceCard
                        groupUrl="https://www.roblox.com/communities/35756891/elusive#!/about"
                        title="Elusive Sporting Goods"
                        fullDescription={[
                            "While working on Elusive I've collaborated with a multitude of people and leagues, delivering quality and seamless designs whenever called upon. Currently working towards streamlining the business, we hope to bring more professionalism and efficiency than our competitors by a longshot."
                        ]}
                        cardImage="/elusivegfx.png"
                        cardDescription="While working on Elusive I've collaborated with a multitude of people and leagues, delivering quality and seamless designs whenever called upon. Currently working towards streamlining the business, we hope to bring more professionalism and efficiency than our competitors by a longshot."
                        media={[]}
                        myRole="Founder/Head Developer"
                        timeline="March 2025 - Present"
                        delay={0.2}
                        gradient="bg-gradient-to-br"
                    />
                    <ExperienceCard
                        discordUrl="https://discord.gg/eezy"
                        title="EEZY"
                        fullDescription={[
                            "After a friend of mine founded EEZY, he decided to hire me to develop an extensive discord bot, helping to bring his ideas to life. Still being developed and actively worked on to this day, this is one of, if not the biggest Discord bot I've worked on, being feature-packed and interacting with several different API's."
                        ]}
                        cardImage="/eezy logo.png"
                        cardDescription="After a friend of mine founded EEZY, he decided to hire me to develop an extensive discord bot, helping to bring his ideas to life. Still being developed and actively worked on to this day, this is one of, if not the biggest Discord bot I've worked on, being feature-packed and interacting with several different API's."
                        media={[]}
                        myRole="Head Developer"
                        timeline="October 2025 - Present"
                        delay={0.3}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
