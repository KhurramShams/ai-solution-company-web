import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'COO at TechFlow',
    content: 'Aura AI transformed our customer support overnight. We went from a 4-hour delay to instant resolutions using their custom agents.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Ops at Nexa',
    content: 'The ROI was clear within month one. We saved over $100k in manual data entry costs through their workflow automation.',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
  },
  {
    name: 'David Miller',
    role: 'Founder at Quantum HQ',
    content: 'The professionality and technical depth they bring to AI strategy is unmatched. They are our go-to partners for scale.',
    avatar: 'https://i.pravatar.cc/150?u=david',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 underline-offset-8">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Client Love</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold">Trusted by Industry Leaders</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col justify-between"
            >
              <div className="flex gap-1 mb-6 text-brand-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
