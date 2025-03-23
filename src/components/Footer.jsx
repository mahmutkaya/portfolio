import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { socialMediaAccounts } from "../utils/commons";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container text-center">
        {/* Social Media Icons */}
        <div className="social-accounts">
          <a
            href={socialMediaAccounts.github.link}
            target="_blank"
            rel="noopener noreferrer"
            className="icons"
          >
            <FaGithub />
          </a>
          <a
            href={socialMediaAccounts.linkedin.link}
            target="_blank"
            rel="noopener noreferrer"
            className="icons"
          >
            <FaLinkedin />
          </a>
          <a
            href={socialMediaAccounts.twitter.link}
            target="_blank"
            rel="noopener noreferrer"
            className="icons"
          >
            <FaSquareXTwitter />
          </a>
          <Link to="/contact" className="icons">
            <FaEnvelope />
          </Link>
        </div>

        {/* Copyright Notice */}
        <div className="mt-3">
          <p className="mb-0" style={{ fontSize: "1.2em" }}>
            &copy; {new Date().getFullYear()} Mahmut Kaya. All rights reserved.
          </p>
        </div>

        {/* Link to Contact Page */}
        <div className="mt-2">
          <Link to="/contact" style={{ color: "unset", textDecoration: "none" }}>
            <p style={{ fontSize: "1.2em" }}>Contact Me</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;