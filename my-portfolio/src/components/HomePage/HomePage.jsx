import "./HomePage.css";
import Banner from "../../assets/images/sinan.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useEffect, useRef } from "react";
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

  // Animation references
  const helloRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const title2Ref = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const elements = [
      { ref: helloRef, delay: 0 },
      { ref: subtitleRef, delay: 0.3 },
      { ref: titleRef, delay: 0.6 },
      { ref: title2Ref, delay: 0.9 },
      { ref: cardRef, delay: 1.5 },
    ];

    elements.forEach(({ ref, delay }) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "translateY(0)";
        }
      }, delay * 1000);
    });
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <div className="home">
        <p className="hello" ref={helloRef}>
          <span>Hello!</span>
        </p>
        <p className="subtitle" ref={subtitleRef}>
          I am a <span>Software Developer</span> based in Kerala, India.
        </p>
        <p className="title" ref={titleRef}>
          I&apos;m<span>Sinan</span>,
        </p>
        <p className="title-2" ref={title2Ref}>
          {text}
          <Cursor cursorStyle={"|"} />
        </p>
        <div className="banner-container">
          <img src={Banner} alt="sinan" className="banner" />
        </div>
      </div>
      <div className="card" ref={cardRef}>
        <p className="resume-arrow-text">
          <Link to="/resume">
            Resume &nbsp;
            <BsArrowUpRightCircleFill style={{ marginBottom: "-0.2rem" }} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
