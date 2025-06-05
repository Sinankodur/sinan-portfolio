import "./HomePage.css";
import Banner from "../../assets/sinan.png";
import { ArrowUpRightCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <p className="hello">
          <span>Hello!</span>
        </p>
        <p className="title">
          I&apos;m<span style={{ paddingLeft: "1rem" }}>Sinan</span>,
        </p>
        <p className="title-2">Web Developer</p>
        <div className="banner-container">
          <img src={Banner} alt="sinan" className="banner" />
        </div>
        <div className="card">
          <p className="resume-arrow-text">
            <Link to="/resume">
              Resume &nbsp;
              <ArrowUpRightCircleFill style={{ marginBottom: "-0.2rem" }} />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
