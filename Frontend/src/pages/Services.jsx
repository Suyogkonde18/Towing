import { motion } from "framer-motion";

const Services = () => {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/im1.jpg",
    "/images/im2.jpg",
    "/images/im15.jpg",
    "/images/im4.jpg",
    "/images/im10.jpg",
    "/images/im6.jpg",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="px-6 py-16 max-w-full mx-auto font-poppins bg-gradient-to-br from-gray-100 to-blue-50">
      {/* Heading and Description */}
      <div className="flex flex-col items-center justify-center text-center mb-20">
        <motion.h1
          className="text-5xl font-extrabold text-blue-900 mb-6 tracking-tight leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          🚗 Our Towing Services in Pune
        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 font-medium max-w-3xl mb-8 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          Govind Express Way offers 24/7 reliable towing and roadside assistance services in Pune — whether it's an emergency breakdown, accident recovery, or scheduled vehicle transport, we are your trusted towing partner across Pune and nearby areas.
        </motion.p>

        <motion.ul
          className="list-disc list-inside text-xl space-y-4 font-semibold text-gray-800 mb-12 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          {[
            "Hydraulic lifter towing in Pune is used for normal breakdown cars",
            "Winch machine towing in Pune is used for accident cars or pothole recovery",
            "Bike towing in Pune is available for accidental or breakdown bikes/scooters",
            "Flatbed or zero-degree towing in Pune is ideal for costly or premium cars",
            "Heavy vehicle towing in Pune handles all types of buses, trucks, and commercial vehicles",
            "Battery jump-start service in Pune helps when your car battery is dead",
          ].map((service, index) => (
            <li key={index}>✓ {service}</li>
          ))}
        </motion.ul>

        <motion.p
          className="text-lg text-gray-600 font-medium max-w-3xl leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={3}
        >
          Our professional Pune-based towing team uses modern equipment to ensure safe and fast recovery of your vehicle. No matter the situation, your vehicle is in expert hands in Pune.
        </motion.p>
      </div>

      {/* Gallery Heading */}
      <motion.h2
        className="text-4xl font-bold text-center text-blue-800 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={4}
      >
        📸 Our Towing Gallery in Pune
      </motion.h2>

      {/* Photo Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={5}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-2xl overflow-hidden shadow-xl border-4 border-blue-200 hover:scale-105 transition-transform duration-300 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              src={src}
              alt={`Pune towing service ${index + 1}`}
              className="w-full h-72 object-cover hover:brightness-105 transition"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
