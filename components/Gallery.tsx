import React, { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import ImageIcon from "@/components/icons/ImageIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import ExpandIcon from "@/components/icons/ExpandIcon";

interface GalleryItem {
  id: number;
  src: string;
  category: string;
  caption?: string;
}

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const images: GalleryItem[] = [
    { id: 0, category: "Leadership", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763740110/principal_gv9xzb.jpg", caption: "Our Principal at work" },
    { id: 1, category: "Students", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218894/students-001_vnszuv.jpg", caption: "Morning assembly" },
    { id: 2, category: "Faculty", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218893/teacher-board-001_tyjqah.jpg", caption: "Interactive classroom session" },
    { id: 3, category: "Classroom", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218896/children-room-001_agh6as.jpg", caption: "Early childhood development" },
    { id: 4, category: "Classroom", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218894/children-room-002_slosto.jpg", caption: "Learning through play" },
    { id: 5, category: "Campus", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218896/building-001_jjvltm.jpg", caption: "School Building" },
    { id: 6, category: "Campus", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218895/building-002_exmf3u.jpg", caption: "Playground area" },
    { id: 7, category: "Events", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218897/france-001_b0cfkk.jpg", caption: "Cultural exchange program" },
    // New images
    { id: 8, category: "School Life", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763733510/t3d8xGQ5_e9nmqz.jpg", caption: "Student Activities" },
    { id: 9, category: "Events", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763733511/nDqSBd3h_kty0dk.jpg", caption: "Community Gathering" },
    { id: 10, category: "Students", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763733509/H6ml3I_s_ortukr.jpg", caption: "Classroom Moments" },
    { id: 11, category: "Events", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763733509/QefKsjij_yoq4yx.jpg", caption: "School Celebration" },
    { id: 12, category: "Students", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763733509/SOiTxqoB_fgwxy0.jpg", caption: "Learning Together" },
    { id: 13, category: "Creativity", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763733509/pkbJwCe8_cod6e7.jpg", caption: "Arts and Crafts" },
    { id: 14, category: "Academics", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763733509/kLzsOnmf_faxbvy.jpg", caption: "Focused Learning" },
    { id: 15, category: "Sports", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763733509/OaVHG0LS_bpedp2.jpg", caption: "Physical Education" },
    { id: 16, category: "School Life", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763733508/AyJ2WKys_eb5cxg.jpg", caption: "Happy Students" },
    { id: 17, category: "Community", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763733508/Io4TGDR4_elh1bl.jpg", caption: "Parent Interaction" },
    { id: 18, category: "Campus", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763733508/nHMDJfTx_xt6ndb.jpg", caption: "School Premises" },
    { id: 19, category: "Education", src: "https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1763733508/5BzgLBS-_efyogc.jpg", caption: "Bright Futures" },
  ];

  const selectedImage = images.find((img) => img.id === selectedId);

  const handleNext = useCallback(() => {
    if (selectedId === null) return;
    setSelectedId((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  }, [selectedId, images.length]);

  const handlePrev = useCallback(() => {
    if (selectedId === null) return;
    setSelectedId((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));
  }, [selectedId, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedId === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedId(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, handleNext, handlePrev]);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedId]);

  return (
    <section id="gallery" className="py-24 px-6 bg-brand-cream dark:bg-brand-charcoal relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl"></div>
         <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-navy/5 dark:bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
           <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             className="inline-flex items-center justify-center p-3 rounded-full bg-white dark:bg-white/10 shadow-md mb-4 text-brand-gold"
            >
                <ImageIcon className="w-6 h-6" />
           </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy dark:text-brand-gold mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-lg text-text-medium dark:text-gray-300 max-w-2xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedId(image.id)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block p-3 bg-white/20 backdrop-blur-md rounded-full text-white mb-3">
                        <ExpandIcon className="w-6 h-6" />
                    </span>
                    <p className="text-white font-bold text-lg font-serif">{image.category}</p>
                    {image.caption && <p className="text-gray-200 text-sm mt-1">{image.caption}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId !== null && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
          >
            {/*Qb Close Button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 focus:outline-none"
            >
              <CloseIcon className="w-8 h-8" />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center">
               <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedId}
                    src={selectedImage.src}
                    alt={selectedImage.caption}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
               </AnimatePresence>
               
               {/* Caption Overlay */}
               <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-center">
                  <p className="text-xl font-serif font-bold">{selectedImage.category}</p>
                  <p className="text-gray-300">{selectedImage.caption}</p>
               </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md transition-all hover:scale-110 focus:outline-none"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md transition-all hover:scale-110 focus:outline-none"
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>
            
            {/* Thumbnail Strip (Optional visual indicator) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex gap-2">
                {images.map((img, idx) => (
                    <button 
                        key={img.id}
                        onClick={() => setSelectedId(img.id)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === selectedId ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/60'}`}
                    />
                ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;