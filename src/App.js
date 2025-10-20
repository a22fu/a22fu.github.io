import React, { useState, useEffect } from 'react';
import './App.css';

import gmail from './assets/gmail.svg';
import linkedin from './assets/linkedin-logo-svgrepo-com.svg';
import github from './assets/github.svg';
import resume from './assets/document-with-folded-corner-svgrepo-com.svg';
import shopifyLogo from './assets/shopify-logo-svgrepo-com.svg';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const experiences = [
    {
      title: "Privacy Engineer",
      company: "Shopify",
      period: "Sept 2025 - Present",
      description:
        "Currently working as a Privacy Engineer at Shopify, focusing on building secure, scalable systems while ensuring user privacy and data protection. Contributing to privacy-preserving technologies and implementing privacy-by-design principles across the platform.",
      technologies: ["Ruby on Rails", "Google Cloud Platform", "GraphQL", "GRPC","Apache Kafka", "MySQL", "Sidekiq", "Kubernetes", "Docker", "Redis"],
      logo: "/logos/shopify-logo.svg",
      link: "https://www.shopify.com/"
    },
    {
      title: "Software Developer",
      company: "Mesh Connect",
      period: "May 2025 - Sept 2025",
      description:
        "Developed software solutions for Mesh Pay, focusing on building robust and scalable applications. Contributed to the development of core platform features and implemented efficient data processing systems.",
      technologies: ["C#", "Specflow + Gherkin", "Selenium", "Jira", "Azure DevOps", "Azure", "AWS", "Buildkite"],
      logo: "/logos/mesh-pay-logo.jpg",
      link: "https://www.meshpay.com/"
    },
    {
      title: "Software Developer",
      company: "Magnet Forensics",
      period: "Sept 2024 - Dec 2024",
      description:
        "Contributed to Magnet AXIOM, a digital forensics platform, by resolving bugs, writing unit tests, and ensuring the platform's reliability. Automated the generation of technical artifacts, including API documentation and metadata files, to streamline workflows and improve developer efficiency.",
      technologies: ["C#", ".NET", "Typescript", "Go", "Jenkins", "Azure", "AWS", "Okta", "Docker"],
      logo: "/logos/magnet-logo.png",
      link: "https://www.magnetforensics.com/"
    },
    {
      title: "Full Stack Developer",
      company: "Miovision",
      period: "Jan 2024 - Apr 2024",
      description:
        "Worked on Miovision One, a cloud-based traffic management platform that is used in over 17,000 municipalities over 50 countries. Collaborated in an Agile environment using Jira to manage sprints.",
      technologies: ["Python", "React", "Node", "Express", "Gitlab", "Tailwind", "Next", "AWS", "Kubernetes", "Datadog", "Jest"],
      logo: "/logos/miovision-logo.png",
      link: "https://www.miovision.com/"
    },
    {
      title: "Software Developer",
      company: "BlueStreak",
      period: "Apr 2023 - Aug 2023",
      description:
        "Designed and maintained REST APIs and a secure web interface to manage a large-scale auto parts database. Refactored data pipelines and implemented tools to support complex business logic and improve data management.",
      technologies: ["Typescript", "Java", "Angular.js", "Spring boot", "Hibernate", "MySQL", "Node"],
      logo: "/logos/blue-streak-logo.png",
      link: "https://www.bsecorp.com/"
    },
    {
      title: "Software Developer",
      company: "P&P Data Systems",
      period: "Apr 2022 - Aug 2022",
      description:
        "Developed software applications and optimized databases for clinical information systems. Built data pipelines to streamline the transformation and integration of healthcare records.",
      technologies: ["Visual Basic", "C#", ".NET", "MSSQL"],
      logo: "/logos/pp-data-logo.png",
      link: "https://www.p-pdata.com/"
    }
  ];

  const projects = [
    {
      title: "Wingman AI",
      description: "RAG trained LLM to assist in Valorant Esports related queries. Built for AWS/Riot VCT Hackathon with advanced AI capabilities for gaming analytics.",
      technologies: ["AWS (S3, Bedrock, Athena)", "BOTO3", "SQL", "Python", "Javascript", "React", "Flask", "NGINX"],
      image: "🤖",
      status: "Completed",
      link: "https://github.com/a22fu/WingmanAI",
      preview: "/project-previews/wingmanAI.png"
    },
    {
      title: "Reloved",
      description: "Tinder meets Ebay. Matches users based on goods for barter, promoting sustainable exchange and reducing waste. Built for FUSE designathon.",
      technologies: ["UI/UX", "Figma"],
      image: "♻️",
      status: "Completed",
      preview: "/project-previews/Reloved.png"
    },
    {
      title: "Stemify",
      description: "AI-powered app to split music into stems, aiding musicians in remixing, practicing, and creative production.",
      technologies: ["Kotlin", "Ktor", "Python", "Gradle"],
      image: "🎵",
      status: "Completed",
      link: "https://github.com/a22fu/Stemify",
      preview: "/project-previews/Stemify.png"
    },
    {
      title: "FreshCheck",
      description: "Using receipt parsing technology to keep track of groceries, expiration dates, and recommend recipes. Built for Hack the Globe 2022.",
      technologies: ["React Native", "Javascript", "Python", "Veryfi OCR API"],
      image: "🛒",
      status: "Completed",
      link: "https://github.com/a22fu/Fresh-Check"
    },
    {
      title: "Spywatch",
      description: "Spy on anyone, anywhere. Analyzing live drone video feed using AI powered lip reading to spy on your neighbours. Hack the North 2024 Sponsor Prize Winner.",
      technologies: ["TCP Sockets", "Python", "ffmpeg", "Symphonic API"],
      image: "🕵️",
      status: "Completed",
      link: "https://github.com/a22fu/SpyWatch"
    },
    {
      title: "a22fu.github.io",
      description: "My personal website, you're looking at it! A modern, responsive portfolio with smooth animations and optimized performance.",
      technologies: ["React", "Javascript", "Tailwind"],
      image: "💼",
      status: "Completed",
      link: "https://github.com/a22fu/personal-site"
    },
    {
      title: "BombPartyBot",
      description: "Automated chrome browser which plays online word-based game, Bombparty. Uses advanced browser automation techniques.",
      technologies: ["Python", "Selenium"],
      image: "💣",
      status: "Completed",
      link: "https://github.com/a22fu/BombPartyBot"
    },

  ];

  const contactLinks = [
    { name: 'Email', icon: gmail, url: 'mailto:a22fu@uwaterloo.ca', color: '#ea4335' },
    { name: 'LinkedIn', icon: linkedin, url: 'https://linkedin.com/in/a22fu', color: '#0a66c2' },
    { name: 'GitHub', icon: github, url: 'https://github.com/a22fu', color: '#181717' },
    { name: 'Resume', icon: resume, url: '/a22fuResume.pdf', color: '#181717' }
  ];

  useEffect(() => {
    const updateActiveSection = () => {
      const aboutSection = document.getElementById('about-section');
      const experienceSection = document.getElementById('experience-section');
      const projectsSection = document.getElementById('projects-section');
      
      if (aboutSection && experienceSection && projectsSection) {
        const scrollPosition = window.scrollY;
        const isMobile = window.innerWidth <= 768;
        const offset = isMobile ? 80 : 200; // Account for fixed navbar on mobile
        
        const aboutTop = aboutSection.offsetTop - offset;
        const experienceTop = experienceSection.offsetTop - offset;
        const projectsTop = projectsSection.offsetTop - offset;
        
        // Use threshold-based detection for better accuracy
        if (scrollPosition >= projectsTop) {
          setActiveSection('projects');
        } else if (scrollPosition >= experienceTop) {
          setActiveSection('experience');
        } else {
          setActiveSection('about');
        }
      }
    };

    const handleScroll = () => {
      updateActiveSection();
    };

    const handleResize = () => {
      // Small delay to allow layout to settle after resize
      setTimeout(updateActiveSection, 100);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial call to set correct section on load
    updateActiveSection();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="app">
      {/* Left Sidebar - 40% */}
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="name-section">
            <img src="/alexander-photo.jpg" alt="Alexander Fu" className="profile-photo" />
            <h1 className="name">Alexander Fu</h1>
            <div className="subtitle">
              <p>Privacy Engineer at <span className="company"><img src={shopifyLogo} alt="Shopify" className="company-logo-inline" />Shopify</span></p>
            </div>
          </div>

          <div className="navigation-section">
            <h2 
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => {
                const element = document.getElementById('about-section');
                if (element) {
                  const isMobile = window.innerWidth <= 768;
                  const offset = isMobile ? 80 : 0;
                  const elementPosition = element.offsetTop - offset;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
            >
              About
            </h2>
            <h2 
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => {
                const element = document.getElementById('experience-section');
                if (element) {
                  const isMobile = window.innerWidth <= 768;
                  const offset = isMobile ? 80 : 0;
                  const elementPosition = element.offsetTop - offset;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
            >
              Experience
            </h2>
            <h2 
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => {
                const element = document.getElementById('projects-section');
                if (element) {
                  const isMobile = window.innerWidth <= 768;
                  const offset = isMobile ? 80 : 0;
                  const elementPosition = element.offsetTop - offset;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
            >
              Projects
            </h2>
          </div>

          <div className="contact-section">
            <div className="contact-links">
              {contactLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.name}
                  className="contact-link"
                >
                  <img src={contact.icon} alt={contact.name} className="contact-icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - 60% */}
      <div className="content">
        <div className="content-sections">
          {/* About Section */}
          <section id="about-section" className="section">
            <div className="about-card">
              <h3 className="about-title">Hi I'm Alex👋</h3>
              <p className="about-description">
              I'm a fourth year Computer Science student at the University of Waterloo with a passion for software development. 
              Currently working as a Privacy Engineer at Shopify, I focus on building products that help ensure data protection for Shopify customers and merchants alike. Currently based in Toronto, Ontario, Canada.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience-section" className="section">
            <h2 className="section-title">Experience</h2>
            <div className="section-content">
              {experiences.map((exp, i) => (
                <article key={i} className="experience-card">
                  <div className="card-header">
                    <a
                      href={exp.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                      aria-label={`${exp.company} website`}
                    >
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="company-logo"
                        loading="lazy"
                      />
                    </a>
                    <div className="company-info">
                      <h3 className="company-name">{exp.company}</h3>
                      <h4 className="job-title">{exp.title}</h4>
                      <p className="period">{exp.period}</p>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="description">{exp.description}</p>
                    <div className="technologies">
                      {exp.technologies.map((tech, ti) => (
                        <span key={ti} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects-section" className="section">
            <h2 className="section-title">Projects</h2>
            <div className="section-content">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-header">
                    <div className="project-icon">{project.image}</div>
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  {project.preview && (
                    <div className="project-preview">
                      <img 
                        src={project.preview} 
                        alt={`${project.title} preview`}
                        className="preview-image"
                      />
                    </div>
                  )}
                  
                  <div className="project-actions">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-btn primary"
                      >
                        View Code
                      </a>
                    )}
                    {!project.link && (
                      <button className="action-btn primary" disabled>
                        View Project
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default App;

