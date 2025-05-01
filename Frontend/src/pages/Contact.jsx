import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [form, setForm] = useState({ name: '', number: '', location: '' });
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(4);
          const lon = position.coords.longitude.toFixed(4);
          setForm((prev) => ({
            ...prev,
            location: `Lat: ${lat}, Lon: ${lon}`,
          }));
        },
        (err) => console.log("Geolocation error:", err)
      );
    }
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setMessage({ type: 'success', text: 'Tow request submitted successfully!' });
      setForm({ name: '', number: '', location: '' });
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    } catch (err) {
      setMessage({ type: 'error', text: 'Submission failed. Please try again.' });
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Request Tow Truck Service Near You | QuickTow</title>
        <meta name="description" content="Stuck on the road? Request fast and reliable tow truck service near your location with QuickTow." />
        <meta name="keywords" content="tow truck near me, tow service, roadside assistance, emergency towing, QuickTow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Tow Truck Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "QuickTow",
              "areaServed": {
                "@type": "Place",
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": form.location.split(',')[0]?.split(':')[1]?.trim() || "",
                  "longitude": form.location.split(',')[1]?.split(':')[1]?.trim() || ""
                }
              }
            }
          })}
        </script>
      </Helmet>

      <motion.div
        className="w-full max-w-2xl bg-white px-8 py-10 rounded-xl shadow-xl border border-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Fast Tow Truck Services Near You
          </h1>
          <p className="text-gray-700 text-lg font-medium max-w-2xl mx-auto">
            Stuck on the road? Submit a tow request and get help from local roadside assistance services – quick and reliable.
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields */}
          {['name', 'number', 'location'].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            >
              <input
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={
                  field === 'name'
                    ? 'Your Name'
                    : field === 'number'
                    ? 'Phone Number'
                    : 'Location '
                }
                required
                className="w-full px-5 py-3 text-base font-semibold text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>
          ))}

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white px-5 py-3 rounded-md text-lg font-bold hover:bg-blue-700 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Submit Tow Request
          </motion.button>
        </form>
      </motion.div>

      {/* Message Popup */}
      <AnimatePresence>
        {message.text && (
          <motion.div
            className={`fixed top-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white font-semibold z-50 ${
              message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
