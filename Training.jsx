import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaExternalLinkAlt } from "react-icons/fa";

export default function Training() {
  const trainings = [
    {
      title: "Web Development Training (4 Weeks)",
      company: "Ancoax Technology, Ambikapur",
      year: "2025",
      description:
        "Learned HTML, CSS, JavaScript and basic backend development. Built responsive and interactive web pages.",
      certificate: "/certs/ancoax-certificate.jpg",
    },
    {
      title: "Full Stack Web Development Training (4 Weeks)",
      company: "Logix Hunt Pvt. Ltd., Bhilai",
      year: "2024",
      description:
        "Learned HTML, CSS, JavaScript, Bootstrap, PHP and MySQL. Developed dynamic websites and database connectivity projects.",
      certificate: "/certs/logix-certificate.jpg",
    },
  ];

  return (
    <section
      id="training"
      style={{
        minHeight: "100vh",
        padding: "4rem 1rem",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "3rem",
            background:
              "linear-gradient(90deg,var(--accent),var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          💻 Training & Certifications
        </motion.h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {trainings.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,212,255,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "18px",
                padding: "1.8rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                alignItems: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Left Side */}
              <div
                style={{
                  flex: "1 1 500px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "1rem",
                  }}
                >
                  <FaLaptopCode
                    size={35}
                    color="var(--accent)"
                  />

                  <h3
                    style={{
                      margin: 0,
                      color: "var(--accent)",
                      fontSize: "1.4rem",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p>
                  <strong>Organization:</strong> {item.company}
                </p>

                <p>
                  <strong>Year:</strong> {item.year}
                </p>

                <p
                  style={{
                    color: "#d0d0d0",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </p>

                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "10px",
                    padding: "10px 18px",
                    background:
                      "linear-gradient(90deg,var(--accent),var(--accent-2))",
                    color: "#000",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: "600",
                  }}
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>
              </div>

              {/* Right Side Certificate Preview */}
              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: "0 0 320px",
                }}
              >
                <img
                  src={item.certificate}
                  alt={item.title}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    border:
                      "2px solid rgba(0,212,255,0.4)",
                    boxShadow:
                      "0 0 20px rgba(0,212,255,0.2)",
                    cursor: "pointer",
                  }}
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}