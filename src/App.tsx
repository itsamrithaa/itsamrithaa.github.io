/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  FlaskConical, 
  Code2, 
  HeartHandshake, 
  ChevronRight, 
  ArrowUpRight,
  Menu,
  X,
  Linkedin,
  Mail,
  Github,
  Award,
  TrendingUp,
  Clock,
  Users,
  Zap
} from 'lucide-react';

// --- Components ---

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif font-light mb-4 text-soft-ink"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-base text-soft-ink/80 font-light tracking-wide"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Impact', href: '#impact' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-cream/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-serif font-semibold tracking-tighter">Amrithaa Ashok Kumar</a>
        
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-soft-ink/70 hover:text-soft-ink transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="https://www.linkedin.com/in/amrithaa-ak/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-soft-ink text-white px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-soft-ink/90 transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-dusty-rose selection:text-soft-ink font-sans bg-cream">
      <Nav />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-light leading-tight mb-8 text-soft-ink">
              Hello <br />
              <span className="italic font-normal">World.</span>
            </h1>
            <p className="max-w-lg text-lg text-soft-ink/90 font-light leading-relaxed mb-10">
              Sophomore Honors Data Analytics @ The Ohio State University. 
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#research" className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-soft-ink">
                Explore Research <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-soft-ink/70">
                View Portfolio
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-soft-ink/5"
          >
            <img 
              src="pfp.jpeg" 
              alt="Amrithaa Ashok Kumar"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-morning-mist/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </header>

      {/* Impact Bento Stats */}
      <section id="impact" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Impact & Metrics" 
            subtitle="Quantitative achievements across research and consulting."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-morning-mist/30 p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center mb-6">
                  <TrendingUp className="text-soft-ink/80" size={24} />
                </div>
                <h3 className="text-5xl font-serif mb-4">$13,000+</h3>
                <p className="text-xl font-serif italic text-soft-ink/90 mb-4">Monthly Operational Savings</p>
                <p className="text-sm text-soft-ink/80 font-light leading-relaxed max-w-md">
                  Engineered agentic AI workflows at Interlink Cloud Advisors, automating complex service workflows and saving 300+ manual hours monthly for 10+ clients.
                </p>
              </div>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-dusty-rose/30 p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between"
            >
              <Zap className="text-soft-ink/70 mb-6" size={24} />
              <div>
                <h3 className="text-4xl font-serif mb-2">46%</h3>
                <p className="text-sm uppercase tracking-widest font-bold text-soft-ink/60 mb-2">Discovery Speed</p>
                <p className="text-xs text-soft-ink/80 font-light">
                  HAP framework enhancement for transformer interpretability.
                </p>
              </div>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-sage-leaf/30 p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between"
            >
              <Award className="text-soft-ink/70 mb-6" size={24} />
              <div>
                <h3 className="text-4xl font-serif mb-2">1400%</h3>
                <p className="text-sm uppercase tracking-widest font-bold text-soft-ink/60 mb-2">Profit Projection</p>
                <p className="text-xs text-soft-ink/80 font-light">
                  Quantitative simulation models for Massachusetts SMEs.
                </p>
              </div>
            </motion.div>

            {/* Medium Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-white p-10 rounded-[2.5rem] border border-black/5 flex flex-col justify-between shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-4xl font-serif mb-2">1,000+</h3>
                  <p className="text-sm uppercase tracking-widest font-bold text-soft-ink/60 mb-4">Technical Followers</p>
                  <p className="text-sm text-soft-ink/80 font-light leading-relaxed max-w-md">
                    Authored the "10 Day Data Series" open-source project covering ML cross-validation and model selection.
                  </p>
                </div>
                <Users className="text-soft-ink/50" size={32} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            title="Professional Experience" 
            subtitle="Bridging academic rigor with industry impact."
          />

          <div className="space-y-16">
            {[
              {
                date: "May 2025 — Aug 2025",
                title: "LLM Interpretability Researcher",
                org: "Algoverse (NeurIPS Researcher)",
                points: [
                  "Co-authored research accepted to NeurIPS 2025 Workshops (MechInterp, NPGML).",
                  "Created HAP framework: 46% improvement in transformer circuit discovery efficiency.",
                  "Presented poster at NEMI (Northeastern) on Indirect Object Identification (IOI) tasks."
                ],
                impact: "Unveiling the hidden logic within Large Language Models."
              },
              {
                date: "July 2025 — Present",
                title: "Services Consultant Intern",
                org: "Interlink Cloud Advisors",
                points: [
                  "Saved $13,000+ and 300+ hours monthly via AI automation agents.",
                  "Developed 10+ Power Apps integrated with Microsoft Partner Center APIs.",
                  "Optimized support coverage using visual analysis of enterprise service-ticket data."
                ],
                impact: "Engineering massive operational ROI through agentic AI."
              },
              {
                date: "May 2025 — Aug 2025",
                title: "Digital Solutions Consultant",
                org: "LISC Massachusetts",
                points: [
                  "Led consulting team to win 1st Place Strategic Action Plan.",
                  "Projected a 1400% profit boost for SME clients using quantitative simulations.",
                  "Deployed end-to-end digital assets, from booking systems to social marketing."
                ],
                impact: "Top-tier strategic consulting for local business resilience."
              },
              {
                date: "Jan 2023 — Aug 2023",
                title: "Neutron Stars Research Intern",
                org: "Kent State University",
                points: [
                  "Analyzed high-density matter data using Python and percolation theory.",
                  "Collaborated with theoretical nuclear astrophysicists to model neutron star radii.",
                  "Mastered data extrapolation and technical report writing for scientific audiences."
                ],
                impact: "Applying ML to the extreme physics of the cosmos."
              }
            ].map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[200px_1fr] gap-8"
              >
                <div className="text-[10px] uppercase tracking-widest font-bold text-soft-ink/60 pt-2">
                  {exp.date}
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-1">{exp.title}</h3>
                  <p className="text-soft-ink/90 font-medium mb-6">{exp.org}</p>
                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-sm text-soft-ink/90 font-light leading-relaxed flex gap-3">
                        <span className="text-soft-ink/50">•</span> {point}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs italic text-soft-ink/70 border-l-2 border-morning-mist pl-4">
                    {exp.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section id="research" className="section-padding bg-morning-mist/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            title="Research Focus" 
            subtitle="Opening the Black Box of Artificial Intelligence."
          />

          <div className="bg-white p-12 md:p-16 rounded-[3rem] border border-black/5 shadow-sm">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-widest font-bold text-morning-mist mb-4 block">NeurIPS '25 Publication</span>
                <h3 className="text-3xl font-serif mb-6">Hybrid Attribution & Pruning (HAP)</h3>
                <p className="text-soft-ink/90 font-light leading-relaxed mb-8">
                  Implemented a novel framework to improve the efficiency and reliability of transformer circuit discovery. 
                  By combining gradient-based attribution with structured pruning, we isolated S-inhibition heads while reducing overhead by 46%.
                </p>
                <div className="flex gap-4">
                  <div className="px-6 py-3 bg-morning-mist/20 rounded-2xl">
                    <div className="text-2xl font-serif text-soft-ink">46%</div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-soft-ink/70">Efficiency Gain</div>
                  </div>
                  <div className="px-6 py-3 bg-soft-ink/5 rounded-2xl">
                    <div className="text-2xl font-serif text-soft-ink">PyTorch</div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-soft-ink/70">Core Stack</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-72 aspect-square bg-morning-mist/10 rounded-3xl flex items-center justify-center border border-morning-mist/20">
                <div className="text-center">
                  <FlaskConical size={48} className="text-morning-mist mx-auto mb-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-soft-ink/60">Circuit Mapping #042</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Portfolio */}
      <section id="portfolio" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Technical Portfolio" 
            subtitle="Featured works in Quantum ML, Computer Vision, and Software Engineering."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Quantum Neural Networks",
                desc: "Molecular solubility prediction pipeline using PennyLane and RDKit. Comparing CNN, QNN, and Hybrid models.",
                tags: ["PennyLane", "PyTorch", "RDKit"],
                icon: <Zap size={20} />
              },
              {
                title: "10 Day Data Series",
                desc: "Open-source tutorials on ML fundamentals using space mission datasets published to 1,000+ followers on LinkedIn.",
                tags: ["Python", "Education", "Space"],
                icon: <Users size={20} />
              },
              {
                title: "AI Foot Traffic Analyzer",
                desc: "YOLOv8-based computer vision system for real-time pedestrian detection and staffing optimization.",
                tags: ["CV", "YOLOv8", "Automation"],
                icon: <Zap size={20} />
              },
              {
                title: "Satellite Tracker",
                desc: "Java-based orbital mechanics engine with collision detection and 100% JUnit test coverage.",
                tags: ["Java", "Physics", "JUnit"],
                icon: <Code2 size={20} />
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] border border-black/5 flex flex-col h-full shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-soft-ink/5 flex items-center justify-center mb-6 text-soft-ink/70">
                  {project.icon}
                </div>
                <h4 className="text-xl font-serif mb-4">{project.title}</h4>
                <p className="text-sm text-soft-ink/80 font-light leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] uppercase tracking-wider font-bold text-soft-ink/60 bg-black/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service & Leadership */}
      <section className="section-padding bg-dusty-rose/5">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            title="Service & Leadership" 
            subtitle="Building impact through mentorship and community engagement."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "BDAA Teaching Assistant",
                desc: "Mentoring student teams through end-to-end machine learning projects focused on neural networks architecture."
              },
              {
                title: "ACM-W Mentor",
                desc: "1 of 20 OSU students sponsored for GHC '25. Organized Buck-I-Code hackathon for K-12 students."
              },
              {
                title: "Governor's Board Representative",
                desc: "Student voice for the OSU Honors & Scholars Alumni Society Board for student and alumni engagement."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-black/5">
                <h4 className="text-lg font-serif mb-3">{item.title}</h4>
                <p className="text-sm text-soft-ink/80 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-2">Amrithaa Ashok Kumar</h3>
            <p className="text-xs uppercase tracking-widest text-soft-ink/60 font-bold">Honors Data Analytics @ The Ohio State University</p>
          </div>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/amrithaa-ak/" target="_blank" rel="noopener noreferrer" className="text-soft-ink/70 hover:text-soft-ink transition-colors"><Linkedin size={20} /></a>
            <a href="https://github.com/itsamrithaa" target="_blank" rel="noopener noreferrer" className="text-soft-ink/70 hover:text-soft-ink transition-colors"><Github size={20} /></a>
            <a href="mailto:itsamrithaa@gmail.com" className="text-soft-ink/70 hover:text-soft-ink transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-soft-ink/50 font-bold">
            © 2026 Crafted with Intention
          </p>
        </div>
      </footer>
    </div>
  );
}
