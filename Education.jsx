import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaSchool,
  FaGraduationCap,
} from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      style={{
        minHeight: "100vh",
        padding: "3rem 1rem",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "2.2rem",
            marginBottom: "2rem",
            textAlign: "center",
            background:
              "linear-gradient(90deg,var(--accent),var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          🎓 Education
        </motion.h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {/* B.Tech */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={cardStyle}
          >
            <FaUniversity size={40} color="var(--accent)" />
            <div>
              <h3 style={titleStyle}>
                B.Tech – Computer Science Engineering
              </h3>
              <p>Government Engineering College, Ambikapur (CSVTU)</p>
              <p>SPI: 7.41 / 10</p>
              <p>2022 – 2026</p>
            </div>
          </motion.div>

          {/* DCA */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={cardStyle}
          >
            <FaGraduationCap size={38} color="var(--accent)" />
            <div>
              <h3 style={titleStyle}>
                Diploma in Computer Application (DCA)
              </h3>
              <p>Maharishi University of Management & Technology</p>
              <p>Bilaspur</p>
              <p>Percentage: 75%</p>
              <p>2021 – 2022</p>
            </div>
          </motion.div>

          {/* 12th */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={cardStyle}
          >
            <FaSchool size={36} color="var(--accent)" />
            <div>
              <h3 style={titleStyle}>
                Higher Secondary (12th)
              </h3>
              <p>Science (Mathematics)</p>
              <p>CGBSE Board</p>
              <p>Percentage: 94.6%</p>
              <p>Completed in 2021</p>
            </div>
          </motion.div>

          {/* 10th */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={cardStyle}
          >
            <FaSchool size={36} color="var(--accent)" />
            <div>
              <h3 style={titleStyle}>
                Secondary School (10th)
              </h3>
              <p>CGBSE Board</p>
              <p>Percentage: 79%</p>
              <p>Completed in 2019</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "1.5rem 2rem",
  border: "1px solid rgba(255,255,255,0.08)",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  backdropFilter: "blur(10px)",
};

const titleStyle = {
  color: "var(--accent)",
  marginBottom: "0.4rem",
  fontSize: "1.2rem",
};