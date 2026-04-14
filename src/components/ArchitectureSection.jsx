import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const ArchitectureSection = () => {
  const components = [
    {
      icon: "🔌",
      name: "MQ135 Gas Sensor",
      desc: "Detects harmful gases like carbon monoxide, ammonia, and benzene in real-time",
      price: "100 INR",
    },
    {
      icon: "🌡️",
      name: "DHT11 Temperature Sensor",
      desc: "Monitors ambient temperature and humidity to ensure safe working conditions",
      price: "100 INR",
    },
    {
      icon: "🧭",
      name: "MPU6050 Motion Sensor",
      desc: "Detects falls and unusual head movements using 6-axis accelerometer & gyroscope",
      price: "300 INR",
    },
    {
      icon: "🔌",
      name: "Reed Switch",
      desc: "Ensures helmet is being worn properly; triggers alerts if removed",
      price: "30 INR",
    },
    {
      icon: "👆",
      name: "TTP223 Touch Sensor",
      desc: "Manual emergency SOS panic button - allows workers to send instant alerts",
      price: "150 INR",
    },
    {
      icon: "📡",
      name: "LoRa Module (Ra-02)",
      desc: "Long-range wireless communication without internet - works underground",
      price: "1200 INR",
    },
    {
      icon: "⚙️",
      name: "Arduino UNO",
      desc: "Main microcontroller that processes sensor data and controls LoRa transmission",
      price: "1000 INR",
    },
    {
      icon: "🔋",
      name: "Rechargeable Battery",
      desc: "Lithium-ion battery with TP4056 charging module for continuous operation",
      price: "50 INR",
    },
  ];

  return (
    <AnimatedSection id="architecture" className="py-20 px-6">
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
          ◆ ARCHITECTURE
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
          System <span style={{ color: "var(--amber)" }}>Architecture</span>
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
          A 5-layer IoT pipeline from sensors on the helmet to the supervisor's
          control room
        </p>

        {/* Architecture Diagram */}
        <motion.div
          className="mb-12 rounded-lg overflow-hidden border border-cyan-500/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/architecture_diagram.png"
            alt="IoT Mining Safety System - Layered Architecture Diagram"
            className="w-full h-auto"
          />
        </motion.div>

        {/* LoRa Signal Visualization */}
        <div className="flex justify-center mb-12 relative">
          <div className="relative flex items-center gap-4">
            {/* Helmet transmitter */}
            <div className="text-center">
              <div style={{ fontSize: "48px" }}>⛑️</div>
              <div
                style={{
                  fontFamily: "Share Tech Mono",
                  fontSize: "10px",
                  color: "var(--amber)",
                  letterSpacing: "0.15em",
                }}
              >
                HELMET
              </div>
            </div>

            {/* Signal waves */}
            <div
              className="relative flex items-center"
              style={{ width: "200px", height: "60px" }}
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "2px solid var(--teal)",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ scale: [1, 5 + i], opacity: [0.8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  style={{
                    fontFamily: "Share Tech Mono",
                    fontSize: "9px",
                    color: "var(--teal)",
                    letterSpacing: "0.1em",
                  }}
                >
                  LoRa 915MHz
                </div>
              </div>
            </div>

            {/* Control room receiver */}
            <div className="text-center">
              <div style={{ fontSize: "48px" }}>🖥️</div>
              <div
                style={{
                  fontFamily: "Share Tech Mono",
                  fontSize: "10px",
                  color: "var(--teal)",
                  letterSpacing: "0.15em",
                }}
              >
                CONTROL
              </div>
            </div>
          </div>
        </div>

        {/* 5 Layers Explanation */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {[
            {
              num: "01",
              icon: "🔌",
              title: "Sensing Layer",
              desc: "MQ135, DHT11, MPU6050, Reed Switch, TTP223 sensors collect environmental and health data continuously from the miner and surroundings.",
              color: "from-blue-500/20 to-cyan-500/20",
            },
            {
              num: "02",
              icon: "⚙️",
              title: "Processing Layer",
              desc: "Arduino Uno microcontroller receives sensor data, filters noise, checks safety thresholds, identifies anomalies, and prepares data packets.",
              color: "from-purple-500/20 to-blue-500/20",
            },
            {
              num: "03",
              icon: "📡",
              title: "Communication Layer",
              desc: "LoRa Ra-02 module transmits encrypted data wirelessly over long distances (1-5km) without internet - perfect for underground mines.",
              color: "from-green-500/20 to-emerald-500/20",
            },
            {
              num: "04",
              icon: "🖥️",
              title: "Monitoring Layer",
              desc: "Supervisor dashboard displays live sensor readings, GPS map, miner status, and historical graphs. I2C LCD on helmet shows local readings.",
              color: "from-orange-500/20 to-yellow-500/20",
            },
            {
              num: "05",
              icon: "🔔",
              title: "Alert & Safety Layer",
              desc: "Local buzzer alerts the miner. Remote alerts with GPS coordinates sent to control room to initiate rescue operations immediately.",
              color: "from-red-500/20 to-pink-500/20",
            },
          ].map((layer, i) => (
            <motion.div
              key={i}
              className={`p-6 bg-gradient-to-br ${layer.color} border border-opacity-30 rounded-lg`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div>
                  <div className="text-cyan-400 font-bold text-2xl font-orbitron">
                    {layer.num}
                  </div>
                  <div className="text-3xl mt-2">{layer.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{layer.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Key Advantages</h3>
          <motion.div
            className="grid md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {[
              "✓ LoRa communication works without internet or mobile signal",
              "✓ Real-time alerts sent to supervisor during any emergency",
              "✓ Multiple sensors in one helmet - comprehensive safety",
              "✓ Reed switch detects helmet removal and sends alert",
              "✓ Touch sensor for manual emergency SOS by worker",
              "✓ Low-cost and energy efficient design",
              "✓ No cameras - respects worker privacy",
              "✓ Lightweight & comfortable to wear daily",
            ].map((advantage, i) => (
              <motion.div
                key={i}
                className="p-3 bg-slate-800 border border-green-500/20 rounded text-green-400 text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {advantage}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Component Details */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            Hardware Components (Cost: ₹3000/$36)
          </h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.06 }}
          >
            {components.map((comp, i) => (
              <motion.div
                key={i}
                className="p-4 bg-slate-800 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div className="text-3xl mb-2">{comp.icon}</div>
                <h4 className="font-bold text-sm mb-1">{comp.name}</h4>
                <p className="text-gray-400 text-xs mb-3">{comp.desc}</p>
                <div className="text-cyan-400 font-semibold text-x">
                  {comp.price}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ArchitectureSection;
