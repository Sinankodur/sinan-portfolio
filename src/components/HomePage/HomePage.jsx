import "./HomePage.css";
import Banner from "../../assets/sinan.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HomePage = () => {
  const [text] = useTypewriter({
    words: [
      "a Fullstack Developer.",
      "a Python Developer.",
      "a React Developer.",
      "a Django Developer.",
      "a Web Developer.",
    ],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 40,
  });
  return (
    <div style={{flex: 1}}>
      <div className="home">
        <p className="hello">
          <span>Hello!</span>
        </p>
        <p className="subtitle">
          I am a <span>Software Developer</span> based in Kerala, India.
        </p>
        <p className="title">
          I&apos;m<span>Sinan</span>,
        </p>
        <p className="title-2">
          {text}
          <Cursor cursorStyle={"|"} />
        </p>
        <div className="banner-container">
          <img src={Banner} alt="sinan" className="banner" />
        </div>
      </div>
      <div className="card">
        <p className="resume-arrow-text">
          <Link to="/resume">
            Resume &nbsp;
            <BsArrowUpRightCircleFill  style={{ marginBottom: "-0.2rem" }} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
