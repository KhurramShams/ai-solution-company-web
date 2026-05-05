import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    company: 'FinTech Global',
    title: 'Automating Customer Support with Custom RAG Agents',
    result: '70% Response Time Reduction',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    tags: ['Customer Support', 'RAG', 'Automation'],
  },
  {
    company: 'LogiStream',
    title: 'Streamlining Supply Chain with Predictive AI',
    result: '$1.2M Saved in OpEx',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    tags: ['Supply Chain', 'Predictive', 'OpEx'],
  },
];

export default function CaseStudies() {
  return (
    <section id="results" className="py-20 lg:py-32 bg-brand-bg md:px-0 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Proven Results</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
              Real Impact for <span className="gradient-text">Real Businesses</span>
            </h3>
          </div>
          <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all font-bold">
            View All Success Stories
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-brand-card"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-brand-bg/20 to-transparent p-8 flex flex-col justify-end">
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-brand-primary font-bold text-sm mb-2 uppercase tracking-wide">{item.company}</p>
                    <h4 className="text-2xl font-display font-bold text-white group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-4 text-3xl font-display font-bold text-white/90">{item.result}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-brand-primary text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
