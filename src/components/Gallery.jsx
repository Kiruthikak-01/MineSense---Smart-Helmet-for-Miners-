import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = ({ items = [] }) => {
  const [selected, setSelected] = useState(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    if (selected) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selected]);

  // Gallery items with team photos and demo video
  const defaultItems = [
    {
      id: 1,
      src: "/images/demo_team_1.jpg",
      title: "Team Showcase",
      desc: "The MineSense team at CIT Coimbatore",
      tag: "TEAM",
      span: "lg:col-span-2 lg:row-span-2",
    },
    {
      id: 2,
      src: "/images/demo_presentation.jpg",
      title: "Live Demonstration",
      desc: "MineSense device demo at Perpetual Fest 2025",
      tag: "EVENT",
      span: "",
    },
    {
      id: 3,
      src: "/images/team_with_device.jpg",
      title: "Helmet Testing",
      desc: "Team testing the smart safety helmet",
      tag: "BUILD",
      span: "",
    },
    {
      id: 4,
      src: "/images/team_with_device.jpg",
      title: "Project Demo Video",
      desc: "Watch our complete MineSense demonstration",
      tag: "VIDEO",
      isVideo: true,
      videoSrc: "/images/minesense_demo.mp4",
      span: "lg:col-span-2",
    },
  ];

  const galleryItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="w-full">
      {/* Masonry-style grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-64">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className={`relative overflow-hidden rounded-sm cursor-pointer group ${item.span || ""}`}
            style={{
              minHeight: "240px",
              border: "2px solid var(--amber-glow)",
            }}
            onClick={() => setSelected(item)}
            whileHover={{
              borderColor: "var(--amber-glow)",
              boxShadow: "0 0 20px rgba(251,191,36,0.5)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            {item.src ? (
              <motion.img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
                style={{ minHeight: "240px" }}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "#1a1a1a", minHeight: "240px" }}
              >
                <div className="text-center">
                  <div className="text-5xl mb-3">📸</div>
                  <p
                    style={{
                      fontFamily: "Share Tech Mono",
                      fontSize: "11px",
                      color: "var(--amber)",
                    }}
                  >
                    ADD PHOTO HERE
                  </p>
                </div>
              </div>
            )}

            {/* Corner tag */}
            <div
              className="absolute top-3 left-3 px-2 py-1"
              style={{
                background: "rgba(0,0,0,0.8)",
                border: "1px solid var(--border-amber)",
              }}
            >
              <span
                style={{
                  fontFamily: "Share Tech Mono",
                  fontSize: "9px",
                  color: "var(--amber)",
                  letterSpacing: "0.15em",
                }}
              >
                {item.tag}
              </span>
            </div>

            {/* Video play button */}
            {item.isVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(245,158,11,0.9)" }}
                  whileHover={{ scale: 1.15 }}
                >
                  <span className="text-black text-2xl">▶</span>
                </motion.div>
              </div>
            )}

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)",
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3
                style={{
                  fontFamily: "Barlow Condensed",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "var(--text-primary)",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "Share Tech Mono",
                  fontSize: "10px",
                  color: "var(--amber)",
                  letterSpacing: "0.1em",
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{ background: "rgba(0,0,0,0.95)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ border: "1px solid var(--border-amber)" }}
            >
              {selected.isVideo ? (
                <video
                  src={selected.videoSrc || selected.src}
                  controls
                  autoPlay
                  className="w-full h-auto"
                  style={{ background: "#000" }}
                />
              ) : (
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="w-full h-auto"
                />
              )}
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: "rgba(0,0,0,0.8)" }}
              >
                <h3
                  style={{
                    fontFamily: "Bebas Neue",
                    fontSize: "24px",
                    color: "var(--amber)",
                  }}
                >
                  {selected.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Share Tech Mono",
                    fontSize: "11px",
                    color: "var(--text-dim)",
                  }}
                >
                  {selected.desc}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white text-2xl z-50 hover:scale-110 transition-transform"
                style={{
                  background: "rgba(239,68,68,0.9)",
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                title="Close (ESC)"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
