import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { certifications } from '../../services/api';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and courses I've completed."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Award size={24} className="text-secondary mr-3" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
              </div>
              
              <div className="mb-4">
                <p className="text-primary dark:text-primary font-medium">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.date}
                </p>
              </div>
              
              <a 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <span>View Credential</span>
                <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;