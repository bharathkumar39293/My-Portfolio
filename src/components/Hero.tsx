import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/resume';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
            {/* Background Glows */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-2">Hello, I'm</h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                                {PROFILE.name.split(' ')[0]}
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                {PROFILE.name.split(' ').slice(1).join(' ')}
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
                            {PROFILE.role} crafting digital experiences with code and creativity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#projects"
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:hero-glow transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                View Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image / Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 mt-12 md:mt-0 flex justify-center z-10"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse-slow"></div>
                        <div className="relative z-10 w-full h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Abstract Code Pattern or Placeholder for Profile Pic */}
                            <div className="text-slate-600 font-mono text-xs p-6 w-full opacity-60">
                                <span className="text-indigo-400">const</span> <span className="text-yellow-200">developer</span> = <span className="text-indigo-400">new</span> <span className="text-green-300">Developer</span>({'{'}
                                <br />&nbsp;&nbsp;name: <span className="text-orange-300">"{PROFILE.name}"</span>,
                                <br />&nbsp;&nbsp;role: <span className="text-orange-300">"{PROFILE.role}"</span>,
                                <br />&nbsp;&nbsp;skills: [<span className="text-orange-300">"React"</span>, <span className="text-orange-300">"Node"</span>, <span className="text-orange-300">"Next.js"</span>],
                                <br />&nbsp;&nbsp;hardWorker: <span className="text-blue-300">true</span>
                                <br />{'}'});
                                <br />
                                <br /><span className="text-indigo-400">await</span> developer.<span className="text-yellow-200">deploy</span>(<span className="text-orange-300">"Awesome_Portfolio"</span>);
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
