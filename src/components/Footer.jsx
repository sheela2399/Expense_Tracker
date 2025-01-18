import React from "react";
import { IoHeartOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer>
      <h2>
        Made With <span className="heart-icon">❤️</span> by{" "}
        <a
          href="https://github.com/sheela2399"
          target="_blank"
          rel="noopener noreferrer"
          className="myName"
        >
          Sheela Mishra
        </a>
      </h2>
    </footer>
  );
}

export default Footer;
