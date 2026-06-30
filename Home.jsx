import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css' 


// 🖼️ Import Assets
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'
import facebookLogo from '../../public/facebook.png'

export default function Home() {
  const professions = [
  'Full Stack Web Developer',
  'Computer Science Engineer',
  'Frontend Developer',
  'PHP Developer',
  'Problem Solver',
]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: '#' },
{ img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/yogesh-rathore-28652b325/' },
{ img: instagramLogo, title: 'Instagram', link: 'https://instagram.com/er.yogesh883' },
{ img: facebookLogo, title: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100023581784974' },
    { img: gmailLogo, title: 'Email', link: 'mailto:yogeshrathore461@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+916268069608' },
  
  ]

  return (
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src="/photo.png"
              alt="Yogesh Kumar Rathore"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              YOGESH KUMAR RATHORE
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <p className="typing-effect">
           Computer Science Engineer | Frontend Developer | Tech Explorer
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>
          <div
  style={{
    display: "flex",
    gap: "15px",
    marginTop: "25px",
    flexWrap: "wrap",
  }}
>
  {/* Download Resume */}
  <a
    href="/resume/Yogesh_Resume.pdf"
    download
    style={{
      padding: "12px 24px",
      background: "#00d4ff",
      color: "#000",
      textDecoration: "none",
      borderRadius: "8px",
      fontWeight: "600",
    }}
  >
    📄 Download Resume
  </a>

  {/* Hire Me */}
  <button
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    style={{
      padding: "12px 24px",
      background: "transparent",
      color: "#00d4ff",
      border: "2px solid #00d4ff",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
    }}
  >
    📩 Hire Me
  </button>
</div>

          {/* Info Cards */}
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  style={{
    textAlign: "center",
    marginTop: "25px",
    color: "#ddd",
    lineHeight: "1.8",
    fontSize: "1rem",
  }}
>
  <p>📍 Janjgir-Champa, Chhattisgarh, India</p>
  <p>📧 yogeshrathore461@gmail.com</p>
  <p>6268069608</p>
</motion.div>

        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
