import { useEffect, useRef } from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaSearch,
} from "react-icons/fa";
import "./ServicesPage.css";
import webDevelopmentImage from "../../assets/web-development.jpg";
import seoImage from "../../assets/seo.jpg";
import uidesignImage from "../../assets/ui-ux.jpg";
import mobileAppImage from "../../assets/mobile-app.avif";
import cloudServiceImage from "../../assets/cloud-services.avif";

const ServicesPage = () => {
  const arrowRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building responsive and functional websites using modern technologies like React, Vue, and Node.js.",
      media: webDevelopmentImage,
      icon: <FaLaptopCode />,
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Creating intuitive user interfaces and seamless user experiences that delight your customers.",
      media: uidesignImage,
      icon: <FaPaintBrush />,
    },
    {
      id: 3,
      title: "Mobile Apps",
      description:
        "Developing cross-platform mobile applications for iOS and Android with React Native.",
      media: mobileAppImage,
      icon: <FaMobileAlt />,
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description:
        "Deploying scalable cloud infrastructure and serverless architectures on AWS and Azure.",
      media: cloudServiceImage,
      icon: <FaCloud />,
    },
    {
      id: 5,
      title: "SEO Optimization",
      description:
        "Improving website visibility on search engines through technical and content optimization.",
      media: seoImage,
      icon: <FaSearch />,
    },
  ];

  useEffect(() => {
    const arrow = arrowRef.current;
    const interval = setInterval(() => {
      if (arrow) {
        arrow.style.animation = "none";
        setTimeout(() => {
          arrow.style.animation = "bounce 2s infinite";
        }, 10);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTouch = (e) => {
    e.currentTarget.classList.toggle("hover");
  };

  return (
    <div className="services-page">
      <div className="service-wrapper">
        <h1>Awesome Services</h1>
        <p className="subtitle">
          Explore our comprehensive range of digital solutions designed to
          elevate your business
        </p>

        <div className="services-container">
          <div className="services-list">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-item"
                onTouchStart={handleTouch}
              >
                <div className="image-container">
                  <img
                    src={service.media}
                    alt={service.title}
                    className="service-image"
                  />
                </div>
                <div className="service-content">
                  <h2 className="service-title">
                    <span className="service-icon">{service.icon}</span>
                    {service.title}
                  </h2>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
