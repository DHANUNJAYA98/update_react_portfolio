import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from '../../Data';
import { socialIcons } from '../../Data';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div
            initial={{ y: -25 }}
            animate={{ y: -5 }}
            transition={{duration: 0.5}}
            className={scroll ? "header active" : "header"}
        >
            <div className="Nav_container">
                <div className="logo">
                    <h3>N</h3>
                </div>
                <ul className="nav_links">
                    {navLinks.map((navlink,index) => (
                        <li key={index}><a href={`#${navlink}`}>{navlink}</a></li>
                    ))}
                </ul>
                <div className="social_icons">
                    {socialIcons.map((socialIcon, index) => (
                        <div key={index}>{socialIcon}</div>
                    ))}
                </div>
                <div className="menu">
                    <HiMenuAlt4 onClick={() => setToggle(true)} />
                </div>
                <motion.div
                    className="closeMenu"
                    initial={{ scale: 0 }}
                    animate={{ scale: toggle ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Close menu content */}
                </motion.div>
                <motion.div
                    className="menuX"
                    initial={{ y: "-100vh" }}
                    animate={{ y: toggle ? "0" : "-100vh" }}
                    transition={{ duration: 0.5 }}
                >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                        {navLinks.map((navlink,index) => (
                            <li key={index}><a href={`#${navlink}`} onClick={() => setToggle(false)}>{navlink}</a></li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Navbar;
