import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code, Shield, Cpu, Mail, Facebook, MessageCircle, Youtube, Heart, Globe, MapPin, Coffee } from 'lucide-react';
import { Header } from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import profilePhoto from './assets/alamin.jpg';

// Animation Variants
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 }}};
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" }}};

// Data
const expertiseData = [
    { icon: Code, title: 'App & Website Development', description: 'Building robust, scalable applications and websites with modern technologies.' },
    { icon: Shield, title: 'Cyber Security & Testing', description: 'Penetration testing, vulnerability assessment, and bug fixing to fortify systems.' },
    { icon: Cpu, title: 'Software Engineering', description: 'Architecting and building high-quality, maintainable software solutions from scratch.' },
    { icon: Youtube, title: 'YouTube Management & Strategy', description: 'Managing and securing large-scale channels, including growth strategy, content optimization, and technical support.' },
];
const languageIcons: { [key: string]: React.ReactNode } = {
    Python: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18H18C19.6569 18 21 16.6569 21 15V9C21 7.34315 19.6569 6 18 6H12V12H6C4.34315 12 3 13.3431 3 15V18H12Z" fill="#306998"/><path d="M12 6H6C4.34315 6 3 7.34315 3 9V15C3 16.6569 4.34315 18 6 18H12V12H18C19.6569 12 21 10.6569 21 9V6H12Z" fill="#FFD43B"/><circle cx="17" cy="10" r="1.5" fill="white"/><circle cx="7" cy="14" r="1.5" fill="white"/></svg>),
    JavaScript: (<div className="w-5 h-5 bg-[#F0DB4F] flex items-center justify-center rounded-sm"><span className="font-extrabold text-black text-[10px] leading-none">JS</span></div>),
    Java: <Coffee className="w-5 h-5 text-[#f89820]" />,
};
const languages = ['Python', 'JavaScript', 'Java'];
const passionsData = [
    { icon: Heart, title: 'Creating New Things', description: 'Building innovative solutions online and offline.' },
    { icon: Shield, title: 'Cyber Security', description: 'Problem-solving and securing digital environments.' },
    { icon: Code, title: 'Programming Experiments', description: 'Exploring new technologies and coding techniques.' },
    { icon: Youtube, title: 'YouTube Content', description: 'Working professionally with large YouTube channels.' },
    { icon: Globe, title: 'International Projects', description: 'Collaborating with foreign companies on exciting projects.' },
    { icon: Heart, title: 'Tech Solutions', description: 'Creating easy solutions for people through technology.' },
];
const socialLinks = [
  { href: 'mailto:lolvaialamin@gmail.com', icon: Mail, label: 'Email' },
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: 'https://wa.me/+8801981475404', icon: MessageCircle, label: 'WhatsApp' },
  { href: '#', icon: Youtube, label: 'YouTube' },
];

function App() {
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      document.body.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.body.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-20">
        
        <motion.section 
          id="home" 
          className="min-h-[80vh] flex flex-col items-center justify-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img src={profilePhoto} alt="Alamin Hossain" className="w-48 h-48 rounded-full mb-6 border-4 border-slate-700 shadow-lg object-cover" variants={itemVariants} />
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-slate-100">Alamin Hossain</motion.h1>
          <motion.div variants={itemVariants}>
            <TypeAnimation
              sequence={[ 'Software Engineer', 2000, 'Full-Stack Developer', 2000, 'Cyber Security Consultant', 2000 ]}
              wrapper="p" speed={50} className="text-xl md:text-2xl mt-2 text-emerald-400 font-medium" repeat={Infinity} />
          </motion.div>
          <motion.p variants={itemVariants} className="mt-4 max-w-2xl text-lg text-slate-400">
            I build high-quality digital solutions and secure online infrastructures for clients around the world.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4">
             <a href="#about" className="bg-emerald-500 text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-emerald-600 transition-colors duration-300 transform hover:scale-105">Learn More</a>
             <a href="#contact" className="bg-slate-800 text-slate-200 font-bold py-3 px-8 rounded-lg border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-colors duration-300">Get In Touch</a>
          </motion.div>
        </motion.section>

        <motion.section id="about" className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-emerald-400">About Me</motion.h2>
          <motion.p variants={itemVariants} className="text-slate-300 text-lg leading-relaxed">
            I am a Software Engineer and Cyber Security Consultant driven by a passion for technology's transformative power. From my home in Shyamnagar, Satkhira, I collaborate with international teams to build robust applications, secure digital environments, and engineer creative solutions to complex challenges. Continuous learning is the core of my practice.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-slate-900/70 p-4 rounded-xl border border-slate-700 hover:border-emerald-400 transition-colors duration-300">
              <MapPin className="w-10 h-10 text-emerald-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-400 text-sm uppercase tracking-wider">Location</h3>
                <p className="font-bold text-slate-100 text-lg">Shyamnagar, Satkhira, Bangladesh</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-900/70 p-4 rounded-xl border border-slate-700 hover:border-emerald-400 transition-colors duration-300">
              <Globe className="w-10 h-10 text-emerald-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-400 text-sm uppercase tracking-wider">Work Scope</h3>
                <p className="font-bold text-slate-100 text-lg">International Teams & Companies</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section id="expertise" className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-emerald-400">My Expertise</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseData.map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="bg-slate-900/70 p-6 rounded-lg border border-slate-700 hover:border-emerald-400 transition-colors duration-300 group">
                <item.icon className="w-10 h-10 mb-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl text-slate-100 mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemVariants} className="text-center mt-12">
            <h3 className="text-2xl font-bold text-slate-200 mb-4">Languages I Love</h3>
            <div className="flex justify-center flex-wrap gap-4">
                {languages.map(lang => (
                  <span key={lang} className="bg-slate-700 text-emerald-400 font-semibold py-2 px-5 rounded-full flex items-center gap-3">
                    {languageIcons[lang]} {lang}
                  </span>
                ))}
            </div>
          </motion.div>
        </motion.section>
        
        <motion.section id="passions" className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-emerald-400">What I Love</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {passionsData.map(passion => (
                    <motion.div key={passion.title} variants={itemVariants} className="flex items-start gap-4">
                        <passion.icon className="w-8 h-8 mt-1 text-emerald-400 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-xl text-slate-100 mb-1">{passion.title}</h3>
                            <p className="text-slate-400">{passion.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>

        <motion.section id="philosophy" className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4 text-emerald-400">My Philosophy</h2>
            <blockquote className="max-w-4xl mx-auto text-xl md:text-2xl text-slate-300 italic leading-relaxed border-l-4 border-emerald-400 pl-6 text-left">
              “I know that I know nothing. And that is my true wisdom. If a person can recognize their own ignorance, they become ready to learn from others. The real strength of knowledge lies not in pride, but in humility.”
            </blockquote>
          </motion.div>
        </motion.section>

        <motion.section id="contact" className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-emerald-400">Let's Connect</motion.h2>
          <motion.p variants={itemVariants} className="mt-4 mb-8 max-w-2xl mx-auto text-lg text-slate-400">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </motion.p>
          <motion.div variants={itemVariants} className="flex justify-center flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 border border-slate-700 py-2 px-5 rounded-lg hover:bg-slate-700 hover:text-emerald-400 transition-colors duration-300">
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.section>
      </main>

      <footer className="text-center py-8 text-slate-500 border-t border-slate-800">
          <p className="font-bold text-slate-400">Alamin Hossain</p>
          <p>Software Engineer | Full-Stack Developer | Cyber Security Consultant</p>
          <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;