import { FaGlobe, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 relative z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo / Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold tracking-wide">NIEVed</h1>
          <p className="text-sm text-gray-400 mt-1">Empowering the next generation of engineers</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://nieved.vercel.app"
            target="_blank"
            className="text-xl text-gray-300 hover:text-white transition transform hover:scale-110"
            aria-label="Website"
          >
            <FaGlobe />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-xl text-gray-300 hover:text-white transition transform hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-xl text-gray-300 hover:text-white transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
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
