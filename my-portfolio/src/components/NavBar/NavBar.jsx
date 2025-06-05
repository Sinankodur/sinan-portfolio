import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navItemsRef = useRef([]);
  const activeIndicatorRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathToIndex = useMemo(
    () => ({
      "/": 0,
      "/about": 1,
      "/services": 2,
      "/resume": 3,
      "/projects": 4,
      "/contact": 5,
    }),
    []
  );

  // Update indicator position
  const updateIndicator = useCallback(() => {
    const currentPath = location.pathname;
    const index = pathToIndex[currentPath] ?? 0;
    const activeElement = navItemsRef.current[index];

    if (activeElement && activeIndicatorRef.current) {
      setIndicatorStyle({
        width: `${activeElement.offsetWidth}px`,
        left: `${activeElement.offsetLeft}px`,
        opacity: 1,
      });
    }
  }, [location.pathname, pathToIndex]);

  // Update indicator on route or resize
  useEffect(() => {
    updateIndicator();

    const handleResize = () => updateIndicator();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateIndicator]);

  // Close menu when navigation changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="container">
        <NavLink to="/" className="logo lg-logo">
          <span>SK</span> SINAN
        </NavLink>
        {/* Hamburger for mobile */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ")
              setMenuOpen((prev) => !prev);
          }}
        >
          <span />
          <span />
          <span />
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? "open" : ""}>
          <ul>
            <div
              ref={activeIndicatorRef}
              className="active-indicator"
              style={indicatorStyle}
            />

            <NavLink to="/" end>
              {({ isActive }) => (
                <li
                  ref={(el) => (navItemsRef.current[0] = el)}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  <span>Home</span>
                </li>
              )}
            </NavLink>

            <NavLink to="/about">
              {({ isActive }) => (
                <li
                  ref={(el) => (navItemsRef.current[1] = el)}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  <span>About</span>
                </li>
              )}
            </NavLink>

            <NavLink to="/services">
              {({ isActive }) => (
                <li
                  ref={(el) => (navItemsRef.current[2] = el)}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  Service
                </li>
              )}
            </NavLink>

            <NavLink to="/" className="logo sm-logo">
              <span>SK</span> SINAN
            </NavLink>

            <NavLink to="/resume">
              {({ isActive }) => (
                <li
                  ref={(el) => (navItemsRef.current[3] = el)}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  Resume
                </li>
              )}
            </NavLink>

            <NavLink to="/projects">
              {({ isActive }) => (
                <li
                  ref={(el) => (navItemsRef.current[4] = el)}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  Project
                </li>
              )}
            </NavLink>

            <NavLink to="/contact">
              {({ isActive }) => (
                <li
                  ref={(el) => (navItemsRef.current[5] = el)}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  Contact
                </li>
              )}
            </NavLink>
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default NavBar;
