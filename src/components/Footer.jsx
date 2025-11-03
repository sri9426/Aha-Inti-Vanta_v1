import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between">
      {/* Left: Copyright */}
      <p className="text-sm md:text-base">
        © 2025  Aha Inti Vanta. All Rights Reserved.
      </p>

      {/* Right: Social Icons */}
      <div className="flex gap-6 mt-3 md:mt-0 text-xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/aha_inti_vanta?igsh=YXBicnczODRidTl1" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaTwitter />
        </a>
        
      </div>
    </footer>
  );
}

export default Footer;
