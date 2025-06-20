import React from "react";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

// Define the project type for TypeScript
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubUrl: string;
  projectUrl: string;
}

// Define the projects array with Unsplash images and updated tech stacks
const projects: Project[] = [
  {
    id: 1,
    title: "WanderKashmir",
    description: "A travel guide application showcasing the beauty of Kashmir.",
    imageUrl:
      "https://media.istockphoto.com/id/2164744129/photo/view-of-shikara-boats-and-houseboats-on-dal-lake-srinagar-jammu-and-kashmir-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ShJ6qFb6jpS4LY02vNL7XnitnSyYmtH-bF6ALpk89-A=", // Scenic Kashmir-like image
    techStack: ["React", "Tailwind CSS", "JavaScript", "GitHub Pages"],
    githubUrl: "https://github.com/Iflaqbhat/WanderKashmir.git",
    projectUrl: "https://iflaqbhat.github.io/WanderKashmir/",
  },
  {
    id: 2,
    title: "AI Story Generator",
    description:
      "An AI-powered tool to generate creative stories based on user input.",
    imageUrl:
      "https://www.scriptbyai.com/wp-content/uploads/2023/12/Free-Fast-AI-Short-Story-Generator-768x614.webp",
    techStack: ["React", "TypeScript", "Tailwind CSS", "AI", "Netlify"],
    githubUrl: "https://github.com/Iflaqbhat/Ai-story-generator.git",
    projectUrl: "https://ai-story-generator-65.netlify.app/",
  },

  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A weather application providing real-time forecasts using APIs.",
    imageUrl:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Weather-themed image
    techStack: ["React", "JavaScript", "Tailwind CSS", "Weather API"],
    githubUrl: "https://github.com/Iflaqbhat/weather-forecast-app.git",
    projectUrl: "", // No live demo provided
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Projects"
          subtitle="Here are some of my recent projects that showcase my skills and experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} hoverable className="h-full flex flex-col">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto flex justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <Github size={18} className="mr-1" />
                  <span>Code</span>
                </a>

                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={18} className="ml-1" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
