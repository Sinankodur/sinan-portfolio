import "./ResumePage.css";
import profileImage from "../../assets/images/profile-image.png";
import Resume from "../../assets/resume/Sinan's Resume.pdf";

import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaDownload } from "react-icons/fa";

const ResumePage = () => {
  const downloadResume = () => {
    const resumeUrl = Resume;

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Muhammed_Sinan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="resume-container">
      <div className="resume-header">
        <div className="header-content">
          <h1>Muhammed Sinan</h1>
          <h2>Python Full Stack Developer</h2>
          <div className="contact-info">
            <span>
              <a href="mailto:sinankodur24@gmail.com">
                <IoIosMail style={{ marginBottom: "-0.2rem" }} />{" "}
                sinankodur24@gmail.com
              </a>
            </span>
            <span>
              <a href="tel:+918129209940">
                <HiMiniDevicePhoneMobile style={{ marginBottom: "-0.1rem" }} />
                +91 8129209940
              </a>
            </span>
            <span>
              <FaLocationDot style={{ marginBottom: "-0.09rem" }} /> Malappuram,
              Kerala
            </span>
          </div>
          <button className="download-btn" onClick={downloadResume}>
            <FaDownload className="download-icon" /> Download Resume
          </button>
        </div>
        <div className="profile-image">
          <div className="avatar-placeholder">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </div>

      <div className="resume-content">
        <section className="resume-section">
          <div className="section-header">
            <h2>Work Experience</h2>
            <div className="divider"></div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Dec 2024 - Present</div>
              <div className="timeline-content">
                <h3>Junior Front end Developer</h3>
                <h4>Hyovis Technologies and Water Systems</h4>
                <ul>
                  <li>
                    Contributed to multiple live Django-based projects, focusing
                    on frontend design and development.
                  </li>
                  <li>
                    Designed and deployed company websites, including Hyovis
                    Technologies, Machli Tech, and The Deep Seafood Company —
                    all live and fully responsive.
                  </li>
                  <li>
                    Provided minor backend support, working alongside Django
                    developers to ensure seamless integration and functionality.
                  </li>
                  <li>
                    Focused on clean UI/UX, responsive layouts, and performance
                    optimization.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">June 2023 - Feb 2024</div>
              <div className="timeline-content">
                <h3>Python Full Stack Developer Intern</h3>
                <h4>Techolas Technologies, Calicut, Kerala</h4>
                <ul>
                  <li>
                    Developed full-stack projects using Python, Django,
                    React.js, and REST APIs.
                  </li>
                  <li>
                    Built AntiQuin, a responsive e-commerce website with
                    features like cart, order management, favorites, search,
                    filtering, and user account handling via Django&apos;s
                    built-in features. Admin interface included order and user
                    management tools.
                  </li>
                  <li>
                    Created a Netflix Clone UI with React.js, using the TMDB API
                    and Axios for data fetching.
                  </li>
                  <li>
                    Collaborated in cross-functional teams to deliver robust and
                    scalable web solutions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h2>Education</h2>
            <div className="divider"></div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - 2025</div>
              <div className="timeline-content">
                <h3>BA English (Honors)</h3>
                <h4>Indira Gandhi National Open University</h4>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2020 - 2022</div>
              <div className="timeline-content">
                <h3>Senior Secondary School</h3>
                <h4>National Institute of Open Schooling</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <div className="divider"></div>
          </div>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-badges">
                <span>Python</span>
                <span>JavaScript</span>
                <span>SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-badges">
                <span>React</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Bootstrap</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-badges">
                <span>Django</span>
                <span>MySQL</span>
                <span>REST API</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <div className="skill-badges">
                <span>Git</span>
                <span>AWS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h2>Projects</h2>
            <div className="divider"></div>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>
                A responsive personal portfolio website built with React,
                featuring project showcases, skill highlights, and contact
                information
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>CSS3</span>
                <span>JavaScript</span>
              </div>
            </div>
            <div className="project-card">
              <h3>E-commerce Platform</h3>
              <p>
                A full-featured e-commerce platform with product listings,
                shopping cart, and an admin dashboard for managing products,
                orders, and users
              </p>
              <div className="tech-tags">
                <span>Django</span>
                <span>Python</span>
                <span>Bootstrap</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Netflix Clone</h3>
              <p>
                A Netflix-inspired web application that replicates the core
                UI/UX, including movie browsing, and trailers, using React and
                RESTful APIs
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>REST API</span>
                <span>Postman</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
