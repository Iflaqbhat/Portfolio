import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { education } from '../../services/api';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="My academic background and qualifications."
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={edu.id}
              className={`relative pl-8 ${
                index !== education.length - 1 ? 'pb-12' : ''
              }`}
            >
              {index !== education.length - 1 && (
                <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
              )}
              
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                <GraduationCap size={14} className="text-white" />
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-1" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium text-primary dark:text-primary mb-2">
                  {edu.institution}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;