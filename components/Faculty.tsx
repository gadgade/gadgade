import React from "react";
import { useLanguage } from "./LanguageProvider";
// FIX: Import Variants type from framer-motion
import { motion, Variants } from "framer-motion";
import UsersIcon from "./icons/UsersIcon";

interface FacultyMember {
  name: string;
  role: string;
  imageUrl: string;
}

const FacultyCard: React.FC<FacultyMember> = ({ name, role, imageUrl }) => (
  <div className="text-center group">
    <div className="relative overflow-hidden rounded-2xl shadow-lg">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity"></div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-xl font-bold font-serif text-white">{name}</h3>
        <p className="text-brand-gold font-semibold">{role}</p>
      </div>
    </div>
  </div>
);

const Faculty: React.FC = () => {
  const { t } = useLanguage();

  const facultyData: FacultyMember[] = [
    {
      name: "Mr. Purna Tamang",
      role: t("faculty.principal"),
      imageUrl: "",
    },
    {
      name: "Mr. Govinda Dhungana",
      role: t("faculty.vicePrincipal"),
      imageUrl: "",
    },
  ];

  // FIX: Explicitly type variants with Variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // FIX: Explicitly type variants with Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // FIX: Explicitly type variants with Variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="faculty"
      className="py-24 px-8 bg-white dark:bg-brand-charcoal-light overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy dark:text-brand-gold mb-4 flex items-center justify-center gap-4">
            <UsersIcon className="w-12 h-12 text-brand-gold flex-shrink-0" />
            <span>{t("faculty.title")}</span>
          </h2>
          <p className="text-lg text-text-medium dark:text-gray-300 max-w-3xl mx-auto">
            {t("faculty.subtitle")}
          </p>
        </div>
        <motion.div
          className="bg-brand-cream dark:bg-brand-charcoal p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 dark:border-white/10"
          variants={containerVariants}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyData.map((member) => (
              <motion.div key={member.name} variants={itemVariants}>
                <FacultyCard {...member} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Faculty;
