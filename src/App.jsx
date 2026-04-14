import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import AnimatedSection from "./components/AnimatedSection";
import ArchitectureSection from "./components/ArchitectureSection";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "challenge", label: "Challenge" },
    { id: "innovation", label: "Innovation" },
    { id: "architecture", label: "Architecture" },
    { id: "how-it-works", label: "How It Works" },
    { id: "results", label: "Results" },
    { id: "gallery", label: "Gallery" },
    { id: "connect", label: "Connect" },
  ];

  // Scroll tracking for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div
      style={{
        background: "var(--coal)",
        color: "var(--text-primary)",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(245,158,11,0.2)",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* MineSense Logo Image */}
            <motion.img
              src="/images/minesense_logo.png"
              alt="MineSense Logo"
              className="h-14 rounded-sm"
              style={{ border: "2px solid var(--amber)", objectFit: "contain" }}
              whileHover={{ scale: 1.08 }}
            />
            <div>
              <span
                className="text-2xl font-bold tracking-wider"
                style={{
                  fontFamily: "Bebas Neue",
                  letterSpacing: "0.1em",
                  color: "var(--text-primary)",
                }}
              >
                MINE<span style={{ color: "var(--amber)" }}>SENSE</span>
              </span>
              <div
                style={{
                  fontFamily: "Share Tech Mono",
                  fontSize: "8px",
                  color: "var(--teal)",
                  letterSpacing: "0.2em",
                }}
              >
                IOT SAFETY SYSTEM v2.0
              </div>
            </div>
          </div>

          {/* Live indicator */}
          <div
            className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full"
            style={{
              border: "1px solid rgba(34,197,94,0.4)",
              background: "rgba(34,197,94,0.1)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span
              style={{
                fontFamily: "Share Tech Mono",
                fontSize: "11px",
                color: "#22c55e",
              }}
            >
              SYSTEM ACTIVE
            </span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex gap-1">
            {sections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all"
                style={{
                  fontFamily: "Barlow Condensed",
                  color:
                    activeSection === section.id
                      ? "var(--amber)"
                      : "var(--text-secondary)",
                  borderBottom:
                    activeSection === section.id
                      ? "2px solid var(--amber)"
                      : "2px solid transparent",
                }}
                whileHover={{ color: "var(--amber-glow)" }}
              >
                {section.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-lg"
            style={{ color: "var(--amber)" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
          >
            ☰
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            style={{
              background: "var(--forge)",
              borderTop: "1px solid var(--border-amber)",
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block px-6 py-3 transition-colors"
                style={{
                  color:
                    activeSection === section.id
                      ? "var(--amber)"
                      : "var(--text-secondary)",
                  background:
                    activeSection === section.id
                      ? "rgba(245,158,11,0.1)"
                      : "transparent",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <Hero />

      {/* Challenge Section */}
      <AnimatedSection id="challenge" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Module label */}
          <div
            style={{
              fontFamily: "Share Tech Mono",
              fontSize: "11px",
              color: "var(--teal)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            ◆ CHALLENGE
          </div>

          {/* Section title */}
          <h2
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: 0.95,
              color: "var(--text-primary)",
              letterSpacing: "0.02em",
              marginBottom: "16px",
            }}
          >
            The Underground{" "}
            <span style={{ color: "var(--amber)" }}>Mining Crisis</span>
          </h2>

          {/* Decorative line */}
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "var(--amber)",
              margin: "16px 0 24px",
            }}
          />

          <motion.p
            className="text-lg mb-12 max-w-3xl leading-relaxed"
            style={{ color: "var(--text-dim)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Miners face serious dangers underground including toxic gas leaks,
            high temperatures, oxygen deprivation, and accidents with no means
            of quick communication or help. Many workers remain unreachable, and
            rescue responses are dangerously delayed.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              {
                icon: "💨",
                title: "Toxic Gas Exposure",
                desc: "Carbon monoxide, ammonia, benzene, and methane accumulate silently...",
                level: "CRITICAL",
              },
              {
                icon: "🌡️",
                title: "Heat & Oxygen Stress",
                desc: "Deep mines suffer extreme temperature changes and poor ventilation...",
                level: "HIGH",
              },
              {
                icon: "📵",
                title: "No Communication",
                desc: "Wi-Fi and mobile signals fail underground. Falls go unnoticed...",
                level: "CRITICAL",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden p-6 rounded-sm"
                style={{
                  background: "linear-gradient(135deg, #1a0a0a, #111111)",
                  border: "1px solid rgba(239,68,68,0.3)",
                }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(239,68,68,0.7)",
                  boxShadow: "0 0 30px rgba(239,68,68,0.2)",
                }}
              >
                {/* Danger level badge */}
                <div
                  className="absolute top-3 right-3 px-2 py-1 rounded"
                  style={{
                    background: "rgba(239,68,68,0.2)",
                    border: "1px solid rgba(239,68,68,0.5)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Share Tech Mono",
                      fontSize: "9px",
                      color: "#ef4444",
                      letterSpacing: "0.15em",
                    }}
                  >
                    ⚠ {item.level}
                  </span>
                </div>
                {/* Scanning animation line */}
                <div
                  className="absolute left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(239,68,68,0.6), transparent)",
                    animation: "scan 3s linear infinite",
                  }}
                />
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3
                  style={{
                    fontFamily: "Barlow Condensed",
                    fontWeight: 700,
                    fontSize: "18px",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-dim)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Innovation Section */}
      <AnimatedSection id="innovation" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Module label */}
          <div
            style={{
              fontFamily: "Share Tech Mono",
              fontSize: "11px",
              color: "var(--teal)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            ◆ INNOVATION
          </div>

          {/* Section title */}
          <h2
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: 0.95,
              color: "var(--text-primary)",
              letterSpacing: "0.02em",
              marginBottom: "16px",
            }}
          >
            What Mine{" "}
            <span style={{ color: "var(--amber)" }}>Sense Delivers</span>
          </h2>

          {/* Decorative line */}
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "var(--amber)",
              margin: "16px 0 32px",
            }}
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: "🌫️",
                name: "Gas Detection",
                status: "ACTIVE",
                color: "var(--teal)",
              },
              {
                icon: "❤️",
                name: "Heart Rate",
                status: "ACTIVE",
                color: "#ef4444",
              },
              {
                icon: "🧭",
                name: "Fall Detection",
                status: "ACTIVE",
                color: "var(--amber)",
              },
              {
                icon: "🌡️",
                name: "Temperature",
                status: "ACTIVE",
                color: "var(--molten)",
              },
              {
                icon: "📍",
                name: "GPS Tracking",
                status: "ACTIVE",
                color: "var(--teal)",
              },
              {
                icon: "📡",
                name: "LoRa Comm",
                status: "TX/RX",
                color: "#a855f7",
              },
              {
                icon: "🚨",
                name: "Emergency SOS",
                status: "STANDBY",
                color: "#ef4444",
              },
              {
                icon: "⚡",
                name: "Power Mgmt",
                status: "ACTIVE",
                color: "var(--amber)",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="relative p-4 rounded-sm flex items-center gap-3"
                style={{
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                whileHover={{
                  scale: 1.04,
                  borderColor: feature.color,
                  boxShadow: `0 0 20px ${feature.color}33`,
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <div
                    style={{
                      fontFamily: "Barlow",
                      fontWeight: 700,
                      fontSize: "13px",
                    }}
                  >
                    {feature.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "Share Tech Mono",
                      fontSize: "9px",
                      color: feature.color,
                      letterSpacing: "0.15em",
                    }}
                  >
                    ● {feature.status}
                  </div>
                </div>
                {/* Pulse dot */}
                <div className="ml-auto relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute h-full w-full rounded-full opacity-75"
                    style={{ background: feature.color }}
                  />
                  <span
                    className="relative h-2 w-2 rounded-full"
                    style={{ background: feature.color }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Architecture Section */}
      <ArchitectureSection />

      {/* How It Works Section */}
      <AnimatedSection id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Module label */}
          <div
            style={{
              fontFamily: "Share Tech Mono",
              fontSize: "11px",
              color: "var(--teal)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            ◆ HOW IT WORKS
          </div>

          {/* Section title */}
          <h2
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: 0.95,
              color: "var(--text-primary)",
              letterSpacing: "0.02em",
              marginBottom: "16px",
            }}
          >
            Real-Time{" "}
            <span style={{ color: "var(--amber)" }}>Safety Workflow</span>
          </h2>

          {/* Decorative line */}
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "var(--amber)",
              margin: "16px 0 32px",
            }}
          />

          <p
            className="text-lg mb-12 max-w-2xl leading-relaxed"
            style={{ color: "var(--text-dim)" }}
          >
            A step-by-step breakdown of how the MineSense system detects
            hazards, processes data, and alerts workers in real-time.
          </p>

          {/* Workflow Steps */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Sensor Monitoring",
                desc: "8 sensors continuously collect data on gas levels, temperature, humidity, heart rate, and movement.",
                icon: "📡",
                color: "var(--teal)",
              },
              {
                step: "02",
                title: "Data Processing",
                desc: "Arduino microcontroller analyzes sensor data in real-time, filtering noise and comparing against safety thresholds.",
                icon: "⚙️",
                color: "var(--amber)",
              },
              {
                step: "03",
                title: "LoRa Transmission",
                desc: "If any danger is detected, encrypted data is instantly transmitted wirelessly to the supervisor's control room.",
                icon: "📶",
                color: "#a855f7",
              },
              {
                step: "04",
                title: "Alert &  Response",
                desc: "Local buzzer alerts the miner. Dispatcher sees GPS location and has 30 seconds to confirm emergency or cancel alert.",
                icon: "🚨",
                color: "#ef4444",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative p-6 rounded-sm"
                style={{
                  background: "linear-gradient(135deg, #1a0a0a, #111111)",
                  border: `1px solid ${item.color}40`,
                }}
                whileHover={{
                  y: -5,
                  borderColor: item.color,
                  boxShadow: `0 0 30px ${item.color}40`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  style={{
                    color: item.color,
                    fontSize: "24px",
                    marginBottom: "8px",
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    fontFamily: "Bebas Neue",
                    fontSize: "18px",
                    color: item.color,
                    marginBottom: "4px",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontFamily: "Barlow Condensed",
                    fontWeight: 700,
                    fontSize: "16px",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-dim)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Workflow Data Flow Diagram Text */}
          <motion.div
            className="p-8 rounded-sm mb-12"
            style={{
              background: "linear-gradient(135deg, #0a1a2a, #0a0a0a)",
              border: "1px solid rgba(0,212,170,0.3)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontFamily: "Bebas Neue",
                fontSize: "24px",
                color: "var(--teal)",
                marginBottom: "16px",
              }}
            >
              COMPLETE DATA FLOW
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                { label: "Helmet Sensors", icon: "⛑️", color: "var(--amber)" },
                {
                  label: "Arduino Processing",
                  icon: "⚙️",
                  color: "var(--teal)",
                },
                { label: "LoRa Gateway", icon: "📡", color: "#a855f7" },
                { label: "Supervisor Dashboard", icon: "🖥️", color: "#ef4444" },
                { label: "GPS Alert System", icon: "📍", color: "#22c55e" },
                {
                  label: "Emergency Response",
                  icon: "🚑",
                  color: "var(--amber)",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px",
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid ${item.color}40`,
                    borderRadius: "4px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "8px" }}>
                    {item.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: item.color,
                      fontFamily: "Share Tech Mono",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Timings */}
          <motion.div
            className="grid md:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              {
                metric: "< 500ms",
                label: "Detection Response Time",
                desc: "Sensors detect hazards in milliseconds",
              },
              {
                metric: "< 1s",
                label: " Data Transmission",
                desc: "LoRa sends alert to control room instantly",
              },
              {
                metric: "< 30s",
                label: "Emergency Dispatch",
                desc: "Rescue team reaches location with GPS coordinates",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-sm text-center"
                style={{
                  background: "linear-gradient(135deg, #1a1200, #0a0a0a)",
                  border: "1px solid rgba(251,191,36,0.4)",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    color: "var(--amber)",
                    marginBottom: "8px",
                    fontFamily: "Bebas Neue",
                  }}
                >
                  {item.metric}
                </div>
                <h4
                  style={{
                    fontFamily: "Barlow Condensed",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {item.label}
                </h4>
                <p style={{ fontSize: "12px", color: "var(--text-dim)" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Results Section */}
      <AnimatedSection id="results" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Module label */}
          <div
            style={{
              fontFamily: "Share Tech Mono",
              fontSize: "11px",
              color: "var(--teal)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            ◆ RESULTS
          </div>

          {/* Section title */}
          <h2
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: 0.95,
              color: "var(--text-primary)",
              letterSpacing: "0.02em",
              marginBottom: "16px",
            }}
          >
            Results &{" "}
            <span style={{ color: "var(--amber)" }}>Achievements</span>
          </h2>

          {/* Decorative line */}
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "var(--amber)",
              margin: "16px 0 32px",
            }}
          />

          {/* Win Banner */}
          <motion.div
            className="relative overflow-hidden mb-12 p-8 rounded-sm"
            style={{
              background: "linear-gradient(135deg, #1a1200, #0a0a0a)",
              border: "1px solid rgba(251,191,36,0.4)",
              boxShadow: "0 0 40px rgba(251,191,36,0.15)",
            }}
          >
            {/* Decorative corner accents */}
            <div
              className="absolute top-0 left-0 w-8 h-8"
              style={{
                borderTop: "2px solid var(--amber)",
                borderLeft: "2px solid var(--amber)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-8 h-8"
              style={{
                borderTop: "2px solid var(--amber)",
                borderRight: "2px solid var(--amber)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-8 h-8"
              style={{
                borderBottom: "2px solid var(--amber)",
                borderLeft: "2px solid var(--amber)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-8 h-8"
              style={{
                borderBottom: "2px solid var(--amber)",
                borderRight: "2px solid var(--amber)",
              }}
            />

            <div className="text-center">
              <motion.div
                style={{ fontSize: "64px" }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🏆
              </motion.div>
              <h3
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "56px",
                  color: "var(--amber)",
                  lineHeight: 1,
                }}
              >
                3RD PLACE WINNER
              </h3>
              <p
                style={{
                  fontFamily: "Share Tech Mono",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.2em",
                  marginTop: "8px",
                }}
              >
                PERPETUAL FEST 2025 · COIMBATORE INSTITUTE OF TECHNOLOGY ·
                INNOVATION & TECHNICAL EXCELLENCE
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Module label */}
          <div
            style={{
              fontFamily: "Share Tech Mono",
              fontSize: "11px",
              color: "var(--teal)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            ◆ GALLERY
          </div>

          {/* Section title */}
          <h2
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: 0.95,
              color: "var(--text-primary)",
              letterSpacing: "0.02em",
              marginBottom: "16px",
            }}
          >
            Project <span style={{ color: "var(--amber)" }}>Showcase</span>
          </h2>

          {/* Decorative line */}
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "var(--amber)",
              margin: "16px 0 32px",
            }}
          />

          <p
            className="text-lg mb-12 max-w-2xl"
            style={{ color: "var(--text-dim)" }}
          >
            Behind-the-scenes glimpses of development, testing, and the final
            Mine Sense helmet prototype.
          </p>

          <Gallery />
        </div>
      </AnimatedSection>

      {/* Connect Section */}
      <AnimatedSection id="connect" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Module label */}
          <div
            style={{
              fontFamily: "Share Tech Mono",
              fontSize: "11px",
              color: "var(--teal)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            ◆ CONNECT
          </div>

          {/* LinkedIn Call-to-Action Banner */}
          <motion.div
            className="mb-12 p-6 rounded-sm flex items-center justify-between flex-wrap gap-4"
            style={{
              background: "linear-gradient(135deg, #0a1628, #0a0a0a)",
              border: "1px solid rgba(10,102,194,0.4)",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "28px",
                  color: "#0a66c2",
                }}
              >
                🔗 CONNECT WITH US
              </h3>
              <p
                style={{
                  fontFamily: "Share Tech Mono",
                  fontSize: "11px",
                  color: "var(--text-dim)",
                  letterSpacing: "0.1em",
                }}
              >
                Follow our journey · Share this project · Support student
                innovation
              </p>
            </div>
            <div className="flex gap-4">
              <motion.a
                href="https://www.linkedin.com/in/kiruthika-k-477775396/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-bold uppercase tracking-widest text-white"
                style={{
                  fontFamily: "Barlow Condensed",
                  background: "#0a66c2",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(10,102,194,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/Kiruthikak-01"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-bold uppercase tracking-widest text-white"
                style={{
                  fontFamily: "Barlow Condensed",
                  background: "#1f2937",
                  borderRadius: "4px",
                  fontSize: "14px",
                  border: "2px solid var(--amber)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(245,158,11,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <motion.footer
        className="py-12 px-6 text-center"
        style={{
          background: "var(--forge)",
          borderTop: "1px solid var(--border-amber)",
          color: "var(--text-dim)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="mb-2">
          © 2025 Mine Sense · Smart IoT Helmet for Miner Safety
        </p>
        <p className="text-sm">
          Built with ❤️ by Engineering Students · CIT Coimbatore
        </p>
      </motion.footer>
    </div>
  );
}

export default App;
