import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export const InstagramButton = () => {
  return (
    <motion.a
      href="https://www.instagram.com/aha_inti_vanta?igsh=YXBicnczODRidTl1"  // 🔗 Replace with your Insta link
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", type: "spring" }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 mb-9 left-6 flex items-center gap-2 px-5 py-3 
                 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 
                 text-white font-semibold rounded-full shadow-lg 
                 hover:opacity-90 transition duration-300 z-50"
    >
      <FaInstagram className="text-2xl" />
      Instagram
    </motion.a>
  );
};
