import "./header.css";
import logo from "../../assets/images/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          
          {/* LEFT NAV (DESKTOP ONLY) */}
          <nav className="nav-left desktop-only">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              ABOUT
            </NavLink>
          </nav>

          {/* CENTER LOGO */}
          <Link to="/" className="header-logo">
            <img src={logo} alt="Karthik Photography" />
          </Link>

          {/* RIGHT SIDE */}
          <div className="header-right">
            {/* DESKTOP NAV */}
            <nav className="nav-right desktop-only">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                PORTFOLIO
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                CONTACT
              </NavLink>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              className="menu-button mobile-only"
              onClick={() => setMenuOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          ×
        </button>

        <nav className="drawer-nav">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
    </>
  );
}
