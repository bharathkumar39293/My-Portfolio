import React from 'react';
import { SKILLS } from '../data/resume';

const Skills: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skillGroup, index) => {
                const Icon = skillGroup.icon;
                return (
                    <div
                        key={index}
                        className="glass-card p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center mb-4 text-primary">
                            <Icon size={24} />
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-slate-100">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Skills;
