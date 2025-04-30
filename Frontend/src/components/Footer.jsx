import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8 font-semibold">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding */}
        <div className="flex flex-col items-start">
          <h2 className="text-3xl mb-4 font-extrabold text-yellow-400">Towing Services</h2>
          <p className="text-lg">Your trusted roadside partner, available 24/7 for all your towing needs.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl mb-4 font-semibold">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="/" className="text-lg hover:text-yellow-500 transition">Home</a></li>
            <li><a href="/about" className="text-lg hover:text-yellow-500 transition">About Us</a></li>
            <li><a href="/services" className="text-lg hover:text-yellow-500 transition">Services</a></li>
            <li><a href="/contact" className="text-lg hover:text-yellow-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl mb-4 font-semibold">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-lg">
              <FaPhoneAlt className="text-yellow-400" /> +91-9876543210
            </li>
            <li className="flex items-center gap-3 text-lg">
              <FaEnvelope className="text-yellow-400" /> support@towingservices.com
            </li>
            <li className="flex gap-6 mt-6">
              <a href="#" className="hover:text-yellow-500 transition">
                <FaFacebook size={25} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <FaInstagram size={25} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <FaTwitter size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-300 font-semibold">
        &copy; {new Date().getFullYear()} Towing Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
