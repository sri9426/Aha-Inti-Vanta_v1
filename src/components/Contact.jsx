import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center text-left relative section-frame px-6 md:px-20"
      
    >
      {/* Container for both divs */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-6xl">
        
        {/* Address Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 text-white text-center md:text-left md:ml-6"
        >
          <h2 className="text-4xl md:text-6xl font-village text-yellow-300 drop-shadow-lg mb-6">
            Contact Us
          </h2>
          <div className="space-y-4 text-lg md:text-xl font-light leading-relaxed text-white">
  <div className="flex items-center gap-3">
    <span className="text-yellow-300 text-2xl">📍</span>
    <span>14-1-52 Abadi jammikunta , jammikunta mandal , karimnagar 505129</span>
  </div>
  <div className="flex items-center gap-3">
    <span className="text-yellow-300 text-2xl">📞</span>
    <a href="tel:+919876543210" className="hover:underline">
      +91 8125293356
    </a>
  </div>
  <div className="flex items-center gap-3">
    <span className="text-yellow-300 text-2xl">✉️</span>
    <a href="mailto:info@ahaamma.com" className="hover:underline">
     ahaintivanta@gmail.com
    </a>
  </div>
</div>

        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          action="https://api.web3forms.com/submit"
          method="POST"
          className="md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-10 space-y-4 border border-white/30 mt-[-40px]"

        >
          <input type="hidden" name="access_key" value="ac94ef08-52d7-497d-b8de-c2b9da71cbbc" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
              className="w-full px-4 py-3 rounded-lg border border-white/30 
bg-white/20 backdrop-blur-sm 
text-white placeholder-white/70 
focus:ring-2 focus:ring-yellow-400 focus:outline-none 
transition duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
           className="w-full px-4 py-3 rounded-lg border border-white/30 
bg-white/20 backdrop-blur-sm 
text-white placeholder-white/70 
focus:ring-2 focus:ring-yellow-400 focus:outline-none 
transition duration-300"

          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg border border-white/30 
bg-white/20 backdrop-blur-sm 
text-white placeholder-white/70 
focus:ring-2 focus:ring-yellow-400 focus:outline-none 
transition duration-300"

          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Floating WhatsApp Button */}
      {/* <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-16 right-6 flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <FaWhatsapp className="text-2xl" />
        Chat
      </a> */}

   
    </section>
  );
}

export default Contact;
