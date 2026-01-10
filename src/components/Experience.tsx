import React from 'react';
import { Calendar } from 'lucide-react';
import { EXPERIENCE } from '../data/resume';

const Experience: React.FC = () => {
    return (
        <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
            {EXPERIENCE.map((job, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    </div>

                    <div className="glass-card p-6 md:p-8 rounded-xl relative group">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{job.role}</h3>
                                <div className="text-lg text-primary font-medium">{job.company}</div>
                            </div>
                            <div className="flex items-center text-slate-400 text-sm mt-2 md:mt-0">
                                <Calendar size={16} className="mr-2" />
                                {job.period}
                            </div>
                        </div>

                        <p className="text-slate-300 mb-4">{job.description}</p>

                        <ul className="space-y-2 mb-6">
                            {job.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start text-slate-400">
                                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>

                        {(job.links && job.links.length > 0) && (
                            <div className="flex space-x-4">
                                {job.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-slate-400 hover:text-white border-b border-transparent hover:border-primary transition-all pb-0.5"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
