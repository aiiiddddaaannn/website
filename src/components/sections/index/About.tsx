import AboutCard from "@/components/AboutCard";
import type { Tech } from "../../../../typings";
import { motion } from "framer-motion";

export default function About() {
  let frontendTech: Tech[] = [
    { title: "HTML5", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { title: "CSS3", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { title: "Javascript", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { title: "Vanilla Javascript", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { title: "Canvas", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M6 8L10 12L6 16M18 8L14 12L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>, link: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" },
    { title: "Fetch", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>, link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" }
  ]

  let backendTech: Tech[] = [
    { title: "Python 3", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />, link: "https://www.python.org/" },
    { title: "Flask", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />, link: "https://flask.palletsprojects.com/" },
    { title: "Marshmallow", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/><path d="M2 17L12 22L22 17" fill="currentColor"/><path d="M2 12L12 17L22 12" fill="currentColor"/></svg>, link: "https://marshmallow.readthedocs.io/" },
    { title: "CPython", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />, link: "https://www.python.org/" },
    { title: "Waitress", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>, link: "https://docs.pylonsproject.org/projects/waitress/en/stable/" },
    { title: "discord.py", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" />, link: "https://discordpy.readthedocs.io/" },
    { title: "Gunicorn", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>, link: "https://gunicorn.org/" },
    { title: "bcrypt", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, link: "https://github.com/pyca/bcrypt" },
    { title: "discord.js", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" />, link: "https://discord.js.org/" },
    { title: "Asyncio", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>, link: "https://docs.python.org/3/library/asyncio.html" },
    { title: "redis", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" />, link: "https://redis.io/" },
    { title: "Flask-Limiter", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>, link: "https://flask-limiter.readthedocs.io/" },
    { title: "Threading", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>, link: "https://docs.python.org/3/library/threading.html" }
  ]

  let otherTech: Tech[] = [
    { title: "Adobe Premier Pro", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" />, link: "https://www.adobe.com/products/premiere.html" },
    { title: "Github", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />, link: "https://github.com/" },
    { title: "Visual Studio Code", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />, link: "https://code.visualstudio.com/" },
    { title: "Adobe Photoshop", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg" />, link: "https://www.adobe.com/products/photoshop.html" },
    { title: "NPM", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />, link: "https://www.npmjs.com/" },
    { title: "Git", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "Cybrancee", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/><path d="M12 6L16 12L12 18L8 12L12 6Z" fill="white"/></svg>, link: "https://cybrancee.com/" },
    { title: "Vercel", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />, link: "https://vercel.com/" },
    { title: "Davinci Resolve", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/><path d="M2 17L12 22L22 17" fill="currentColor"/><path d="M2 12L12 17L22 12" fill="currentColor"/></svg>, link: "https://www.blackmagicdesign.com/products/davinciresolve" }
  ]


  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="Overall"
            description="I've ran and been a key part of several projects since I was as young as 12; but did not learn to create my own tools until I was 14, having not had much interest in doing so due to the learning curve. I love to work with things related to ROBLOX or Discord, mainly playing a key part in projects ran by others; whether this be handling designing, developing, or media marketing, I've always tried my best to ensure quality work in a timely manner. While not having a clear vision for the aftermath of my graduation, I hope to be in a technology field. I take pride in my creations, and feel genuine satisfaction if I can make someone's day just a little better with my work."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Frontend"
            description="I have ~1 year of experience with frontend development, and I have worked with a collection of different frameworks and libraries."
            tech={frontendTech}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="Backend"
            description="I have ~2 years of experience with backend development, using a variety of frameworks and runtimes throughout my projects."
            tech={backendTech}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <AboutCard
            title="Other Technologies"
            description="Since I do a multitude of things, I have a very diverse selection of tools and apps I use depending on the task"
            tech={otherTech}
            direction="bottom"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
        </ul>
      </section>
    </>
  );
}
