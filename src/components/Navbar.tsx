import { motion } from 'motion/react';
import { Bot, Cpu, Zap, Mail, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-brand-bg/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
              <Cpu className="text-black w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter">AURA AI</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-brand-primary hover:text-black transition-all">
              Book Audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-bg border-b border-white/5 p-4"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-400"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 rounded-xl bg-brand-primary text-black font-bold">
              Book Free Audit
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
