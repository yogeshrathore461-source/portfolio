import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

export default function Resume() {
  return (
    <section
      id="resume"
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
        {/* Heading */}
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
          <h2
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  }}
>
  <FaFilePdf color="#00d4ff" />
  Resume
</h2>
        </motion.h2>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "16px",
            padding: "2rem",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3
            style={{
              color: "var(--accent)",
              marginBottom: "10px",
            }}
          >
            Yogesh Kumar Rathore
          </h3>

          <p style={{ color: "#ccc", lineHeight: "1.8" }}>
            Computer Science Engineering Student with skills in
            C, C++, Python, HTML, CSS, JavaScript, Bootstrap,
            PHP, ASP.NET and MySQL.
          </p>

          <p style={{ color: "#aaa", marginTop: "10px" }}>
            Interested in Full Stack Web Development,
            Software Development and Problem Solving.
          </p>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            marginTop: "30px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Resume PDF"
            style={{
              width: "100%",
              height: "800px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Buttons */}
       <div
  style={{
    background: "linear-gradient(135deg,#111,#1a1a1a)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(0,212,255,0.3)",
    boxShadow: "0 0 20px rgba(0,212,255,0.15)",
  }}
>
          {/* Download Resume */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "12px 22px",
              borderRadius: "10px",
              textDecoration: "none",
              background: "var(--accent)",
              color: "#000",
              fontWeight: "600",
            }}
          >
            ⬇ Download Resume
          </motion.a>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "12px 22px",
              borderRadius: "10px",
              textDecoration: "none",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              fontWeight: "600",
            }}
          >
            📞 Contact Me
          </motion.a>
        </div>
      </div>
    </section>
  );
}