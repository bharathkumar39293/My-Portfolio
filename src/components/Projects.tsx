import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { PROJECTS } from '../data/resume';

const Projects: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
                <div key={index} className="glass-card flex flex-col h-full p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 group">
                    <div className="flex justify-between items-start mb-6">
                        <div className="text-primary group-hover:text-secondary transition-colors">
                            <Folder size={40} />
                        </div>
                        <div className="flex space-x-4">
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="View Source">
                                    <Github size={20} />
                                </a>
                            )}
                            {project.links.demo && (
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="text-xs font-medium text-slate-500 font-mono">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
