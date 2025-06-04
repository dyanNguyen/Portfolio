import React, {useState} from "react";
import "./SideBar.css";
import { FaHome, FaUser, FaBriefcase, FaImages, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const SideBar = ({ isOpen, toggleSidebar, sidebarRef }) => {
  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
      <p className="logo">Atlas</p>
      <ul>
        <li onClick={toggleSidebar}><FaHome className="sidebar-icon"/><Link to="home" smooth={true}> Home</Link></li>
        <li onClick={toggleSidebar}><FaUser className="sidebar-icon"/><Link to="about" smooth={true}> About</Link></li>
        <li onClick={toggleSidebar}><FaBriefcase className="sidebar-icon"/><Link to="services" smooth={true}> Services</Link></li>
        <li onClick={toggleSidebar}><FaImages className="sidebar-icon"/><Link to="portfolio" smooth={true}> Portfolio</Link></li>
        <li onClick={toggleSidebar}><FaEnvelope className="sidebar-icon"/><Link to="resume" smooth={true}> Contact</Link></li>
      </ul>
    </div>
  );
};

export default SideBar;
