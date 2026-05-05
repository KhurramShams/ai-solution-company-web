import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Next-Gen AI Solutions for Business
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-8"
          >
            Scale Your Operations with <br />
            <span className="gradient-text">Intelligent AI Agents</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Stop wasting hours on manual workflows. We build custom AI automation 
            that reduces costs by 40% and lets your team focus on what actually moves the needle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-primary text-black font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 group">
              Get Your Free AI Audit
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 pt-10 border-t border-white/5"
          >
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">
              Trusted by Innovative Companies
            </p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-display font-bold">TECHFLOW</span>
              <span className="text-2xl font-display font-bold">NEXUS</span>
              <span className="text-2xl font-display font-bold">QUANTUM</span>
              <span className="text-2xl font-display font-bold">VELOCITY</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl -z-0" />
    </section>
  );
}
