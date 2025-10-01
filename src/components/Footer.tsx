import { FaGlobe, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 relative z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo / Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold tracking-wide">NIEVed</h1>
          <p className="text-sm text-gray-400 mt-1">Heart Of NIE Students</p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://gulshankumar.xyz"
            target="_blank"
            className="text-xl text-gray-300 hover:text-white transition transform hover:scale-110"
            aria-label="Website"
          >
            <FaGlobe />
          </a>
          
          <a
            href="https://www.linkedin.com/in/gulshankumar0/"
            target="_blank"
            className="text-xl text-gray-300 hover:text-white transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/GulshanJha00/ved"
            target="_blank"
            className="text-xl text-gray-300 hover:text-white transition transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-6"></div>

      {/* Copyright */}
      <div className="container mx-auto text-center mt-4 px-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} NIEVed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
