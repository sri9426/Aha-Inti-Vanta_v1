import { motion } from "framer-motion";

function Menu() {
  const menuItems = [
    {
      title: "Lemon Pickle 🍋 ",
      description: "Authentic style Lemon pickle.",
      img: "/pickles/lemon.JPG",
    },
    {
      title: "Mango Pickle 🥭",
      description: "Classic spicy mango pickle made with sun-dried mangoes.",
      img: "/pickles/aavakai.JPG",
    },
    {
      title: "Drum Stick Pickle",
      description: "Drum stick pickle",
      img: "/pickles/drumstick.JPG",
    },
    {
      title: "Tomato",
      description: "Tomato pickle",
      img: "/pickles/tomoto.JPG",
    },
    {
      title: "Red Chilli Pickle🌶️",
      description: "Spicy podi powders that bring a fiery punch to your meals.",
      img: "/pickles/redchilli.JPG",
    },
    {
      title: "Roti Pachadi 🥗",
      description: "Stone-ground chutneys that taste fresh and homely.",
      img: "/images/roti-pachadi.jpg",
    },
    {
      title: "Ooragai 🍯",
      description: "Pickles preserved in clay jars for long-lasting taste.",
      img: "/images/ooragai.jpg",
    },
    {
      title: "Gongura Pickle 🌿",
      description: "Authentic Andhra-style Gongura pickle with a tangy twist.",
      img: "/images/gongura.jpg",
    },
    {
      title: "Mango Pickle 🥭",
      description: "Classic spicy mango pickle made with sun-dried mangoes.",
      img: "/images/mango.jpg",
    },
    {
      title: "Mixed Pickles 🍋",
      description: "A combination of seasonal veggies & fruits in rich spices.",
      img: "/images/mixed-pickle.jpg",
    },
    {
      title: "Sweets 🍬",
      description: "Traditional Andhra sweets made with pure ghee & love.",
      img: "/images/sweets.jpg",
    },
    {
      title: "Karam Podi 🌶️",
      description: "Spicy podi powders that bring a fiery punch to your meals.",
      img: "/images/podi.jpg",
    },
    {
      title: "Roti Pachadi 🥗",
      description: "Stone-ground chutneys that taste fresh and homely.",
      img: "/images/roti-pachadi.jpg",
    },
    {
      title: "Ooragai 🍯",
      description: "Pickles preserved in clay jars for long-lasting taste.",
      img: "/images/ooragai.jpg",
    },
    {
      title: "Roti Pachadi 🥗",
      description: "Stone-ground chutneys that taste fresh and homely.",
      img: "/images/roti-pachadi.jpg",
    },
    {
      title: "Ooragai 🍯",
      description: "Pickles preserved in clay jars for long-lasting taste.",
      img: "/images/ooragai.jpg",
    },
  ];

  return (
    <section
      id="menu"
      className="min-h-screen w-full flex flex-col items-center justify-center text-center relative px-6 py-16 section-frame bg-opacity-80"
      // style={{ backgroundImage: "url('/bg_image_new.png')" }}
    >
      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-village text-yellow-300 drop-shadow-lg mb-6 pt-5">
        Our Menu
      </h2>
      <p className="text-lg md:text-xl text-white font-light max-w-2xl mb-12">
        Explore our wide range of South Indian delicacies 🍲
      </p>

      {/* Menu Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl w-full">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 
                       rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl 
                       hover:border-yellow-400 transition flex flex-col h-[350px]"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            {/* Text */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <h3 className="text-2xl font-bold text-yellow-300 mb-3">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
