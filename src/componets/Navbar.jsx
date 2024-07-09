import React, { useEffect, useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  // Add or remove the background to the navbar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`Navbar ${show && "Navbar_bg"}`}>
      <img
        src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Navbar;
