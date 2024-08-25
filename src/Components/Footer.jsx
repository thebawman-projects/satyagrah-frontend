import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,

} from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import terms from '../images/terms.pdf'
import { Link } from "react-router-dom";
import sankalplogo from '../images/sankalp.png'
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../staticData";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-slate-900 text-white">
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-8 sm:px-8 px-5 pt-4 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img className="object-cover h-16"
            src={sankalplogo}
            alt="SATYAGRAH"
          />
          <br />
          <p>"Education is the Key To Success"</p>
          <div className="flex items-center mt-[15px]">
            <a href="https://www.facebook.com/profile.php?id=100064861366081"><AiFillFacebook size={25} className="cursor-pointer" /></a>
            <a href="https://x.com/satyagrah_trust"><FaSquareXTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            /></a>
           <a href="https://www.instagram.com/satyagrah_educational_trust?igsh=MTNyaGJxdmp6d3ZpMg=="><AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            /></a>
          <a href="https://youtube.com/@satyagrahtrust?si=vVB6q7S9GkZYFxps"> <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            /></a>
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Quick Links</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
             
            </li>
          ))}
           <li>
              <a href={terms} target="_blank" rel="noreferrer"
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
              >
                Terms & Conditions
              </a>
              </li>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Useful Links</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Address</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-100 cursor-default
                   text-sm leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <div
        className="sm:grid-cols-2 lg:grid-cols-3
         text-center text-white text-sm pb-6">
        <span> Copyright &copy; {currentYear} Satyagrah Educational Trust All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
