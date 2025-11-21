
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, Variants } from "framer-motion";
import UsersIcon from "@/components/icons/UsersIcon";
import BriefcaseIcon from "@/components/icons/BriefcaseIcon";
import QuoteIcon from "@/components/icons/QuoteIcon";

interface FacultyMember {
  name: string;
  role: string;
  imageUrl: string;
  quote?: string;
  subjects?: string[];
  contactUrl?: string;
}

const LeadershipCard: React.FC<FacultyMember> = ({ name, role, imageUrl, quote, contactUrl }) => (
  <div className="group relative bg-white dark:bg-brand-charcoal-light rounded-[2.5rem] p-6 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/5 overflow-hidden h-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
    {/* Decorative Background Pattern */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-navy/5 dark:bg-brand-gold/5 rounded-full blur-2xl -ml-12 -mb-12 transition-transform duration-700 group-hover:scale-110"></div>
    
    {/* Image Container */}
    <div className="relative shrink-0 w-48 h-48 md:w-64 md:h-64 group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-brand-gold rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
        <div className="absolute inset-0 bg-brand-navy dark:bg-white rounded-[2rem] -rotate-3 opacity-10 group-hover:-rotate-6 transition-transform duration-500"></div>
        <img
            src={imageUrl}
            alt={name}
            className="relative w-full h-full object-cover rounded-[2rem] shadow-lg z-10 aspect-square"
        />
    </div>

    {/* Content */}
    <div className="relative z-10 flex-1 text-center md:text-left w-full">
        <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy/5 dark:bg-white/10 text-brand-navy dark:text-brand-gold text-xs font-bold uppercase tracking-widest mb-3 border border-brand-navy/10 dark:border-white/10">
                {role}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold font-serif text-brand-navy dark:text-white leading-tight">
                {name}
            </h3>
        </div>
        
        {quote && (
            <div className="relative mb-6">
                <QuoteIcon className="absolute -top-4 -left-2 w-8 h-8 text-brand-gold/30 transform -scale-x-100 hidden md:block" />
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed md:pl-8 border-l-0 md:border-l-2 border-brand-gold/30 text-lg">
                    "{quote}"
                </p>
            </div>
        )}

        {contactUrl && (
            <div className="mt-6 flex justify-center md:justify-start">
                 <a 
                    href={contactUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                 >
                    <span>Contact for Websites</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                 </a>
            </div>
        )}
        
        {/* Signature Decoration */}
        {!contactUrl && (
             <div className="mt-6 opacity-40 font-serif italic text-2xl text-brand-gold text-center md:text-right pr-4 select-none">
                {name.split(' ')[0]}
            </div>
        )}
    </div>
  </div>
);

const TeacherCard: React.FC<FacultyMember> = ({ name, role, imageUrl, subjects }) => (
  <div className="group relative bg-white dark:bg-brand-charcoal-light rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-white/5 h-full flex flex-col">
    {/* Image Area */}
    <div className="aspect-square relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
        <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
        />
        {/* Overlay Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
        
        <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <div className="w-10 h-10 bg-white text-brand-navy rounded-full flex items-center justify-center shadow-lg">
                 <UsersIcon className="w-5 h-5" />
            </div>
        </div>
    </div>
    
    {/* Text Content */}
    <div className="p-6 pt-8 text-center relative bg-white dark:bg-brand-charcoal-light flex-grow flex flex-col items-center">
        {/* Floating Role Badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-wider rounded-full shadow-md border border-white dark:border-brand-charcoal">
            {role}
        </div>
        
        <h3 className="text-xl font-bold font-serif text-brand-navy dark:text-white group-hover:text-brand-gold transition-colors mb-2">
            {name}
        </h3>
        
        {/* Decorative Line */}
        <div className="w-12 h-0.5 bg-gray-200 dark:bg-white/10 mx-auto my-3 group-hover:w-24 group-hover:bg-brand-gold/50 transition-all duration-300"></div>
        
        {subjects && subjects.length > 0 && (
             <p className="text-sm text-gray-500 dark:text-gray-400">{subjects.join(", ")}</p>
        )}
         <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-medium mt-auto pt-2">
            Gadgade School
         </p>
    </div>
  </div>
);

const Faculty: React.FC = () => {
  const { t } = useLanguage();

  const leadership: FacultyMember[] = [
    {
      name: "Mr. Purna Tamang",
      role: t("faculty.principal"),
      imageUrl: "https://res.cloudinary.com/dph6mqggr/image/upload/v1763740110/principal_gv9xzb.jpg",
      quote: "Our school stands as a community pillar where every child is valued."
    },
    {
      name: "Mr. Govinda Dhungana",
      role: t("faculty.management"),
      imageUrl: "https://res.cloudinary.com/dph6mqggr/image/upload/v1763735153/PXL_20251113_151334567_dorygm.jpg",
      quote: "Ensuring a sustainable and supportive environment for our students and staff is our top priority."
    },
    {
      name: "Mr. Nirvik Dhungana",
      role: t("faculty.itDepartment"),
      imageUrl: "https://res.cloudinary.com/dxt7szquk/image/upload/f_auto,q_auto,w_800/v1762424795/pfp_yggogi.png",
      quote: "Integrating technology to empower the next generation of learners.",
      contactUrl: "https://nirvikdhungana.com.np"
    }
  ];

  const teachers: FacultyMember[] = [
    { name: "Mr. Shreeram Lamichhane", role: t("faculty.teacher"), imageUrl: "https://ui-avatars.com/api/?name=Shreeram+Lamichhane&background=0A2540&color=fff&size=256" },
    { name: "Ms. Kamala Magar", role: t("faculty.teacher"), imageUrl: "https://ui-avatars.com/api/?name=Kamala+Magar&background=0A2540&color=fff&size=256" },
    { name: "Ms. Yasodha Subedi", role: t("faculty.teacher"), imageUrl: "https://ui-avatars.com/api/?name=Yasodha+Subedi&background=0A2540&color=fff&size=256" },
    { name: "Mr. Rajan Shrestha", role: t("faculty.teacher"), imageUrl: "https://ui-avatars.com/api/?name=Rajan+Shrestha&background=0A2540&color=fff&size=256" },
    { name: "Ms. Devaki Chaulagain", role: t("faculty.teacher"), imageUrl: "https://ui-avatars.com/api/?name=Devaki+Chaulagain&background=0A2540&color=fff&size=256" },
    { name: "Ms. Moti Tamang", role: t("faculty.teacher"), imageUrl: "https://ui-avatars.com/api/?name=Moti+Tamang&background=0A2540&color=fff&size=256" },
    { name: "Ms. Susmita Tamang", role: t("faculty.teacher"), imageUrl: "https://ui-avatars.com/api/?name=Susmita+Tamang&background=0A2540&color=fff&size=256" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-charcoal">
        
        {/* Hero Section */}
        <section className="relative py-32 lg:py-40 px-6 overflow-hidden bg-brand-navy text-white">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/school.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-light/50 to-brand-navy"></div>
                
                {/* Animated Blobs */}
                <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"
                />
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"
                />
            </div>

            <div className="container mx-auto max-w-5xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex p-5 rounded-full bg-white/5 backdrop-blur-lg mb-8 border border-white/10 shadow-xl"
                >
                    <UsersIcon className="w-10 h-10 text-brand-gold" />
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight tracking-tight"
                >
                    {t("faculty.heroTitle")}
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
                >
                    {t("faculty.heroSubtitle")}
                </motion.p>
            </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 px-6 relative">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Administration</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy dark:text-white relative inline-block">
                        {t("faculty.leadershipTitle")}
                    </h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {leadership.map((leader, idx) => (
                         <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            className={idx === 2 ? "lg:col-span-2 lg:w-3/4 lg:mx-auto" : ""}
                         >
                            <LeadershipCard {...leader} />
                         </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Teaching Staff Grid */}
        <section className="py-24 px-6 bg-white dark:bg-brand-charcoal-light/20 relative">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                 <div className="text-center mb-20">
                    <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Academic Team</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy dark:text-white">
                        {t("faculty.teamTitle")}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-6 max-w-2xl mx-auto text-lg font-light">
                        Our educators are lifelong learners who are committed to the academic and personal growth of every student.
                    </p>
                </div>
                
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {teachers.map((teacher, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                            <TeacherCard {...teacher} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-24 px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-brand-navy rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    {/* Background shapes */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 bg-brand-gold/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-8 shadow-lg transform rotate-6 border border-white/10">
                            <BriefcaseIcon className="w-10 h-10 text-brand-gold" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">{t("faculty.joinUs.title")}</h2>
                        <p className="text-gray-300 text-xl mb-10 max-w-2xl leading-relaxed font-light">
                            {t("faculty.joinUs.text")}
                        </p>
                        <motion.button 
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-brand-navy font-bold py-4 px-10 rounded-full shadow-xl transition-all text-lg flex items-center gap-2"
                        >
                            {t("faculty.joinUs.button")}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    </div>
  );
};

export default Faculty;
