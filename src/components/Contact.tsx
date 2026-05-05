import { motion } from 'motion/react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card bg-linear-to-br from-brand-card to-brand-card/50 p-8 lg:p-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Start Scaling</h2>
              <h3 className="text-4xl lg:text-6xl font-display font-bold mb-8">
                Ready to <span className="gradient-text">Automate?</span>
              </h3>
              <p className="text-gray-400 text-lg mb-12">
                Join 50+ industry leaders who have already transformed their scale with our AI solutions. 
                Fill out the form for a discovery call.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/70">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <span>hello@aura-ai.com</span>
                </div>
                <div className="flex items-center gap-4 text-white/70">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-brand-primary" />
                  </div>
                  <span>Book via WhatsApp</span>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-hidden transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-hidden transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Company Size</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-hidden transition-colors text-gray-300">
                  <option>1-10 Employees</option>
                  <option>11-50 Employees</option>
                  <option>51-200 Employees</option>
                  <option>200+ Employees</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you scale?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-hidden transition-colors"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-brand-primary text-black font-extrabold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(0,255,135,0.2)]"
              >
                Send Request
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -z-0" />
    </section>
  );
}
