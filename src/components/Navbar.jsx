/**
 * @copyright 2024 CodeWithHaiderr
 * @license Apache-2.0
 */

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;

    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(() => {
    initActiveBox();

    const handleResize = () => initActiveBox();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Services",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  useEffect(() => {
    const sectionIds = ["home", "about", "reviews", "work", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // account for fixed header height
      let currentId = sectionIds[0];

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          currentId = id;
        }
      });

      const currentLink = document.querySelector(
        `.navbar a[href="#${currentId}"]`
      );

      if (currentLink && lastActiveLink.current !== currentLink) {
        lastActiveLink.current?.classList.remove("active");
        currentLink.classList.add("active");
        lastActiveLink.current = currentLink;
        initActiveBox();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target; 

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';
  }

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a href={link} key={key} className={className} ref={ref} onClick={activeCurrentLink}>
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.PropTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
