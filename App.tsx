
import React, { useEffect, useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Quote, 
  Users, 
  Layers, 
  BrainCircuit, 
  Network, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Target, 
  Rocket, 
  Info, 
  Zap,
  TrendingUp
} from 'lucide-react';

// --- Sub-Components ---

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className={`font-bold uppercase tracking-[0.2em] text-xs transition-colors ${scrolled ? 'text-autodesk-dark' : 'text-white'}`}>
            Mo Han - Promotion Portfolio 2025 - Autodesk Construction Cloud
          </div>
        </div>
        <nav className={`hidden md:flex items-center gap-10 font-bold text-xs uppercase tracking-[0.2em] transition-colors ${scrolled ? 'text-autodesk-charcoal' : 'text-white/80'}`}>
          <button onClick={() => scrollTo('vision')} className="hover:text-autodesk-blue transition-colors outline-none">Vision</button>
          <button onClick={() => scrollTo('impact')} className="hover:text-autodesk-blue transition-colors outline-none">Impact</button>
          <button onClick={() => scrollTo('leadership')} className="hover:text-autodesk-blue transition-colors outline-none">Leadership</button>
        </nav>
      </div>
    </header>
  );
};

const Hero: React.FC = () => (
  <section className="relative min-h-screen bg-autodesk-dark flex items-center overflow-hidden">
    <div className="absolute inset-0 opacity-10" 
         style={{ backgroundImage: 'radial-gradient(#0696d7 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-autodesk-blue/20 to-transparent" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div className="inline-block">
             <div className="flex items-center gap-3 px-4 py-1.5 bg-autodesk-blue/10 border border-autodesk-blue/30 rounded-full">
                <span className="w-2 h-2 rounded-full bg-autodesk-blue animate-pulse" />
                <span className="text-autodesk-blue font-bold text-[10px] uppercase tracking-widest">Leadership Portfolio 2025</span>
             </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-7xl lg:text-9xl font-black text-white leading-none tracking-tighter uppercase">
              MO HAN,<br />
              <span className="text-autodesk-blue">Ph.D</span>
            </h1>
            <div className="h-1.5 w-32 bg-autodesk-blue"></div>
            <h2 className="text-4xl lg:text-5xl font-black text-neutral-300 leading-tight tracking-tight uppercase">
              Driving AI Intelligence <br />
              for a Connected Construction Platform.
            </h2>
          </div>
          <p className="text-xl text-neutral-400 max-w-lg font-medium leading-relaxed">
            Transforming <strong>ACC</strong> from a <strong>data warehouse</strong> into a <strong>predictive, unified intelligent system</strong>. Ph.D in ECE and the <strong>primary AI partner</strong> for platform-level strategy.
          </p>
          <div className="flex flex-wrap gap-5 pt-4">
            <button 
              onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-autodesk-blue text-white px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-autodesk-dark transition-all flex items-center gap-3 outline-none"
            >
              See Achievements <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
           <div className="bg-white p-12 shadow-[40px_40px_0px_0px_rgba(6,150,215,1)]">
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-b-2 border-neutral-100 pb-6">
                   <div className="w-16 h-16 rounded-full bg-autodesk-blue flex items-center justify-center font-black text-white text-2xl shadow-inner">MH</div>
                   <div>
                      <h3 className="text-2xl font-black text-autodesk-dark tracking-tighter">Mo Han, Ph.D</h3>
                      <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">PhD in Electrical Engineering</p>
                   </div>
                </div>
                <div className="space-y-6">
                  <div className="group">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Strategic Role</p>
                    <p className="text-lg font-medium text-autodesk-dark group-hover:text-autodesk-blue transition-colors">ACC's <strong>AI Go-To Person</strong></p>
                  </div>
                  <div className="group">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Platform Impact</p>
                    <p className="text-lg font-medium text-autodesk-dark group-hover:text-autodesk-blue transition-colors"><strong>Primary Partner</strong> for <strong>AI Strategy</strong> of Multiple ACC Teams</p>
                  </div>
                  <div className="group">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Core Expertise</p>
                    <p className="text-lg font-medium text-autodesk-dark group-hover:text-autodesk-blue transition-colors"><strong>AI Solution and System Design</strong> for a Connected Construction Platform</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const SectionHeading: React.FC<{ number: string; title: string; subtitle: string }> = ({ number, title, subtitle }) => (
  <div className="mb-12 space-y-4">
    <div className="flex items-center gap-4">
      <span className="text-autodesk-blue font-black text-xl italic tracking-tighter">/{number}</span>
      <div className="h-[2px] w-12 bg-autodesk-blue" />
    </div>
    <h2 className="text-5xl lg:text-7xl font-black text-autodesk-dark tracking-tight uppercase">{title}</h2>
    <p className="text-xl text-neutral-500 max-w-3xl leading-relaxed font-medium">{subtitle}</p>
  </div>
);

const ExpandableCard: React.FC<{ 
  title: string; 
  summary: React.ReactNode; 
  details: React.ReactNode; 
  icon: React.ElementType; 
  theme?: 'dark' | 'light' 
}> = ({ title, summary, details, icon: Icon, theme = 'light' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';

  return (
    <div className={`transition-all duration-500 ${isDark ? 'bg-autodesk-dark text-white' : 'bg-autodesk-gray text-autodesk-dark'} p-10 lg:p-14 space-y-6 flex flex-col`}>
      <Icon size={40} className="text-autodesk-blue" />
      <h3 className={`text-2xl font-black uppercase italic ${isDark ? 'text-white' : 'text-autodesk-dark'}`}>{title}</h3>
      <div className={`${isDark ? 'text-neutral-400' : 'text-neutral-600'} leading-relaxed font-medium text-sm`}>
        {summary}
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
        <div className={`pt-4 border-t ${isDark ? 'border-white/10' : 'border-neutral-200'} space-y-4`}>
          {details}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-current opacity-10" />
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] transition-all ${isDark ? 'text-autodesk-blue hover:text-white' : 'text-autodesk-blue hover:text-black'}`}
      >
        {isOpen ? (
          <><ChevronUp size={14} /> Hide Details</>
        ) : (
          <><ChevronDown size={14} /> View Achievements</>
        )}
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Strategic Belief Quote */}
      <section className="bg-autodesk-blue py-32 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 text-white/5 font-black text-[20rem] leading-none select-none pointer-events-none">
          VISION
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
           <Quote size={80} className="text-white/20 mb-8" fill="currentColor" />
           <h2 className="text-3xl md:text-5xl font-black text-white leading-tight italic">
             "<strong>ACC</strong> must evolve beyond <strong>data storage</strong> toward enabling teams to understand not only what their <strong>data is</strong>, but how it <strong>relates, influences, and depends</strong> on everything around it."
           </h2>
           <div className="mt-12 flex items-center gap-6">
              <div className="w-16 h-[2px] bg-white/40" />
              <p className="text-white font-bold uppercase tracking-widest text-sm">Philosophical Foundation</p>
           </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section id="vision" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            number="01" 
            title="Strategic Vision" 
            subtitle="Construction teams struggle with fragmented intelligence. Mo identified the core conceptual and physical bottlenecks of the current architecture."
          />

          <div className="grid md:grid-cols-2 gap-1 px-0 mb-20">
            <ExpandableCard 
              icon={Target}
              title="Physical Silos"
              summary={
                <p>Dispersed information across tools with <strong>inconsistent permissions</strong> and no <strong>real-time cross-functional infrastructure</strong>.</p>
              }
              details={
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-autodesk-charcoal uppercase tracking-tight"><strong>Primary AI Partner for AI System Design</strong></p>
                  <ul className="text-xs space-y-3 list-disc pl-4 text-neutral-600 font-medium">
                    <li>Developed high-impact <strong>initial proposals</strong> for the <strong>next-gen MCP architecture</strong>.</li>
                    <li>Led and developed the <strong>core AI strategies and solutions</strong> to address challenges and queries related to complex data analysis.</li>
                    <li><strong>Guided key design decisions</strong> by quick research, experiments and prototypes.</li>
                  </ul>
                </div>
              }
            />
            <ExpandableCard 
              theme="dark"
              icon={BrainCircuit}
              title="Conceptual Silos"
              summary={
                <p>Lack of shared logic for understanding how <strong>entities relate, influence, and depend</strong> on each other.</p>
              }
              details={
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-white italic underline decoration-autodesk-blue decoration-2 underline-offset-4 uppercase tracking-tight">Evolving <strong>ACC</strong> Beyond a <strong>Data Warehouse</strong></p>
                  <ul className="text-xs space-y-3 list-disc pl-4 text-neutral-400 font-medium">
                    <li>Led the creation of the <strong>ontology and knowledge graph framework</strong>.</li>
                    <li>Led the <strong>modeling of the data connection system</strong> with full design-construction lifecycle relationships.</li>
                    <li>Built <strong>prototype for a 4D schedule</strong> that can enable <strong>predictive reasoning</strong> on downstream effects.</li>
                  </ul>
                </div>
              }
            />
          </div>

          {/* TechX 2025 Recognition Section - Below Silos */}
          <div className="bg-neutral-100 p-12 lg:p-20 border border-neutral-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded text-autodesk-blue text-[10px] font-black uppercase tracking-widest">
                  Executive Validation
                </div>
                <h3 className="text-4xl font-black text-autodesk-dark tracking-tight uppercase leading-tight">
                  TechX 2025: <br />
                  <span className="text-autodesk-blue">Strategic Differentiator</span>
                </h3>
                <p className="text-lg text-neutral-600 font-medium leading-relaxed">
                  This vision was highlighted at <strong>TechX 2025</strong>, and AEC leaders—including <strong>Andrew Anagnost</strong> and <strong>Amy Bunszel</strong>—recognized it as a <strong>strategic differentiator</strong> of <strong>ACC</strong> from competitors.
                </p>
                <div className="p-6 bg-white border-l-8 border-autodesk-blue shadow-lg">
                  <p className="text-sm italic font-bold text-autodesk-dark">
                    "A <strong>critical step</strong> toward evolving <strong>ACC</strong> beyond a <strong>data warehouse</strong> into an <strong>intelligent platform</strong> capable of <strong>understanding relationships</strong> and <strong>predicting downstream effects</strong>."
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                 <div className="bg-autodesk-dark p-8 text-white flex gap-6 items-start">
                    <Zap className="text-autodesk-blue shrink-0" size={32} />
                    <div>
                      <h4 className="font-black uppercase italic mb-2">The Shift</h4>
                      <p className="text-sm text-neutral-400">Moving from <strong>simple storage</strong> to <strong>predictive intelligence</strong> and <strong>connected insights</strong>.</p>
                    </div>
                 </div>
                 <div className="bg-white p-8 text-autodesk-dark flex gap-6 items-start shadow-sm border border-neutral-200">
                    <Award className="text-autodesk-blue shrink-0" size={32} />
                    <div>
                      <h4 className="font-black uppercase italic mb-2">Industry Edge</h4>
                      <p className="text-sm text-neutral-500">Validated as a unique <strong>competitive advantage</strong> in the <strong>AEC landscape</strong>.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-32 bg-autodesk-gray px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            number="02" 
            title="Product Impact" 
            subtitle="Transforming the Autodesk Assistant in ACC from a conceptual proof into a production-ready intelligence engine."
          />

          <div className="space-y-12">
            {/* Row 1: Quotation from Vikas Sakaray */}
            <div className="bg-white p-8 md:p-12 border-l-8 border-autodesk-blue shadow-xl relative overflow-hidden group w-full">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={120} fill="currentColor" />
              </div>
              <p className="text-2xl font-black text-autodesk-dark leading-tight mb-8 italic">
                "Mo’s proactive mindset, innovation, and strong collaboration have been key to our success on Autodesk Assistant in ACC"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-autodesk-dark flex items-center justify-center text-white font-black text-sm">VS</div>
                <div>
                  <p className="font-black text-autodesk-dark uppercase text-base tracking-tight">Vikas Sakaray</p>
                  <p className="text-[10px] font-bold text-autodesk-blue uppercase tracking-widest">Construction AI team</p>
                </div>
              </div>
            </div>

            {/* Row 2: Achievement Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 flex gap-6 items-center border border-neutral-200 group hover:border-autodesk-blue transition-colors">
                <div className="w-14 h-14 bg-autodesk-blue/10 flex items-center justify-center shrink-0">
                  <BrainCircuit className="text-autodesk-blue" size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-tight text-autodesk-dark mb-1">01 / Designed the Multi-Agent LLM Framework</h4>
                  <p className="text-xs text-neutral-500 font-medium leading-relaxed">Architected a production-scale reasoning engine that enables complex multi-step construction queries.</p>
                </div>
              </div>
              <div className="bg-white p-8 flex gap-6 items-center border border-neutral-200 group hover:border-autodesk-blue transition-colors">
                <div className="w-14 h-14 bg-autodesk-blue/10 flex items-center justify-center shrink-0">
                  <Users className="text-autodesk-blue" size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-tight text-autodesk-dark mb-1">02 / Owned Customer Feedback Pipeline</h4>
                  <p className="text-xs text-neutral-500 font-medium leading-relaxed">Independently analyzed over 10 direct customer sessions to convert pain points into architectural precision.</p>
                </div>
              </div>
            </div>

            {/* Row 3: The 4 Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { val: '12.6K', label: 'Events' },
                { val: '3,340', label: 'Users' },
                { val: '2,663', label: 'Projects' },
                { val: '140%', label: 'Growth' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 border border-neutral-200 text-center shadow-sm">
                   <p className="text-3xl font-black text-autodesk-dark tracking-tighter">{item.val}</p>
                   <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Row 4: Success Indicator */}
            <div className="bg-autodesk-dark p-10 md:p-14 text-white relative overflow-hidden shadow-2xl w-full">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-autodesk-blue">Success Indicator</h4>
                <TrendingUp size={24} className="text-autodesk-blue" />
              </div>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3 block">Positive feedback conversion</span>
                    <span className="text-4xl font-black italic text-white leading-none">16.7% → 40.2%</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-autodesk-blue font-black uppercase tracking-[0.2em] block bg-autodesk-blue/10 px-4 py-2 border border-autodesk-blue/20">Achieved in 2 months</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-autodesk-blue w-[85%] animate-pulse" />
                </div>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed max-w-2xl">
                  User satisfaction increased significantly following Mo's system infrastructure optimizations and rigorous evaluation protocols for the Autodesk Assistant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Influence Section */}
      <section id="leadership" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            number="03" 
            title="Cross-Team Influence" 
            subtitle="As ACC's AI Go-To Person, Mo collaborates with more than 10 global teams across ACC and AEC."
          />

          {/* Ricky Leong Quote - Separator Line Removed */}
          <div className="mb-20">
             <div className="grid lg:grid-cols-3 gap-20">
                <div className="lg:col-span-2">
                   <p className="text-autodesk-blue font-black uppercase tracking-[0.3em] mb-10 text-xs">Peer Feedback Highlight</p>
                   <blockquote className="text-4xl lg:text-5xl font-black text-autodesk-dark leading-tight tracking-tight italic">
                     "Mo’s <strong>effort, responsiveness and depth of detail</strong> are far beyond what we expected, and this was very helpful to spark some <strong>brainstorming and ideas</strong> on the <strong>power processing team</strong>."
                   </blockquote>
                </div>
                <div className="flex flex-col justify-end pb-4">
                   <div className="space-y-2">
                      <p className="text-2xl font-black uppercase text-autodesk-dark">Ricky Leong</p>
                      <p className="text-autodesk-blue font-bold uppercase tracking-widest text-[10px]">Principal Software Engineer, Power Processing Team, Docs</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
             <div className="space-y-6 bg-neutral-50 p-8 border-b-4 border-autodesk-blue hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-autodesk-blue text-white flex items-center justify-center">
                   <Network size={24} />
                </div>
                <h4 className="text-xl font-black uppercase italic">ACC’s <strong>AI Go-To Person</strong></h4>
                <div className="text-neutral-600 font-medium text-sm space-y-4">
                  <p>Collaborate with <strong>10+ teams</strong> including <strong>Docs, Project Home, Power Processing, Cost, B4C, AECDM, AutoCAD ML, GET, GAIA and Autodesk Research</strong>.</p>
                  <p className="italic">"Define AI methodologies for their unique challenges and translate ambiguous ideas into actionable designs."</p>
                </div>
                <div className="flex items-center gap-2 text-autodesk-blue font-bold text-[10px] uppercase pt-4 tracking-widest">
                  <Zap size={14} /> Cross-Organization Impact
                </div>
             </div>
             
             <div className="space-y-6 bg-neutral-50 p-8 border-b-4 border-autodesk-dark hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-autodesk-dark text-white flex items-center justify-center">
                   <Award size={24} />
                </div>
                <h4 className="text-xl font-black uppercase italic"><strong>Primary AI Partner</strong></h4>
                <div className="text-neutral-600 font-medium text-sm space-y-4">
                  <p>Engage with platform leadership to ship AI strategies. Invited to the <strong>Docs offsite</strong> to define their roadmap and drafted the <strong>initial AI strategy document</strong> guiding their direction.</p>
                  <p>Synthesized recurring needs into <strong>shared patterns</strong> (e.g., MCP-based data model) to inform platform strategy through real product needs.</p>
                </div>
                <div className="flex items-center gap-2 text-autodesk-dark font-bold text-[10px] uppercase pt-4 tracking-widest">
                  <Target size={14} /> Strategic Platform Lead
                </div>
             </div>

             <div className="space-y-6 bg-neutral-50 p-8 border-b-4 border-neutral-300 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-neutral-200 text-autodesk-dark flex items-center justify-center">
                   <Users size={24} />
                </div>
                <h4 className="text-xl font-black uppercase italic">Education & Scaling</h4>
                <div className="text-neutral-600 font-medium text-sm space-y-4">
                  <p>Organized <strong>internal webinars</strong> with <strong>300+ attendees</strong> across the organization.</p>
                  <p>Authored <strong>strategic documentation</strong> viewed <strong>600+ times</strong> by contributors and stakeholders.</p>
                </div>
                <div className="flex items-center gap-2 text-neutral-500 font-bold text-[10px] uppercase pt-4 tracking-widest">
                  <Info size={14} /> Knowledge Diffusion
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer / Call to Action */}
      <footer className="bg-autodesk-dark text-white py-40 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tighter">
              INGENIOUS. <br />
              <span className="text-autodesk-blue">ONE AUTODESK.</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-10">
            <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed italic text-left border-l-4 border-autodesk-blue pl-8">
              "Across all of this work, I have consistently applied <strong>INGENIOUS</strong> thinking to challenge assumptions and introduce new AI methodologies that push ACC toward intelligence. At the same time, I have embodied <strong>ONE AUTODESK</strong> by partnering across different roles and teams to align strategies, consolidate insights, and accelerate progress."
            </p>
            
            <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed italic text-left border-l-4 border-white/10 pl-8">
              "Within my own team, I also serve as the <strong>AI go-to person</strong>, providing technical guidance, design reviews, and strategic input that my peers and Directors regularly rely on. My prototypes and analyses have repeatedly informed <strong>Director- and VP-level choices</strong>, shaping the direction of ACC’s next-generation AI capabilities."
            </p>

            <p className="text-xl md:text-2xl text-white font-black leading-relaxed italic text-center pt-8">
              "Looking ahead, I remain committed to these principles and to using my <strong>AI expertise</strong> to help build a truly <strong>intelligent and connected ACC</strong>, one that closes industry gaps and delivers deeper value to our customers."
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-10">
             <button 
                onClick={() => window.print()}
                className="bg-autodesk-blue text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-autodesk-dark transition-all outline-none"
             >
                Download Mo's Personal Statement
             </button>
          </div>

          <div className="pt-40 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 text-neutral-600 text-[10px] font-bold uppercase tracking-[0.2em]">
             <div className="flex items-center gap-3">
                <span className="text-autodesk-blue font-black tracking-tighter">ACC</span>
                <span>Autodesk Construction Cloud</span>
             </div>
             <p>© 2025 Internal Promotion Document. Professional Content Only.</p>
             <div className="flex gap-8">
                <span className="text-neutral-400">Mo Han, Ph.D Leadership Portfolio</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
