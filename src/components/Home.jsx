function Home() {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center text-left relative section-frame px-6 md:px-20"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Left Side: Text */}
      <div className="flex-1 flex flex-col justify-center items-start text-center md:text-left pl-10 space-y-6">
        <p className="text-5xl md:text-7xl font-village text-yellow-300 drop-shadow-lg">
          Authentic Home Food
        </p>
        <p className="text-lg md:text-xl text-white font-light">
          Homemade goodness, preserved in every jar.
        </p>
        <a
          href="#menu"
          className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition duration-300"
        >
          Explore Menu
        </a>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <img
          src="/Mani_image.png"
          alt="Authentic Home Food"
          className="rounded-xl  max-h-[450px] object-contain"
        />
      </div>
    </section>
  );
}

export default Home;
