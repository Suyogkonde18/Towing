import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', number: '', location: '' });
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setMessage({ type: 'success', text: 'Tow request submitted successfully!' });
      setForm({ name: '', number: '', location: '' });

      setTimeout(() => setMessage({ type: '', text: '' }), 3000); // Hide after 3s
    } catch (err) {
      setMessage({ type: 'error', text: 'Submission failed. Please try again.' });
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 relative">
      <motion.div
        className="w-full max-w-2xl bg-white p-12 rounded-lg shadow-xl border border-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Request a Tow
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {['name', 'number', 'location'].map((field, index) => (
            <motion.input
              key={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={field === 'name' ? 'Your Name' : field === 'number' ? 'Phone Number' : 'Location'}
              required
              className="w-full p-4 mb-6 text-lg font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            />
          ))}

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white p-4 rounded-lg text-lg font-bold hover:bg-blue-600 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>

      {/* Success/Error Popup */}
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
