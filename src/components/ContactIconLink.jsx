import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="contact-link">
      <Link to="/contact">
        <FaAddressCard size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;