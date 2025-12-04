import React from "react";
import { FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-gray-700">


         {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">
            <span className="text-blue-600">Career</span>
            <span className="text-green-600">Sense</span>
          </h2>
          <br/>
          <h4 className="font-semibold mb-4 text-gray-900 -ml-18 mt-4">General</h4>
          <ul className="space-y-2 -ml-18">
            <li><a href="#" className="hover:text-blue-600">Sign Up</a></li>
            <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Developers</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 mt-18">Browse LinkedIn</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Learning</a></li>
            <li><a href="#" className="hover:text-blue-600">Jobs</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 mt-18">Business Solutions</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Talent</a></li>
            <li><a href="#" className="hover:text-blue-600">Marketing</a></li>
            <li><a href="#" className="hover:text-blue-600">Learning</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 mt-18">Directories</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Members</a></li>
            <li><a href="#" className="hover:text-blue-600">Jobs</a></li>
            <li><a href="#" className="hover:text-blue-600">Companies</a></li>
            <li><a href="#" className="hover:text-blue-600">Featured</a></li>
            <li><a href="#" className="hover:text-blue-600">Learning</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      {/* <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-600">
        <p>
          <span className="font-bold text-blue-600 text-xl">Career</span>
          <span className="font-bold text-green-600 text-xl">Sense</span> © copyright 2025
        </p> */}
        
        {/* Social Icons */}
        {/* <div className="flex justify-center gap-6 mt-3 text-gray-500">
          <a href="#" className="hover:text-blue-500"><FaTwitter size={18} /></a>
          <a href="#" className="hover:text-gray-800"><FaGithub size={18} /></a>
          <a href="#" className="hover:text-blue-700"><FaFacebook size={18} /></a>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;