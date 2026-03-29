import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  CheckCircle2,
  ExternalLink,
  Award,
  Users,
  Briefcase,
  Play
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const phoneNumber = "2348033707199";
  const message = encodeURIComponent("Hello Sir Jay & Partners, I'm interested in your real estate services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Building2 className="w-8 h-8 text-brand-blue glow-blue" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full glow-white animate-pulse" />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter glow-white">
            SIR JAY <span className="text-brand-blue">& PARTNERS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-brand-blue transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition-all hover:scale-105 bg-glow-blue"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-brand-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-black px-6 py-3 rounded-full font-bold text-sm w-full text-center"
            >
              GET IN TOUCH
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Home" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">BN No. 3586656</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-6">
              ELEVATE YOUR <br />
              <span className="text-brand-blue glow-blue">LIFESTYLE.</span>
            </h1>
            <p className="text-lg text-white/60 max-w-lg mb-8 leading-relaxed">
              Sir Jay & Partners are premier real estate brokers & consultants. 
              We specialize in buying and selling properties with a focus on 
              excellence and integrity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#properties"
                className="bg-brand-blue text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-all hover:scale-105 bg-glow-blue"
              >
                EXPLORE PROPERTIES <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#services"
                className="px-8 py-4 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-all"
              >
                OUR SERVICES
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Architecture" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-1">Featured Listing</p>
                    <h3 className="text-2xl font-bold">Duplex & Twin 3 Bedroom Flats</h3>
                    <p className="text-white/60 flex items-center gap-1 text-sm"><MapPin className="w-3 h-3" /> Mariam Babangida, Asaba</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold glow-white">N500M</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-brand-blue/50 rounded-tr-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-brand-blue/50 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Properties Sold', value: '500+' },
    { label: 'Happy Clients', value: '1.2k' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Awards Won', value: '24' },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2 glow-blue">{stat.value}</h3>
              <p className="text-white/40 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Property Sales',
      desc: 'We help you sell your property at the best market value with strategic marketing.',
      icon: <Home className="w-6 h-6" />,
    },
    {
      title: 'Property Buying',
      desc: 'Finding your dream home or investment property made simple and efficient.',
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: 'Consultancy',
      desc: 'Expert real estate advice to help you make informed investment decisions.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Brokerage',
      desc: 'Professional brokerage services for commercial and residential properties.',
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold">PROFESSIONAL <br /><span className="text-white/40">REAL ESTATE SERVICES.</span></h2>
          </div>
          <p className="text-white/50 max-w-sm mb-2">
            We provide comprehensive solutions for all your property needs, ensuring a seamless experience from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-blue/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-black transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductDetailModal = ({ isOpen, onClose, property }: { isOpen: boolean; onClose: () => void; property: any }) => {
  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-6xl bg-[#0a0a0a] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-brand-blue hover:text-black transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video/Image Section */}
            <div className="w-full lg:w-3/5 aspect-video lg:aspect-auto relative bg-black">
              {property.videoUrl.includes('drive.google.com') ? (
                <iframe 
                  src={property.videoUrl}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen"
                  title={property.title}
                />
              ) : (
                <video 
                  src={property.videoUrl} 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  playsInline
                  loop
                />
              )}
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col">
              <div className="mb-8">
                <p className="text-brand-blue font-bold uppercase tracking-widest text-xs mb-2">{property.location}</p>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{property.title}</h3>
                <p className="text-2xl font-bold text-white glow-white mb-6">{property.price}</p>
                
                <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/10 mb-8">
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold mb-1 tracking-widest">Beds</p>
                    <p className="text-xl font-bold">{property.beds}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold mb-1 tracking-widest">Baths</p>
                    <p className="text-xl font-bold">{property.baths}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold mb-1 tracking-widest">Sq Ft</p>
                    <p className="text-xl font-bold">{property.sqft}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-blue">Description</h4>
                  <p className="text-white/60 leading-relaxed whitespace-pre-wrap">
                    {property.description}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <a 
                  href="#contact"
                  onClick={onClose}
                  className="w-full py-5 bg-brand-blue text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-all bg-glow-blue uppercase tracking-widest text-sm"
                >
                  Inquire About This Property
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Properties = ({ properties }: { properties: any[] }) => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  return (
    <section id="properties" className="py-24 bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">Featured Listings</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">DISCOVER YOUR <span className="text-brand-blue glow-blue">NEXT HOME.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {properties.map((prop, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-brand-blue/30 transition-all"
            >
              <div className="relative h-[500px] overflow-hidden group/img bg-black">
                {prop.videoUrl.includes('drive.google.com') ? (
                  <iframe 
                    src={prop.videoUrl}
                    className="w-full h-full border-0 pointer-events-none"
                    allow="autoplay; fullscreen"
                    title={prop.title}
                  />
                ) : (
                  <video 
                    src={prop.videoUrl} 
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                  />
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedProperty(prop)}
                    className="w-16 h-16 rounded-full bg-brand-blue text-black flex items-center justify-center scale-75 group-hover/img:scale-100 transition-all duration-300 shadow-2xl z-10"
                  >
                    <Search className="w-8 h-8" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-brand-blue text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">For Sale</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-brand-blue transition-colors">{prop.title}</h3>
                    <p className="text-white/40 text-xs flex items-center gap-1"><MapPin className="w-3 h-3" /> {prop.location}</p>
                  </div>
                  <p className="text-xl font-bold text-brand-blue glow-blue">{prop.price}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/5">
                  <div className="text-center">
                    <p className="text-white/60 text-[10px] uppercase font-bold mb-1">Beds</p>
                    <p className="font-bold">{prop.beds}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-[10px] uppercase font-bold mb-1">Baths</p>
                    <p className="font-bold">{prop.baths}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-[10px] uppercase font-bold mb-1">Sq Ft</p>
                    <p className="font-bold">{prop.sqft}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProperty(prop)}
                  className="w-full mt-4 py-3 rounded-2xl border border-white/10 font-bold text-sm hover:bg-brand-blue hover:text-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
                >
                  View Properties
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest hover:text-white transition-colors">
            View All Properties <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <ProductDetailModal 
        isOpen={!!selectedProperty} 
        onClose={() => setSelectedProperty(null)} 
        property={selectedProperty} 
      />
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</p>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 leading-tight">READY TO <br />START YOUR <br /><span className="text-brand-blue glow-blue">JOURNEY?</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-brand-blue/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 mx-auto group-hover:bg-brand-blue group-hover:text-black transition-colors">
                <Phone className="w-7 h-7" />
              </div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Call Us</p>
              <p className="text-xl font-bold">0803 370 7199</p>
            </div>

            <a 
              href="mailto:asabaproperties247@gmail.com"
              className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-brand-blue/30 transition-all group block"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 mx-auto group-hover:bg-brand-blue group-hover:text-black transition-colors">
                <Mail className="w-7 h-7" />
              </div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Email Us</p>
              <p className="text-xl font-bold">SEND EMAIL</p>
            </a>

            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-brand-blue/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 mx-auto group-hover:bg-brand-blue group-hover:text-black transition-colors">
                <MapPin className="w-7 h-7" />
              </div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Visit Us</p>
              <p className="text-xl font-bold">Asaba Properties District, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-8 h-8 text-brand-blue glow-blue" />
              <span className="text-xl font-display font-bold tracking-tighter glow-white">
                SIR JAY <span className="text-brand-blue">& PARTNERS</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Premier real estate brokers & consultants. We buy and sell properties 
              with a commitment to excellence and client satisfaction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-blue hover:border-brand-blue transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-blue hover:border-brand-blue transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-blue hover:border-brand-blue transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Properties', 'Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-brand-blue transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Services</h4>
            <ul className="space-y-4">
              {['Property Sales', 'Property Buying', 'Consultancy', 'Brokerage', 'Investment'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-brand-blue transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-medium">
            © 2026 SIR JAY & PARTNERS. ALL RIGHTS RESERVED. BN No. 3586656
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  const phoneNumber = "2348033707199"; // International format for 0803 370 7199
  const message = encodeURIComponent("Hello Sir Jay & Partners, I'm interested in your real estate services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] group flex items-center gap-3"
    >
      <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap">WhatsApp Us</span>
      </div>
      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300">
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>
    </motion.a>
  );
};

const CallButton = () => {
  const phoneNumber = "tel:2348033707199";

  return (
    <motion.a
      href={phoneNumber}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-28 right-8 z-[100] group flex items-center gap-3"
    >
      <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap">Call Us Now</span>
      </div>
      <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.6)] transition-all duration-300">
        <Phone className="w-8 h-8 text-black" />
      </div>
    </motion.a>
  );
};

const ListProperty = ({ onAddProperty }: { onAddProperty: (prop: any) => void }) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    videoUrl: '',
    description: '',
    price: 'N0',
    beds: 0,
    baths: 0,
    sqft: '0'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.location) return;
    
    // Add preview suffix if it's a drive link and missing
    let videoUrl = formData.videoUrl;
    if (videoUrl.includes('drive.google.com') && !videoUrl.endsWith('/preview')) {
      videoUrl = videoUrl.replace(/\/view\?usp=drive_link$/, '/preview').replace(/\/view$/, '/preview');
      if (!videoUrl.endsWith('/preview')) videoUrl += '/preview';
    }

    onAddProperty({
      ...formData,
      videoUrl,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800',
    });

    setFormData({
      title: '',
      location: '',
      videoUrl: '',
      description: '',
      price: 'N0',
      beds: 0,
      baths: 0,
      sqft: '0'
    });

    alert('Property listed successfully!');
  };

  return (
    <section id="list-property" className="py-24 bg-white/5 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">Partner With Us</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              LIST YOUR PROPERTY <br />WITH <span className="text-brand-blue glow-blue">VIDEO.</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Properties with videos get 400% more inquiries. Let us showcase your home 
              with professional cinematography and reach a global audience.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Professional Video Production',
                'Drone Aerial Cinematography',
                'Virtual 3D Tours',
                'Strategic Social Media Marketing'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[40px] shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Submit Property Details</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Property Name" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors" 
                  required
                />
                <input 
                  type="text" 
                  placeholder="Location" 
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors" 
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Price (e.g. N250M)" 
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors" 
                />
                <input 
                  type="text" 
                  placeholder="Sq Ft" 
                  value={formData.sqft}
                  onChange={(e) => setFormData({...formData, sqft: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors" 
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="number" 
                  placeholder="Beds" 
                  value={formData.beds || ''}
                  onChange={(e) => setFormData({...formData, beds: parseInt(e.target.value) || 0})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors" 
                />
                <input 
                  type="number" 
                  placeholder="Baths" 
                  value={formData.baths || ''}
                  onChange={(e) => setFormData({...formData, baths: parseInt(e.target.value) || 0})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors" 
                />
              </div>
              <input 
                type="url" 
                placeholder="Video URL (Google Drive/YouTube)" 
                value={formData.videoUrl}
                onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors" 
                required
              />
              <textarea 
                placeholder="Property Description" 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-colors h-32 resize-none"
              ></textarea>
              <button type="submit" className="w-full py-5 bg-brand-blue text-black font-bold rounded-2xl hover:bg-white transition-all bg-glow-blue uppercase tracking-widest text-sm">
                LIST PROPERTY NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [properties, setProperties] = useState([
    {
      title: 'Duplex & Twin 3 Bedroom Flats',
      price: 'N500M',
      location: 'Mariam Babangida, Asaba',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
      videoUrl: 'https://drive.google.com/file/d/1w1h8CA8-EoMfRM8YbL7w6mSQYu3SDdHA/preview',
      description: '‼️‼️‼️#VeryGooddeal\n\n📌A Duplex on one side  &\n\n📌A Twin 3 Bedroom flats ( Up & Down)\n   On other side\n\n📌Landsize; 100 by 100ft\n\n📍Location; Mariam Babangida , Asaba\n     Super siren Neighborhood\n\n📌Title; CofO\n\n📌Price; N500M asking',
      beds: 8,
      baths: 6,
      sqft: '10,000',
    },
    {
      title: 'Modern 4-Bedroom duplex',
      price: 'N280M',
      location: 'Off Madonna Road, behind NTA. Asaba ',
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800',
      videoUrl: 'https://drive.google.com/file/d/1kwVHb9nPyvQ7f3rDd3ND3peGKNVt88ja/preview',
      description: '📌Title ::  Allocation paper , survey plan , Government building plan approval .\n\n📌Features: \n\nSpacious Rooms and Living Rooms \nWalking Closet \n Exotical finishing\n All Rooms Ensuite\n 2Sitting Rooms\n 4 bedroom \n Parking space\n Swimming pool \n pop ceiling\nFitted kitchen\nBQ attached \n Gas Cooker\n Smoke Extractor\n Central water system\n Fenced and gated \nCarport \n Security Guard House\n CCTV \nPower / Generator house \n Fully concrete increted compound',
      beds: 4,
      baths: 4,
      sqft: '2,800',
    },
    {
      title: 'Distress 4 BEDROOM DUPLEX',
      price: 'N180M',
      location: 'Governance Villa Estate Ibuzor Rd Asaba',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
      videoUrl: 'https://drive.google.com/file/d/1R2zVNlvwZDELZNSaPfmLUlcAnIBfzlVY/preview',
      description: '📌Title ::  Allocation paper , survey plan , Government building plan approval .\n\n📌Features: \n\nSpacious Rooms and Living Rooms \nWalking Closet \n Exotical finishing\n All Rooms Ensuite\n 2Sitting Rooms\n 4 bedroom \n Parking space\n Swimming pool \n pop ceiling\nFitted kitchen\nBQ attached \n Gas Cooker\n Smoke Extractor\n Central water system\n Fenced and gated \nCarport \n Security Guard House\n CCTV \nPower / Generator house \n Fully concrete increted compound',
      beds: 4,
      baths: 4,
      sqft: '6,500',
    },
    {
      title: 'Luxury 5 Bedroom Detached Duplex',
      price: 'N350M',
      location: 'GRA Phase 1, Asaba',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      videoUrl: 'https://drive.google.com/file/d/1kwVHb9nPyvQ7f3rDd3ND3peGKNVt88ja/preview',
      description: '📌Title :: C of O, Registered Survey, Approved Building Plan.\n\n📌Features:\n- Fully Automated Smart Home\n- Private Cinema Room\n- Olympic Size Swimming Pool\n- Fully Fitted Kitchen with Island\n- Massive Master Suite with Walk-in Closet\n- 24/7 Security & Power\n- Ample Parking for 6 Cars',
      beds: 5,
      baths: 6,
      sqft: '5,500',
    },
    {
      title: 'Contemporary 6 Bedroom Duplex',
      price: 'N280M',
      location: 'Behind NTA, Asaba',
      image: 'https://images.unsplash.com/photo-1600607687940-c52af036999c?auto=format&fit=crop&q=80&w=800',
      videoUrl: 'https://drive.google.com/file/d/1VaQnLKDICNVyj5PdbTymRrGlxiDcv-ur/preview',
      description: '‼️‼️‼️#QuickSale\n\n📌A Contemporary 6 Bedroom Duplex \n\n📍Location; Behind NTA, Asaba\n\n📌Landsize ; 70 by 100ft ( Super big)\n\n📌This wasn’t built for sell, \n\n📌It was uniquely designed for personal use\n\n📌Title; CofO \n\n✅Top Features; \n\nSuper big (70 by 100)\n\nAmple packing space \n\nVery Tall building, not the regular \n\nNice & siren neighborhood \n\n33 Line ( Steady Power supply)\n\nAttached BQ\n\nGenerator & Security house \n\nVery Unique & Modern',
      beds: 6,
      baths: 6,
      sqft: '7,000',
    }
  ]);

  const handleAddProperty = (newProp: any) => {
    setProperties([newProp, ...properties]);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Properties properties={properties} />
        
        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-[60px] overflow-hidden bg-brand-blue p-12 md:p-24 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-white/20" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-display font-bold text-black mb-8 leading-tight">
                  FIND YOUR <br />PIECE OF <span className="text-white glow-white">PARADISE.</span>
                </h2>
                <p className="text-black/70 text-lg mb-12 font-medium">
                  Whether you're buying your first home or selling a luxury estate, 
                  our team is here to guide you every step of the way.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="#contact"
                    className="bg-black text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all shadow-2xl"
                  >
                    GET STARTED NOW
                  </a>
                  <a 
                    href="#properties"
                    className="bg-white/20 backdrop-blur-md text-black px-10 py-5 rounded-full font-bold hover:bg-white/30 transition-all"
                  >
                    VIEW LISTINGS
                  </a>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        <ListProperty onAddProperty={handleAddProperty} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </div>
  );
}
