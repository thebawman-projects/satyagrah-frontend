import React from "react";
import { motion } from "framer-motion";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import terms from '../images/terms.pdf';
import { Link } from "react-router-dom";
import sankalplogo from '../images/sankalp.png';
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../staticData";

const currentYear = new Date().getFullYear();

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-12 pb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Social */}
          <motion.div 
            className="flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <img 
                className="h-16 w-auto object-contain"
                src={sankalplogo}
                alt="Satyagrah"
              />
            </motion.div>
            <motion.p 
              className="mt-4 text-center md:text-left text-gray-300 italic"
              variants={itemVariants}
            >
              "Education is the Key To Success"
            </motion.p>
            <motion.div 
              className="flex items-center mt-6 space-x-4"
              variants={itemVariants}
            >
              {[
                { icon: <AiFillFacebook size={24} />, url: "https://www.facebook.com/profile.php?id=100064861366081" },
                { icon: <FaSquareXTwitter size={24} />, url: "https://x.com/satyagrah_trust" },
                { icon: <AiFillInstagram size={24} />, url: "https://www.instagram.com/satyagrah_educational_trust?igsh=MTNyaGJxdmp6d3ZpMg==" },
                { icon: <AiFillYoutube size={24} />, url: "https://youtube.com/@satyagrahtrust?si=vVB6q7S9GkZYFxps" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-lg font-semibold mb-4 text-white"
              variants={itemVariants}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              {[...footerProductLinks, { name: "Terms & Conditions", link: terms }].map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  {link.link === terms ? (
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.link}
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Useful Links */}
          <motion.div 
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-lg font-semibold mb-4 text-white"
              variants={itemVariants}
            >
              Useful Links
            </motion.h3>
            <ul className="space-y-2">
              {footercompanyLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={link.link}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div 
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-lg font-semibold mb-4 text-white"
              variants={itemVariants}
            >
              Address
            </motion.h3>
            <ul className="space-y-2">
              {footerSupportLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                >
                  <span className="text-gray-300 text-sm">
                    {link.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr 
          className="border-gray-700 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        {/* Copyright */}
        <motion.div 
          className="text-center text-gray-400 text-sm"
          variants={itemVariants}
        >
          Copyright &copy; {currentYear} Satyagrah Educational Trust. All Rights Reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
