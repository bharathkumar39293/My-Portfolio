import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PROFILE } from '../data/resume';

const Contact: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 overflow-hidden relative">
            {/* Decorative Blooms */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        I'm currently available for freelance work and full-time opportunities.
                        If you have a project that needs some creative coding, or simply want to say hello, feel free to reach out.
                    </p>

                    <div className="space-y-6">
                        <a href={`mailto:${PROFILE.email}`} className="flex items-center space-x-4 text-slate-300 hover:text-primary transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Mail size={20} />
                            </div>
                            <span>{PROFILE.email}</span>
                        </a>
                        <div className="flex items-center space-x-4 text-slate-300">
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                                <Phone size={20} />
                            </div>
                            <span>{PROFILE.phone}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-slate-300">
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                                <MapPin size={20} />
                            </div>
                            <span>{PROFILE.location}</span>
                        </div>
                    </div>
                </div>

                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                    {/* Replace this value with your actual Web3Forms access key! */}
                    <input type="hidden" name="access_key" value="e4a6149e-81b2-4ae0-a674-81fe5c270ad2" />

                    <div>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-slate-500"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your Email"
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-slate-500"
                        />
                    </div>
                    <div>
                        <textarea
                            rows={4}
                            name="message"
                            required
                            placeholder="Message"
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-slate-500 resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:hero-glow transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        Send Message
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
