import { motion } from 'framer-motion';

const About = () => (
  <div className="about-container text-gray-900 min-h-screen py-16 px-6 bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100">
    <div className="container mx-auto text-center">
      {/* Title Section */}
      <motion.h2
        className="text-5xl font-bold tracking-wider mb-12 text-blue-600 font-poppins"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Govind Towing – Trusted Towing Service in Navi Mumbai
      </motion.h2>

      {/* Introduction Section */}
      <motion.p
        className="mt-6 text-xl max-w-3xl mx-auto font-bold mb-12 text-gray-800 font-roboto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        We are a dedicated team of professional towing experts in Navi Mumbai, offering 24/7 towing and roadside assistance. Whether you're stuck on the highway or need scheduled towing, we are here to serve Navi Mumbai with fast, safe, and reliable solutions.
      </motion.p>

      {/* Company History Box */}
      <motion.div
        className="float-box p-8 border-2 border-gray-300 rounded-lg shadow-lg mb-16 hover:scale-105 transform transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-3xl font-extrabold mb-4 text-green-600 font-poppins">Our History in Navi Mumbai</h3>
        <p className="text-lg text-gray-700 font-roboto">
          Established in 2010, Govind Towing has grown into one of Navi Mumbai’s most trusted providers of towing and roadside assistance. With years of experience across the city, we’ve earned a reputation for excellence in vehicle recovery services in Navi Mumbai.
        </p>
      </motion.div>

      {/* Our Mission Box */}
      <motion.div
        className="float-box p-8 border-2 border-gray-300 rounded-lg shadow-lg mb-16 hover:scale-105 transform transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h3 className="text-3xl font-extrabold mb-4 text-yellow-600 font-poppins">Our Mission in Navi Mumbai</h3>
        <p className="text-lg text-gray-700 font-roboto">
          At Govind Towing, our mission is simple: to provide exceptional and fast towing services in Navi Mumbai. Whether you're in Vashi, Nerul, or anywhere in the Navi Mumbai region, we prioritize safety, efficiency, and customer satisfaction in every service.
        </p>
      </motion.div>

      {/* Our Values Box */}
      <motion.div
        className="float-box p-8 border-2 border-gray-300 rounded-lg shadow-lg mb-16 hover:scale-105 transform transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <h3 className="text-3xl font-extrabold mb-4 text-pink-600 font-poppins">Our Core Values</h3>
        <ul className="text-lg list-disc pl-6 space-y-4 text-gray-700 font-roboto">
          <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 1 }}>
            <strong className="text-blue-500">Customer-Centered:</strong> Our customers in Navi Mumbai are at the heart of everything we do.
          </motion.li>
          <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}>
            <strong className="text-blue-500">Safety First:</strong> We ensure the safety of your vehicle on Navi Mumbai’s roads.
          </motion.li>
          <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.3, duration: 1 }}>
            <strong className="text-blue-500">Efficiency:</strong> We provide fast response across all areas in Navi Mumbai.
          </motion.li>
          <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}>
            <strong className="text-blue-500">Reliability:</strong> We’re a trusted partner for thousands of Navi Mumbai residents and businesses.
          </motion.li>
        </ul>
      </motion.div>

      {/* Team Introduction Box */}
      <motion.div
        className="float-box p-8 border-2 border-gray-300 rounded-lg shadow-lg mb-16 hover:scale-105 transform transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h3 className="text-3xl font-extrabold mb-4 text-teal-600 font-poppins">Meet Our Navi Mumbai-Based Team</h3>
        <p className="text-lg text-gray-700 font-roboto">
          Our Navi Mumbai-based team consists of skilled towing professionals with deep knowledge of local roads and traffic conditions. We’re always ready to assist across Navi Mumbai—day or night.
        </p>

        {/* Flexbox for team members */}
        <div className="flex justify-center space-x-8 mt-6">
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold text-gray-800">Vasu</h4>
            <p className="text-gray-600">Mobile: 9082252403, 7977543752</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold text-gray-800">Ramesh</h4>
            <p className="text-gray-600">Mobile: 8898891718, 9930302789</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold text-gray-800">Service Support</h4>
            <p className="text-gray-600">Mobile: 9321202789</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default About;
