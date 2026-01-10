import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/resume';

const Education: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Column */}
            <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center text-slate-100">
                    <GraduationCap className="mr-3 text-primary" /> Education
                </h3>
                <div className="space-y-6">
                    {EDUCATION.map((edu, index) => (
                        <div key={index} className="glass-card p-6 rounded-xl border-l-[4px] border-l-primary/50">
                            <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                            <p className="text-slate-400 font-medium mb-2">{edu.institution}</p>
                            <div className="flex justify-between text-sm text-slate-500">
                                <span>{edu.period}</span>
                                <span>{edu.details}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications Column */}
            <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center text-slate-100">
                    <Award className="mr-3 text-secondary" /> Certifications & Awards
                </h3>
                <div className="space-y-4">
                    {CERTIFICATIONS.map((cert, index) => (
                        <div key={index} className="glass-card p-5 rounded-lg flex items-start">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-secondary mr-4 flex-shrink-0"></span>
                            <p className="text-slate-300 leading-relaxed">{cert}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
