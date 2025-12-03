import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, Variants } from "framer-motion";
import TargetIcon from "@/components/icons/TargetIcon";
import EyeIcon from "@/components/icons/EyeIcon";
import UsersIcon from "@/components/icons/UsersIcon";
import HandshakeIcon from "@/components/icons/HandshakeIcon";
import GraduationCapIcon from "@/components/icons/GraduationCapIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import QuoteIcon from "@/components/icons/QuoteIcon";
import ComputerIcon from "@/components/icons/ComputerIcon";
import LeafIcon from "@/components/icons/LeafIcon";
import BookOpenIcon from "@/components/icons/BookOpenIcon";

const About: React.FC = () => {
  const { t } = useLanguage();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stats = [
    { label: t("about.stats.years"), value: "30+", icon: <CalendarIcon className="w-6 h-6" /> },
    { label: t("about.stats.students"), value: "350+", icon: <UsersIcon className="w-6 h-6" /> },
    { label: t("about.stats.graduates"), value: "2000+", icon: <GraduationCapIcon className="w-6 h-6" /> },
    { label: t("about.stats.faculty"), value: "15+", icon: <HandshakeIcon className="w-6 h-6" /> },
  ];

  const values = [
    { title: t("about.values.v1"), desc: "Striving for the highest standards in all we do.", color: "bg-blue-500" },
    { title: t("about.values.v2"), desc: "Creating a welcoming environment for every child.", color: "bg-green-500" },
    { title: t("about.values.v3"), desc: "Building trust through honesty and transparency.", color: "bg-purple-500" },
    { title: t("about.values.v4"), desc: "Serving and strengthening our local society.", color: "bg-orange-500" },
  ];

  const timelineEvents = [
    { year: "1993", title: t("about.timeline.t1Title"), desc: t("about.timeline.t1Desc") },
    { year: "2008", title: t("about.timeline.t2Title"), desc: t("about.timeline.t2Desc") },
    { year: "2015", title: t("about.timeline.t3Title"), desc: t("about.timeline.t3Desc") },
    { year: "2023", title: t("about.timeline.t4Title"), desc: t("about.timeline.t4Desc") },
  ];

  const features = [
    { title: t("about.features.f1Title"), desc: t("about.features.f1Desc"), icon: <BookOpenIcon className="w-8 h-8" />, color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    { title: t("about.features.f2Title"), desc: t("about.features.f2Desc"), icon: <HandshakeIcon className="w-8 h-8" />, color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
    { title: t("about.features.f3Title"), desc: t("about.features.f3Desc"), icon: <GraduationCapIcon className="w-8 h-8" />, color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
    { title: t("about.features.f4Title"), desc: t("about.features.f4Desc"), icon: <LeafIcon className="w-8 h-8" />, color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" },
  ];

  const facilities = [
    { title: t("about.facilities.computerLab"), img: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218893/teacher-board-001_tyjqah.jpg", icon: <ComputerIcon className="w-6 h-6" /> },
    { title: t("about.facilities.library"), img: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218896/children-room-001_agh6as.jpg", icon: <BookOpenIcon className="w-6 h-6" /> },
    { title: t("about.facilities.playground"), img: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218895/building-002_exmf3u.jpg", icon: <LeafIcon className="w-6 h-6" /> },
    { title: t("about.facilities.classrooms"), img: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218894/children-room-002_slosto.jpg", icon: <UsersIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="bg-white dark:bg-brand-charcoal min-h-screen font-sans">
      
      {/* 1. Professional Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
            <img 
                src="https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218895/building-002_exmf3u.jpg" 
                alt="Gadgade School Building" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-3 py-1.5 px-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    <span>Est. 1993 AD / 2050 BS</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 tracking-tight">
                    {t("about.title")}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed text-center">
                    {t("about.subtitle")}
                </p>
            </motion.div>
        </div>
      </section>

      {/* 2. Floating Stats Bar */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white dark:bg-brand-charcoal-light rounded-2xl shadow-xl border-b-4 border-brand-gold p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 dark:divide-white/5"
         >
            {stats.map((stat, idx) => (
                <div key={idx} className={`text-center ${idx % 2 !== 0 ? 'pl-4' : ''} ${idx > 1 ? 'mt-4 md:mt-0' : ''}`}>
                    <div className="text-brand-navy dark:text-white font-serif font-bold text-4xl md:text-5xl mb-2">{stat.value}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                        <span className="hidden md:inline text-brand-gold">{stat.icon}</span>
                        {stat.label}
                    </div>
                </div>
            ))}
         </motion.div>
      </div>

      {/* 3. Narrative & Timeline Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16">
                {/* Left: Narrative Card */}
                <motion.div 
                    className="lg:col-span-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="bg-white dark:bg-brand-charcoal-light p-8 md:p-12 rounded-[2.5rem] shadow-lg border border-gray-100 dark:border-white/5 h-full">
                        <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-3">Who We Are</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy dark:text-white leading-tight mb-6">
                            A Tradition of Educational Excellence in Nagarkot
                        </h3>
                        <div className="w-20 h-1 bg-brand-navy dark:bg-white/20 rounded-full mb-8"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                            {t("about.p1")}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                            {t("about.historyText")}
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-6 mt-8">
                           {/* Compact Features preview */}
                           <div className="p-4 bg-brand-cream dark:bg-white/5 rounded-xl border border-brand-navy/5">
                              <h4 className="font-bold text-brand-navy dark:text-white mb-2">Community Focused</h4>
                              <p className="text-sm text-gray-500 text-justify">Rooted in local values, serving local families with dedication and pride.</p>
                           </div>
                           <div className="p-4 bg-brand-cream dark:bg-white/5 rounded-xl border border-brand-navy/5">
                              <h4 className="font-bold text-brand-navy dark:text-white mb-2">Student Centric</h4>
                              <p className="text-sm text-gray-500 text-justify">Every decision we make is prioritized for the benefit and growth of our students.</p>
                           </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Timeline Card */}
                <motion.div 
                    className="lg:col-span-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <div className="bg-brand-navy dark:bg-brand-charcoal-light p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden text-white shadow-2xl h-full flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        
                        <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3 justify-center md:justify-start">
                            <CalendarIcon className="w-6 h-6 text-brand-gold" />
                            {t("about.timeline.title")}
                        </h3>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:ml-2.5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-gold before:via-brand-gold/20 before:to-transparent">
                            {timelineEvents.map((event, idx) => (
                                <div key={idx} className="relative flex items-start gap-6 group">
                                    <div className="absolute left-0 mt-1.5 h-5 w-5 rounded-full border-4 border-brand-navy bg-brand-gold shadow-md group-hover:scale-125 transition-transform z-10"></div>
                                    <div className="pl-6">
                                        <span className="text-brand-gold font-bold text-sm tracking-widest">{event.year}</span>
                                        <h4 className="text-xl font-bold mt-1 mb-2">{event.title}</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed text-justify">{event.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Features) */}
      <section className="py-20 px-6 bg-brand-cream dark:bg-brand-charcoal-light/30">
          <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy dark:text-white mb-4">{t("about.features.title")}</h2>
                  <p className="text-gray-500 max-w-2xl mx-auto">We provide more than just education; we provide a foundation for life.</p>
              </div>

              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                  {features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        variants={fadeInUp}
                        className="bg-white dark:bg-brand-charcoal-light p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
                      >
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                              {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-3">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-justify">{feature.desc}</p>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>

      {/* 5. Strategic Foundations (Mission & Vision) */}
      <section className="py-24 px-6 bg-white dark:bg-brand-charcoal relative overflow-hidden">
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

         <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy dark:text-white">Our Foundation</h2>
                <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-brand-cream dark:bg-white/5 p-10 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-lg rounded-br-lg shadow-xl border border-gray-100 dark:border-white/5 group hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
                >
                    <div className="w-16 h-16 bg-brand-navy/10 dark:bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                        <TargetIcon className="w-8 h-8 text-brand-navy dark:text-brand-gold group-hover:text-brand-gold transition-colors" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-brand-navy dark:text-white mb-4">{t("about.missionTitle")}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg text-justify">
                        {t("about.missionText")}
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-brand-navy text-white p-10 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-lg rounded-bl-lg shadow-xl relative overflow-hidden group flex flex-col items-center text-center"
                >
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                        <EyeIcon className="w-40 h-40" />
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                            <EyeIcon className="w-8 h-8 text-brand-gold" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4">{t("about.visionTitle")}</h3>
                        <p className="text-gray-300 leading-relaxed text-lg text-justify">
                            {t("about.visionText")}
                        </p>
                    </div>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 6. Facilities Overview */}
      <section className="py-24 px-6 bg-brand-cream dark:bg-brand-charcoal-light/30">
          <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy dark:text-white">{t("about.facilities.title")}</h2>
                  <p className="text-gray-500 mt-2">{t("about.facilities.subtitle")}</p>
                  <div className="h-1 w-24 bg-brand-gold rounded-full mx-auto mt-4"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {facilities.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg"
                      >
                          <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent"></div>
                          <div className="absolute bottom-0 left-0 w-full p-6 text-white text-center">
                              <div className="mb-3 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-brand-gold mx-auto">
                                  {item.icon}
                              </div>
                              <h4 className="font-bold text-lg">{item.title}</h4>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* 7. Core Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-brand-navy dark:text-white mb-4">{t("about.values.title")}</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">The guiding principles that shape our students' character and our school's culture.</p>
            </div>
            
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {values.map((v, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 dark:bg-brand-charcoal-light border border-gray-100 dark:border-white/5 hover:border-brand-gold/30 transition-all shadow-md hover:shadow-xl hover:-translate-y-1">
                        <div className={`w-12 h-2 rounded-full ${v.color} mb-6`}></div>
                        <h4 className="font-bold text-xl text-brand-navy dark:text-white mb-3">{v.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* 8. Leadership Message */}
      <section className="py-24 px-6 bg-white dark:bg-brand-charcoal-light border-t border-gray-100 dark:border-white/5">
        <div className="container mx-auto max-w-5xl">
            <div className="bg-brand-cream dark:bg-white/5 rounded-[3rem] p-8 md:p-16 shadow-2xl relative">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3 flex-shrink-0 relative">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10">
                            <img 
                                src="https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763740110/principal_gv9xzb.jpg" 
                                alt="Principal" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="mt-6 text-center">
                            <h4 className="font-bold font-serif text-xl text-brand-navy dark:text-white">Mr. Purna Tamang</h4>
                            <p className="text-brand-gold text-sm font-bold uppercase tracking-widest">Principal</p>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 relative">
                        <QuoteIcon className="w-20 h-20 text-brand-gold/10 absolute -top-10 -left-6 -z-0" />
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl font-serif font-bold text-brand-navy dark:text-white mb-8 border-b border-brand-gold/30 pb-4 inline-block">
                                {t("about.principalMessageTitle")}
                            </h2>
                            
                            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 leading-loose text-justify">
                                <p className="italic mb-4">
                                    "{t("about.principalMessageBody")}"
                                </p>
                                <p className="text-base">
                                    We are committed to fostering an inclusive environment where every child discovers their potential. Our focus goes beyond textbooks; we aim to build character, resilience, and a lifelong love for learning.
                                </p>
                            </div>

                            <div className="mt-12 flex items-center justify-end gap-4">
                                <div className="h-px bg-gray-300 w-16"></div>
                                <span className="font-serif text-3xl text-brand-navy dark:text-brand-gold italic">Purna T.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default About;