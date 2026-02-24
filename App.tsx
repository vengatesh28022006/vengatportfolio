/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  GraduationCap, 
  Code2, 
  Globe2, 
  Briefcase,
  ChevronRight,
  Github,
  Linkedin,
  MessageSquare
} from 'lucide-react';

const Section = ({ title, children, id }: { title: string, children: ReactNode, id?: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="py-20 border-b border-white/5"
  >
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-serif italic text-white">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
    </div>
    {children}
  </motion.section>
);

export default function App() {
  const skills = [
    { name: 'AI Tools', level: 'Experienced' },
    { name: 'Adaptability', level: 'Skillful' },
    { name: 'Time Management', level: 'Skillful' },
    { name: 'Teamwork', level: 'Experienced' },
    { name: 'Communication', level: 'Beginner' },
  ];

  const projects = [
    {
      title: 'Smart Leave – For Staffs',
      date: '11/2025 – 12/2025',
      link: 'https://smartleave.vercel.app/',
      description: 'Developed an AI-powered Smart Leave application for college staff, automating the entire leave management lifecycle from request to approval.',
      details: [
        'Integrated advanced AI algorithms to intelligently process leave requests.',
        'Significantly reducing manual review time and improving decision-making accuracy.'
      ]
    },
    {
      title: 'AI Chatbot',
      date: '11/2025 – 11/2025',
      link: 'https://sankaraconnect-950441171205.us-west1.run.app',
      description: 'Developed for college to enhance the students and parents to get the details about the college.',
      details: [
        'User-friendly interface with voice assistance and automations.',
        'Supports both Tamil and English languages.'
      ]
    }
  ];

  const education = [
    {
      school: 'Sankara College of Science and Commerce',
      location: 'Coimbatore',
      degree: 'Bachelor of Computer Science with Data Analytics',
      period: '07/2024 – Present'
    },
    {
      school: 'Union Education Hr. Sec School',
      location: 'Madurai',
      degree: 'HSC',
      period: '06/2023 – 04/2024',
      grade: 'Percentage: 61'
    },
    {
      school: 'Union Education Hr. Sec School',
      location: 'Madurai',
      degree: 'SSLC',
      period: '06/2021 – 04/2022',
      grade: 'Percentage: 57.2'
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-mono text-emerald-400 font-bold tracking-tighter text-xl"
        >
          VN.
        </motion.div>
        <div className="flex gap-8 text-xs font-mono uppercase tracking-widest">
          {['About', 'Education', 'Skills', 'Projects'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-emerald-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-emerald-400 text-sm mb-4 block uppercase tracking-[0.3em]">
              Available for Collaboration
            </span>
            <h1 className="text-7xl md:text-9xl font-serif italic text-white mb-8 leading-tight">
              Vengateshwaran <span className="text-emerald-400">N</span>
            </h1>
            <div className="flex flex-wrap gap-6 items-center text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-emerald-500" />
                <span>Madurai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-500" />
                <a href="mailto:vengateshnavaneethaperumal@gmail.com" className="hover:text-white transition-colors">
                  vengateshnavaneethaperumal@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-500" />
                <span>9342085829</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Summary */}
        <Section title="Summary" id="about">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <p className="text-xl leading-relaxed text-zinc-300 font-light">
              Adaptable and fast-learning individual with strong active listening and decision-making skills. 
              Creative in design and editing, with a problem-solving approach aimed at achieving academic 
              success and meaningful collaboration.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 glass rounded-2xl">
                <h3 className="text-emerald-400 font-mono text-xs uppercase mb-2">Languages</h3>
                <div className="space-y-1">
                  <p className="text-white">Tamil <span className="text-zinc-500 text-xs">(Native)</span></p>
                  <p className="text-white">English <span className="text-zinc-500 text-xs">(Working)</span></p>
                </div>
              </div>
              <div className="p-6 glass rounded-2xl">
                <h3 className="text-emerald-400 font-mono text-xs uppercase mb-2">Role</h3>
                <p className="text-white">College Student & AI Developer</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section title="Education" id="education">
          <div className="space-y-12">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                className="relative pl-8 border-l border-emerald-500/20"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-500" />
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-white">{edu.school}</h3>
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <p className="text-zinc-400 mb-1">{edu.degree}</p>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {edu.location}</span>
                  {edu.grade && <span>{edu.grade}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Expertise" id="skills">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                className="p-6 glass rounded-2xl flex justify-between items-center group"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                <div>
                  <h3 className="text-white font-medium mb-1">{skill.name}</h3>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{skill.level}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Code2 size={18} className="text-emerald-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Selected Works" id="projects">
          <div className="space-y-16">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                className="group relative"
              >
                <div className="flex flex-wrap justify-between items-end mb-6 gap-4">
                  <div>
                    <span className="font-mono text-xs text-emerald-500 mb-2 block">{project.date}</span>
                    <h3 className="text-4xl font-serif italic text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-all hover:scale-105"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <p className="text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="space-y-3">
                    {project.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex gap-3 text-sm text-zinc-300">
                        <ChevronRight size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif italic text-white mb-2">Let's build something together.</h2>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">© 2026 Vengateshwaran N</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="p-4 glass rounded-full hover:text-emerald-400 transition-colors"><Github size={20} /></a>
            <a href="#" className="p-4 glass rounded-full hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:vengateshnavaneethaperumal@gmail.com" className="p-4 glass rounded-full hover:text-emerald-400 transition-colors"><Mail size={20} /></a>
          </div>
        </footer>
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>
    </div>
  );
}
