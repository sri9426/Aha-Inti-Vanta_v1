import { motion } from "framer-motion";

function Specials() {
  const specials = [
    {
      title: "Sweets 🍬",
      desc: "Traditional Andhra sweets made with pure ghee & love.",
      img: "/Mango.png",
    },
    {
      title: "Karam Podi 🌶️",
      desc: "A spicy, aromatic blend to elevate your rice & idlis.",
      img: "/images/karam_podi.jpg",
    },
    {
      title: "Roti Pachadi 🥗",
      desc: "Stone-ground chutneys packed with homemade goodness.",
      img: "/images/roti_pachadi.jpg",
    },
    {
      title: "Ooragai 🥭",
      desc: "Authentic Andhra-style pickles stored in clay jars.",
      img: "/images/ooragai.jpg",
    },
    {
      title: "Sweets 🍬",
      desc: "Traditional Andhra sweets made with pure ghee & love.",
      img: "/images/sweets.jpg",
    },
    {
      title: "Karam Podi 🌶️",
      desc: "A spicy, aromatic blend to elevate your rice & idlis.",
      img: "/images/karam_podi.jpg",
    },
    {
      title: "Roti Pachadi 🥗",
      desc: "Stone-ground chutneys packed with homemade goodness.",
      img: "/images/roti_pachadi.jpg",
    },
    {
      title: "Ooragai 🥭",
      desc: "Authentic Andhra-style pickles stored in clay jars.",
      img: "/images/ooragai.jpg",
    },
     {
      title: "Sweets 🍬",
      desc: "Traditional Andhra sweets made with pure ghee & love.",
      img: "/Mango.png",
    },
    {
      title: "Karam Podi 🌶️",
      desc: "A spicy, aromatic blend to elevate your rice & idlis.",
      img: "/images/karam_podi.jpg",
    },
    {
      title: "Roti Pachadi 🥗",
      desc: "Stone-ground chutneys packed with homemade goodness.",
      img: "/images/roti_pachadi.jpg",
    },
    {
      title: "Ooragai 🥭",
      desc: "Authentic Andhra-style pickles stored in clay jars.",
      img: "/images/ooragai.jpg",
    },
    {
      title: "Sweets 🍬",
      desc: "Traditional Andhra sweets made with pure ghee & love.",
      img: "/images/sweets.jpg",
    },
    {
      title: "Karam Podi 🌶️",
      desc: "A spicy, aromatic blend to elevate your rice & idlis.",
      img: "/images/karam_podi.jpg",
    },
    {
      title: "Roti Pachadi 🥗",
      desc: "Stone-ground chutneys packed with homemade goodness.",
      img: "/images/roti_pachadi.jpg",
    },
    {
      title: "Ooragai 🥭",
      desc: "Authentic Andhra-style pickles stored in clay jars.",
      img: "/images/ooragai.jpg",
    },
  ];

  return (
    <section
      id="specials"
      className="min-h-screen w-full flex flex-col items-center justify-center text-center relative px-6 py-16 section-frame"
      // style={{ backgroundImage: "url('/bg_image_new.png')" }}
    >
      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-village text-yellow-300 drop-shadow-lg mb-6 pt-5">
        Authentic Specials
      </h2>
      <p className="text-lg md:text-xl text-white font-light max-w-2xl mb-12">
        Don’t miss our authentic Gongura pickle and Andhra-style thali ✨
      </p>

      {/* Specials Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl w-full">
        {specials.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 
                       rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl 
                       hover:border-yellow-400 transition"
          >
            {/* Item Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-300 mb-3">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
