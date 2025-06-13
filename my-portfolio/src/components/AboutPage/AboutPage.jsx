import "./AboutPage.css";
import aboutImage from "../../assets/about-page-main.jpg";
import Marquee from "react-fast-marquee";

const AboutPage = () => {
  return (
    <>
      <div className="about-header">
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
      <div className="about-page">
        <div className="about-image-container">
          <img src={aboutImage} alt="About Me" />
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
