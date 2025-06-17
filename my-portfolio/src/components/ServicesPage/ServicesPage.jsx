import { useEffect, useRef } from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaSearch,
} from "react-icons/fa";
import "./ServicesPage.css";
import webDevelopmentImage from "../../assets/images/web-development.jpg";
import seoImage from "../../assets/images/seo.jpg";
import uidesignImage from "../../assets/images/ui-ux.jpg";
import mobileAppImage from "../../assets/images/mobile-app.avif";
import cloudServiceImage from "../../assets/images/cloud-services.avif";

const ServicesPage = () => {
  const arrowRef = useRef(null);
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);
  const serviceRefs = useRef([]);

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

    setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.style.opacity = "1";
        headerRef.current.style.transform = "translateY(0)";
      }
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = "1";
        subtitleRef.current.style.transform = "translateY(0)";
      }
    }, 50);

    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        setTimeout(() => {
          ref.style.opacity = "1";
          ref.style.transform = "translateX(0)";
        }, 150 + index * 100);
      }
    });

    return () => clearInterval(interval);
  }, []);

  const handleTouch = (e) => {
    e.currentTarget.classList.toggle("hover");
  };

  return (
    <div className="services-page">
      <div className="service-wrapper">
        <h1
          ref={headerRef}
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          Awesome Services
        </h1>
        <p
          className="subtitle"
          ref={subtitleRef}
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
          }}
        >
          Explore our comprehensive range of digital solutions designed to
          elevate your business
        </p>

        <div className="services-container">
          <div className="services-list">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-item"
                onTouchStart={handleTouch}
                ref={(el) => (serviceRefs.current[index] = el)}
                style={{
                  opacity: 0,
                  transform: "translateX(100px)",
                  transition: `opacity 0.5s ease ${
                    0.3 + index * 0.15
                  }s, transform 0.5s ease ${0.3 + index * 0.15}s`,
                }}
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
