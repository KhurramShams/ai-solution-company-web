import { motion } from 'motion/react';
import { Bot, Zap, Database, MessageSquare, BarChart3, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Custom AI Agents',
    description: 'Autonomous agents that handle complex tasks, research, and data processing 24/7.',
    icon: <Bot className="w-8 h-8 text-brand-primary" />,
    stats: '85% Efficiency Boost',
  },
  {
    title: 'Workflow Automation',
    description: 'Seamlessly connect your tools and automate repetitive manual sequences effortlessly.',
    icon: <Workflow className="w-8 h-8 text-brand-secondary" />,
    stats: '20+ Hours Saved/Week',
  },
  {
    title: 'Conversational AI',
    description: 'Next-gen chatbots that actually understand your customers and close sales.',
    icon: <MessageSquare className="w-8 h-8 text-brand-primary" />,
    stats: '3x Lead Conversion',
  },
  {
    title: 'Data Intelligence',
    description: 'Transform raw data into actionable insights with LLM-powered analytics.',
    icon: <BarChart3 className="w-8 h-8 text-brand-secondary" />,
    stats: 'Real-time Decisions',
  },
  {
    title: 'AI Integrations',
    description: 'Embedded AI capabilities directly into your existing SaaS products and stack.',
    icon: <Zap className="w-8 h-8 text-brand-primary" />,
    stats: 'Plug & Play Setup',
  },
  {
    title: 'ML Infrastucture',
    description: 'Scalable cloud infrastructure optimized for training and deploying AI models.',
    icon: <Database className="w-8 h-8 text-brand-secondary" />,
    stats: 'Zero-downtime Scaling',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 lg:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Intelligent Solutions for Every <span className="gradient-text">Business Layer</span>
          </h3>
          <p className="text-gray-400 text-lg">
            We don't just build chatbots. We build intelligent systems that 
            reimagine how work gets done in your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group hover:border-brand-primary/50 transition-all duration-300"
            >
              <div className="mb-6 h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-display font-bold mb-3">{service.title}</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-primary/80 uppercase tracking-wider">
                  {service.stats}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-brand-primary group-hover:text-black transition-all">
                  <Zap className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
