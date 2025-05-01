import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Govind Towing Services | 24/7 Emergency Towing in Navi Mumbai</title>
        <meta
          name="description"
          content="Govind Towing offers reliable and fast roadside assistance and towing services in Navi Mumbai. Available 24/7 to get you back on the road safely."
        />
        <meta
          name="keywords"
          content="towing services Navi Mumbai, emergency roadside help, 24/7 towing, Govind Towing, vehicle recovery Navi Mumbai"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.govindtowing.com/" />
      </Helmet>

      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-white px-6 relative"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/01/58/77/37/360_F_158773728_EC76CqwK8wh5eF2eiM4T3cKA6DpMD5ZH.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
          className="relative z-10 max-w-4xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-red-600 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
            24/7 Emergency Service
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Fast & Reliable Towing Services in Navi Mumbai <br />
            When You Need It Most
          </h1>
          <p className="text-base sm:text-lg mb-8 font-medium px-2 sm:px-4">
            Professional roadside assistance and towing services available 24/7.
            We'll get you back on the road quickly and safely.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="services" smooth={true} duration={800}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 hover:bg-red-700 border-white px-6 py-3 rounded-md font-bold w-full sm:w-auto"
              >
                Our Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Other Sections */}
      <div className="bg-white text-gray-900">
        <Services />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
