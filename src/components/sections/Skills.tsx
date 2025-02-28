import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { skills } from "../../services/api";

const SkillIcon: React.FC<{ name: string }> = ({ name }) => {
  // Map skill names to their respective icons
  const iconMap: Record<string, string> = {
    javascript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    typescript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    react:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    nodejs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    express:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    mongodb:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    tailwind:
      "https://camo.githubusercontent.com/3662a9ccbc365e52fe27bd9bd5cbdd9388f9285d8bb4cd19a68ef0b045d70258/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7461696c77696e646373732f7461696c77696e646373732d6f726967696e616c2e737667",
    bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  };

  return (
    <img
      src={
        iconMap[name.toLowerCase()] ||
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
      }
      alt={name}
      className="w-10 h-10"
    />
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Skills"
          subtitle="I've worked with a variety of technologies in the web development world."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center transform transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <SkillIcon name={skill.icon} />
              </div>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>

              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
