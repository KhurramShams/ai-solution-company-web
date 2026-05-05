import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'AI Audit',
    description: 'We identify manual overhead and bottlenecks in your current operation.',
  },
  {
    number: '02',
    title: 'Strategy Design',
    description: 'We map out custom AI solutions tailored to your unique business goals.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our engineers build, train, and test your custom agents and workflows.',
  },
  {
    number: '04',
    title: 'Integration',
    description: 'We deploy the solutions and provide ongoing optimization to maximize ROI.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">How We Work</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold">
            The Blueprint to <br />
            <span className="gradient-text">Automated Success</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-white/5 -z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-brand-card border border-white/10 flex items-center justify-center mb-8 mx-auto lg:mx-0 group hover:border-brand-primary transition-colors">
                <span className="text-3xl font-display font-black text-white/20 group-hover:text-brand-primary transition-colors">
                  {step.number}
                </span>
              </div>
              <h4 className="text-xl font-display font-bold mb-4 text-center lg:text-left">{step.title}</h4>
              <p className="text-gray-400 text-center lg:text-left leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
