import { useEffect, useRef } from "react";
import "./AboutPage.css";
import aboutImage from "../../assets/images/about-page-main.jpg";
import Marquee from "react-fast-marquee";

const AboutPage = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.style.opacity = "1";
        headerRef.current.style.transform = "translateY(0)";
      }
    }, 100);

    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.style.opacity = "1";
        contentRef.current.style.transform = "translateY(0)";
      }
    }, 300);
  }, []);

  return (
    <>
      <div 
        className="about-header"
        ref={headerRef}
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
        }}
      >
        <h1>About Me</h1>
        <Marquee
          speed={50}
          pauseOnClick={true}
          gradientColor="#f9832275"
          gradient={true}
          className="marquee"
        >
          <p className="marquee-text">
            <span>•</span> HTML <span>•</span> CSS <span>•</span> JavaScript{" "}
            <span>•</span> React.js <span>•</span> Python <span>•</span> Django{" "}
            <span>•</span> MySQL <span>•</span> Git <span>•</span> Bootstrap{" "}
            <span>•</span> Responsive Design <span>•</span> API Integration{" "}
            <span>•</span> Frontend Development <span>•</span> Backend
            Development <span>•</span> Full Stack Development&nbsp;
          </p>
        </Marquee>
      </div>
      <div 
        className="about-page"
        ref={contentRef}
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s"
        }}
      >
        <div className="about-image-container">
          <img 
            src={aboutImage} 
            alt="About Me" 
          />
        </div>
        <div className="about-par-container">
          <p>
            I&apos;m a passionate Full Stack Developer with a strong foundation
            in both frontend and backend technologies. I love building dynamic,
            responsive web applications and constantly learning new tools to
            enhance my craft. I have hands-on experience with Python, Django,
            and React.js, and I&apos;ve developed scalable projects like a fully
            functional e-commerce platform. Currently, I work as a Junior
            Frontend Developer at Hyovis Technologies and Water Systems, where I
            focus on writing clean, user-focused code. I&apos;m also skilled in
            version control, responsive design, and integrating APIs to create
            efficient, maintainable, and engaging digital solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;