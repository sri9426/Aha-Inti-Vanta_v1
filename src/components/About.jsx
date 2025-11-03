import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col items-center justify-center text-center relative px-6 py-16 section-frame"
      // style={{ backgroundImage: "url('/bg_image_new.png')" }}
    >
      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-village text-yellow-300 drop-shadow-lg mb-6 pt-5">
        About Us
      </h2>

    

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-300"
      >
        {/* Example with YouTube */}
        <iframe
          className="w-full h-full"
          src="videos/lemonpickle.mp4"
          title="About Amma's Kitchen"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Example with Local Video (instead of YouTube) */}
        {/* 
        <video className="w-full h-full object-cover" controls autoPlay muted loop>
          <source src="videos/lemonpickle.mp4" type="video/mp4" />
        </video>
        */}
      </motion.div>

        {/* Story */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl text-white font-light max-w-3xl leading-relaxed mb-8 pt-8"
      >
        Our journey began in Amma’s kitchen, where age-old recipes met the love
        of tradition. Every jar of pickle is prepared with natural ingredients,
        sun-dried to perfection, and stored in clay pots – just like the way our
        grandmothers made it. 🍋🌶️
      </motion.p>
    </section>
  );
}

export default About;
