import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <Cpu className="text-black w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter">AURA AI</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Synthesizing intelligence and operations to empower the next generation of scale.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-primary transition-colors">AI Agents</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Automation</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Consulation</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Strategy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Aura AI Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
