import React from "react";
import { motion } from "framer-motion";

const Spark = ({ style }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full"
    style={{ background: "var(--amber)", ...style }}
    animate={{
      y: [0, -60 - Math.random() * 40],
      x: [0, (Math.random() - 0.5) * 60],
      opacity: [1, 0],
      scale: [1, 0],
    }}
    transition={{
      duration: 0.6 + Math.random() * 0.5,
      repeat: Infinity,
      delay: Math.random() * 2,
      ease: "easeOut",
    }}
  />
);

const Hero = () => {
  const sparks = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20"
      style={{
        background:
          "linear-gradient(180deg, var(--coal) 0%, #111108 50%, var(--coal) 100%)",
      }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/demo_team_1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }}
      />

      {/* Diagonal industrial grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Large background text - "SAFETY FIRST" watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          style={{
            fontFamily: "Bebas Neue",
            fontSize: "clamp(80px, 20vw, 220px)",
            color: "rgba(245,158,11,0.03)",
            letterSpacing: "0.05em",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          MINE SENSE
        </div>
      </div>

      {/* Animated ambient glows */}
      <motion.div
        className="absolute"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
          top: "-100px",
          left: "-100px",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)",
          bottom: "-100px",
          right: "-100px",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      {/* Sparks cluster at bottom center */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        {sparks.map((i) => (
          <Spark key={i} style={{ left: `${(i - 10) * 8}px` }} />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-5xl w-full relative z-10 text-center">
        {/* Top badge */}
        <motion.div
          className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-sm"
          style={{
            border: "1px solid var(--border-amber)",
            background: "rgba(245,158,11,0.08)",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute h-full w-full rounded-full opacity-75"
              style={{ background: "var(--amber)" }}
            />
            <span
              className="relative h-2 w-2 rounded-full"
              style={{ background: "var(--amber)" }}
            />
          </span>
          <span
            style={{
              fontFamily: "Share Tech Mono",
              fontSize: "12px",
              color: "var(--amber)",
              letterSpacing: "0.15em",
            }}
          >
            IOT · SMART HELMET · MINER SAFETY
          </span>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "clamp(80px, 18vw, 200px)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "var(--text-primary)",
              textShadow: "0 0 40px rgba(245,158,11,0.3)",
            }}
          >
            MINE
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--amber) 0%, var(--molten) 50%, var(--amber) 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 3s linear infinite",
              }}
            >
              SENSE
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl mb-4 mt-4"
          style={{
            fontFamily: "Barlow Condensed",
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "var(--text-secondary)",
            textTransform: "uppercase",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Smart IoT Helmet for Real-Time Miner Safety & Monitoring
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--text-dim)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          An IoT-based smart safety helmet that monitors environmental
          conditions and miner health in real-time — providing instant alerts to
          prevent accidents before they become tragedies.
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex justify-center gap-0 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {[
            { value: "8+", label: "SENSORS", sub: "Integrated" },
            { value: "5", label: "LAYERS", sub: "Architecture" },
            { value: "3RD", label: "PLACE", sub: "Perpetual Fest 2025" },
            { value: "₹3K", label: "COST", sub: "Ultra Low Budget" },
          ].map((stat, i) => (
            <React.Fragment key={i}>
              <motion.div
                className="px-8 py-4 text-center"
                whileHover={{ y: -5 }}
              >
                <div
                  style={{
                    fontFamily: "Bebas Neue",
                    fontSize: "48px",
                    lineHeight: 1,
                    color: "var(--amber)",
                    textShadow: "var(--glow-amber)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "Barlow Condensed",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "var(--text-secondary)",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: "Share Tech Mono",
                    fontSize: "10px",
                    color: "var(--text-dim)",
                  }}
                >
                  {stat.sub}
                </div>
              </motion.div>
              {i < 3 && (
                <div
                  style={{
                    width: "1px",
                    background:
                      "linear-gradient(to bottom, transparent, var(--border-amber), transparent)",
                    margin: "8px 0",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#challenge"
            className="px-8 py-4 font-bold uppercase tracking-widest text-black"
            style={{
              fontFamily: "Barlow Condensed",
              background:
                "linear-gradient(135deg, var(--amber), var(--molten))",
              borderRadius: "4px",
              fontSize: "14px",
              boxShadow: "var(--glow-amber)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(245,158,11,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            ⛏ Explore Project
          </motion.a>
          <motion.a
            href="#gallery"
            className="px-8 py-4 font-bold uppercase tracking-widest"
            style={{
              fontFamily: "Barlow Condensed",
              border: "1px solid var(--border-amber)",
              color: "var(--amber)",
              borderRadius: "4px",
              fontSize: "14px",
              background: "transparent",
            }}
            whileHover={{ background: "rgba(245,158,11,0.1)", scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            📸 View Gallery
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          style={{
            fontFamily: "Share Tech Mono",
            fontSize: "10px",
            color: "var(--amber)",
            letterSpacing: "0.2em",
          }}
        >
          SCROLL
        </div>
        <div
          style={{
            width: "1px",
            height: "30px",
            background: "linear-gradient(to bottom, var(--amber), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
