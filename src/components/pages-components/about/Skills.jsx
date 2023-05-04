import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="flex items-center justify-center rounded-full relative h-screen w-full bg-circularLight dark:bg-circularDark mt-10 lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <Skill name="Web" />
        <Skill name="HTML" x="-28vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-8vw" />
        <Skill name="JAVASCRIPT" x="20vw" y="6vw" />
        <Skill name="REACTJS" x="0vw" y="12vw" />
        <Skill name="NEXTJS" x="-25vw" y="-15vw" />
        <Skill name="GATSBYJS" x="10vw" y="-12vw" />
        <Skill name="WEB DESIGN" x="34vw" y="-5vw" />
        <Skill name="FIGMA" x="0vw" y="-22vw" />
        <Skill name="FIREBASE" x="-30vw" y="18vw" />
        <Skill name="TAILWIND CSS" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
