import { motion } from "framer-motion";

const Services = () => {
  const images = [
    {
      src: "/images/Service.jpg",
      caption: "Emergency roadside assistance for all vehicles in Navi Mumbai",
    },
    {
      src: "/images/old.jpg",
      caption: "Towing of vintage and old model vehicles with care",
    },
    {
      src: "/images/damage.jpg",
      caption: "Damaged vehicle recovery after accidents",
    },
    {
      src: "/images/im25.jpg",
      caption: "Reliable towing for all-weather vehicle breakdowns",
    },
    {
      src: "/images/im2.jpg",
      caption: "Midnight towing support across Navi Mumbai",
    },
    {
      src: "/images/im15.jpg",
      caption: "Professional handling of vehicle transportation",
    },
    {
      src: "/images/im4.jpg",
      caption: "Expert flatbed towing for luxury cars",
    },
    {
      src: "/images/truck.jpg",
      caption: "Heavy-duty towing for buses and trucks",
    },
    {
      src: "/images/im6.jpg",
      caption: "Fast and secure winch recovery from potholes",
    },
    {
      src: "/images/battery.jpg",
      caption: "Battery jump-start service when you’re stranded",
    },
    {
      src: "/images/bike.jpg",
      caption: "Scooter and bike towing for accident or breakdown",
    },
    {
      src: "/images/im29.jpg",
      caption: "Zero-degree flatbed towing for premium cars",
    },
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
      {/* Section Heading */}
      <div className="flex flex-col items-center justify-center text-center mb-20">
        <motion.h1
          className="text-5xl font-extrabold text-blue-900 mb-6 tracking-tight leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          🚗 Our Towing Services in Navi Mumbai
        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 font-medium max-w-3xl mb-8 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          Govind Express Way offers 24/7 reliable towing and roadside assistance
          services in Navi Mumbai — whether it's an emergency breakdown,
          accident recovery, or scheduled vehicle transport, we are your trusted
          towing partner across Navi Mumbai and nearby areas.
        </motion.p>

        <motion.ul
          className="list-disc list-inside text-xl space-y-4 font-bold text-gray-800 mb-12 max-w-2xl text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          {[
            "Hydraulic lifter towing in Navi Mumbai is used for normal breakdown cars",
            "Winch machine towing in Navi Mumbai is used for accident cars or pothole recovery",
            "Bike towing in Navi Mumbai is available for accidental or breakdown bikes/scooters",
            "Flatbed or zero-degree towing in Navi Mumbai is ideal for costly or premium cars",
            "Heavy vehicle towing in Navi Mumbai handles all types of buses, trucks, and commercial vehicles",
            "Battery jump-start service in Navi Mumbai helps when your car battery is dead",
            "Bike Towing for all kind of bike and scooty",
          ].map((service, index) => (
            <li key={index}>{service}</li>
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
          Our professional Navi Mumbai-based towing team uses modern equipment
          to ensure safe and fast recovery of your vehicle. No matter the
          situation, your vehicle is in expert hands in Navi Mumbai.
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
        📸 Our Towing Gallery in Navi Mumbai
      </motion.h2>

      {/* Image Gallery */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={5}
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-2xl overflow-hidden shadow-xl border-4 border-blue-200 bg-white hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              src={item.src}
              alt={`Towing image ${index + 1}`}
              className="w-full h-72 object-cover"
            />
            <div className="px-6 py-4 text-xl font-extrabold  text-center bg-blue-50 shadow-inner tracking-wide leading-snug">
              {item.caption}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
