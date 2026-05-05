import { motion } from 'motion/react';

const stats = [
  { label: 'Workflows Automated', value: '500+' },
  { label: 'Cost Savings', value: '$4.2M+' },
  { label: 'Efficiency Gain', value: '85%' },
  { label: 'Client Retention', value: '98%' },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl lg:text-7xl font-display font-black mb-4 gradient-text">
                {stat.value}
              </div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
