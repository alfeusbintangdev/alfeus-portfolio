import {
  FaBehance,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMedium,
  FaMediumM,
  FaReact,
  FaRobot,
  FaWhatsapp,
} from 'react-icons/fa'
import {
  SiBitbucket,
  SiBootstrap,
  SiJavascript,
  SiLaravel,
  SiMedium,
  SiMysql,
  SiNetlify,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  SiRuby,
  SiRubyonrails,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { Collapse } from 'bootstrap'
import { journeys, profile } from './data/profile'

const setNavbarExpanded = (isExpanded) => {
  const toggler = document.querySelector('.custom-toggler')
  toggler?.setAttribute('aria-expanded', String(isExpanded))
}

const toggleNavbar = () => {
  const navbar = document.querySelector('#mainNavbar')
  if (!navbar) return

  const collapse = Collapse.getOrCreateInstance(navbar, { toggle: false })

  if (navbar.classList.contains('show')) {
    collapse.hide()
    setNavbarExpanded(false)
  } else {
    collapse.show()
    setNavbarExpanded(true)
  }
}

const closeNavbar = () => {
  const navbar = document.querySelector('#mainNavbar')
  if (navbar?.classList.contains('show')) {
    const collapse = Collapse.getOrCreateInstance(navbar, { toggle: false })
    collapse.hide()
    setNavbarExpanded(false)
  }
}

function App() {
  return (
    <main className="portfolio-page">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar" aria-label="Main navigation">
      <div className="container">
        <a className="navbar-brand logo-text" href="#hero" onClick={closeNavbar}>
          {profile.shortName}
        </a>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto gap-lg-4 mt-4 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbar}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tech-stack" onClick={closeNavbar}>
                Tech Stack
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeNavbar}>
                My Projects
              </a>
            </li>
          </ul>

          <a className="btn btn-green mt-3 mt-lg-0" href="#contact" onClick={closeNavbar}>
            Let&apos;s Collab
          </a>
        </div>
      </div>
    </nav>
  )
}

function SectionBadge({ children, className = '' }) {
  return (
    <div className={`section-badge ${className}`}>
      <span />
      {children}
    </div>
  )
}

function HeroSection() {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-container">
        <div className="hero-badge-wrapper">
          <SectionBadge>Hi! I&apos;m a</SectionBadge>
        </div>

        <h1 id="hero-title" className="hero-title">
          <span>Full-Stack</span>
          <span>Developer</span>
        </h1>

        <img
          src="/images/glow-hero.png"
          alt=""
          className="hero-glow"
          aria-hidden="true"
        />

        <div className="hero-visual" aria-hidden="true">
          <img src="/images/profile-hero.png" alt="" className="hero-image" />
        </div>

        <p className="hero-location">
          Based in <strong>{profile.location}</strong>
        </p>

        <a href="#contact" className="btn btn-green hero-contact-btn">
          Let's Build
        </a>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-title">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-6">
            <SectionBadge>About Me</SectionBadge>

            <h2 id="about-title" className="section-title mt-5">
              Get to <br /> Know Me
            </h2>

            <div className="about-text mt-5">
              <p>
                I'm an Informatics graduate who loves building things that are both creative and useful. 
                To me, technology isn't just about writing thousands of lines of code — it's about solving real problems, making things simpler, and creating something that leaves a real, positive impact.
              </p>

              <p>
                I'm naturally curious, always eager to learn something new, and I genuinely enjoy stepping outside my comfort zone and trying things I've never done before.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="journey-header">
              <SectionBadge>The Journey So Far</SectionBadge>

              {/* <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
                className="btn btn-green resume-button"
              >
                Check My Resumé
              </a> */}
            </div>

            <div className="timeline">
              {journeys.map((item) => (
                <article className="timeline-item" key={`${item.role}-${item.period}`}>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                    <span>
                      {item.description} 
                    </span>
                    <span>({item.place})</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TechStackSection() {
  const stacks = [
    {
      title: 'Front-End',
      items: [
        { icon: <FaReact />, label: 'React.js' },
        { icon: <SiJavascript />, label: 'JavaScript' },
        { icon: <SiBootstrap />, label: 'Bootstrap' },
      ],
    },
    {
      title: 'Back-End',
      items: [
        { icon: <SiRubyonrails />, label: 'Ruby on Rails' },
        { icon: <SiLaravel />, label: 'Laravel' },
      ],
    },
    {
      title: 'Database',
      items: [
        { icon: <SiPostgresql />, label: 'PostgreSQL' },
        { icon: <SiMysql />, label: 'MySQL' },
      ],
    },
    {
      title: 'Repository',
      items: [
        { icon: <FaGithub />, label: 'GitHub' },
        { icon: <SiBitbucket />, label: 'Bitbucket' },
      ],
    },
    {
      title: 'Tools & Deployment',
      items: [
        { icon: <VscVscode />, label: 'VS Code' },
        { icon: <SiPostman />, label: 'Postman' },
        { icon: <SiOpenai />, label: 'OpenAI' },
        { icon: <SiNetlify />, label: 'Netlify' },
      ],
    },
  ]

  return (
    <section id="tech-stack" className="section-padding" aria-labelledby="tech-title">
      <div className="container">
        <SectionBadge>Tech Stack</SectionBadge>

        <div className="row g-5 align-items-center mt-5">
          <div className="col-lg-5">
            <h2 id="tech-title" className="section-title">
              Tech <br /> Behind <br /> My Work
            </h2>

            <p className="section-description mt-5">
              I combine modern tech and AI Agents to build things that look good, work well, and actually make sense for the people using them.
            </p>
          </div>

          <div className="col-lg-7">
            <div className="stack-grid">
              {stacks.map((stack) => (
                <article className="stack-group" key={stack.title}>
                  <SectionBadge className="stack-badge">{stack.title}</SectionBadge>

                  <div className="stack-icons mt-4">
                    {stack.items.map((item) => (
                      <div className="stack-icon" key={item.label} title={item.label}>
                        {item.icon}
                        <span className="visually-hidden">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      icon: <FaBehance />,
      title: 'UI/UX Design',
      badgeClass: 'cyan',
      description:
        'Interface designs and visual concepts.',
      link: profile.links.behance,
    },
    {
      icon: <FaGithub />,
      title: 'Web Development',
      badgeClass: 'red',
      description:
        'Web projects I have built and am currently working on.',
      link: profile.links.github,
    },
    {
      icon: <SiMedium />,
      title: 'Writing',
      badgeClass: 'yellow',
      description:
        'Thoughts on programming, learning, and life through a tech lens..',
      link: profile.links.medium,
    },
  ]

  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-title">
      <div className="container">
        <SectionBadge>My Projects</SectionBadge>

        <div className="row g-5 align-items-start mt-5">
          <div className="col-lg-5">
            <h2 id="projects-title" className="section-title">
              Things I <br />
              <span>Design,</span> <br />
              <span>Build,</span> <br />
              <span>Write</span>
            </h2>
          </div>

          <div className="col-lg-7">
            <p className="section-description">
              Most of my projects are still growing — just like me.
            </p>

            <p className="section-description">
              Click any category to explore my UI/UX designs, web projects, or Medium articles.
            </p>
          </div>
        </div>

        <hr className="section-line" />

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-card"
                aria-label={`Open ${project.title}`}
              >
                <div className="project-icon" aria-hidden="true">
                  {project.icon}
                </div>

                <div className={`project-badge ${project.badgeClass}`}>
                  <span />
                  {project.title}
                </div>

                <p>{project.description}</p>

                <span className="btn btn-green project-button">Let&apos;s Check This</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const contacts = [
    {
      icon: <FaWhatsapp />,
      label: profile.whatsappDisplay,
      link: profile.links.whatsapp,
      ariaLabel: 'Chat through WhatsApp',
    },
    {
      icon: <FaEnvelope />,
      label: profile.email,
      link: profile.links.email,
      ariaLabel: 'Send email',
    },
    {
      icon: <FaInstagram />,
      label: profile.instagram,
      link: profile.links.instagram,
      ariaLabel: 'Open Instagram',
    },
  ]

  return (
    <section id="contact" className="contact-section section-padding" aria-labelledby="contact-title">
      <div className="container text-center">
        <h2 id="contact-title" className="contact-title">
          Let&apos;s Build Something <br /> Together!
        </h2>

        <p className="contact-description">
          Open to full-time opportunities, freelance projects, UI/UX collaboration, or
          simply talking about technology, ideas, and meaningful digital products.
        </p>

        <div className="contact-list" aria-label="Contact links">
          {contacts.map((contact) => (
            <a
              href={contact.link}
              target="_blank"
              rel="noreferrer"
              className="contact-pill"
              key={contact.label}
              aria-label={contact.ariaLabel}
            >
              <span aria-hidden="true">{contact.icon}</span>
              {contact.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function FooterSection() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Tech Stack', href: '/tech-stack' },
    { label: 'My Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: profile.links.github,
    },
    {
      icon: <FaLinkedinIn />,
      label: 'LinkedIn',
      href: profile.links.linkedin,
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      href: profile.links.instagram,
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      href: profile.links.email,
    },
  ]

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              {profile.shortName}
            </a>

            <p>
              Building with purpose, learning along the way.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                key={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {profile.shortName} All rights reserved</p>
          <p>Designed &amp; developed by {profile.name}.</p>
        </div>
      </div>
    </footer>
  )
}

export default App
