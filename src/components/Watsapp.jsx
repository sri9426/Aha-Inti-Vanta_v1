import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const Watsapp = () => {
  return (
    <motion.a
      href="https://wa.me/919949484591"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: -500 }} // start above screen
      animate={{ opacity: 1, y: 0 }}    // fall into place
      transition={{ duration: 1, ease: "easeOut", type: "spring" }}
      whileHover={{ scale: 1.2}}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-3 
                 bg-green-500 text-white font-semibold rounded-full shadow-lg 
                 hover:bg-green-600 transition duration-300 z-50 mb-9 
                 animate-[pulse_3s_ease-in-out_infinite]"
    >
      <FaWhatsapp className="text-2xl" />
      Order Now
    </motion.a>
  );
};
