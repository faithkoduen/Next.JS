import React from "react";
const Footer = () => (
  <footer className="bg-black text-white p-8 mt-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
      {/* Exclusive and Subscribe */}
      <div>
        <h3 className="font-bold text-lg mb-2">Exclusive</h3>
        <span className="block mb-2">Subscribe</span>
        <span className="block text-sm mb-2">Get 10% off your first order</span>
        <form className="flex mt-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-l px-2 py-1 text-black"
          />
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-r"
            aria-label="Subscribe"
          >
            ➔
          </button>
        </form>
      </div>
      {/* Support */}
      <div>
        <h3 className="font-bold text-lg mb-2">Support</h3>
        <span className="block text-sm mb-1">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</span>
        <span className="block text-sm mb-1">exclusive@gmail.com</span>
        <span className="block text-sm mb-1">+88015-88888-9999</span>
      </div>
      {/* Account */}
      <div>
        <h3 className="font-bold text-lg mb-2">Account</h3>
        <ul>
          <li className="mb-1"><a href="#" className="hover:underline">My Account</a></li>
          <li className="mb-1"><a href="#" className="hover:underline">Login / Register</a></li>
          <li className="mb-1"><a href="#" className="hover:underline">Cart</a></li>
          <li className="mb-1"><a href="#" className="hover:underline">Wishlist</a></li>
          <li className="mb-1"><a href="#" className="hover:underline">Shop</a></li>
        </ul>
      </div>
      {/* Quick Link */}
      <div>
        <h3 className="font-bold text-lg mb-2">Quick Link</h3>
        <ul>
          <li className="mb-1"><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li className="mb-1"><a href="#" className="hover:underline">Terms Of Use</a></li>
          <li className="mb-1"><a href="#" className="hover:underline">FAQ</a></li>
          <li className="mb-1"><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      {/* Download App */}
      <div>
        <h3 className="font-bold text-lg mb-2">Download App</h3>
        <span className="text-xs mb-2 block">Save $3 with App New User Only</span>
        <div className="flex space-x-2 mb-3">
          {/* Replace src with your QR code image or use <img src="..." alt="QR" /> */}
          <div className="w-12 h-12 bg-white"></div>
          <div>
            <img src="/google-play-badge.png" alt="Get it on Google Play" className="mb-1 w-24"/>
            <img src="/app-store-badge.png" alt="Download on the App Store" className="w-24"/>
          </div>
        </div>
        <div className="flex space-x-3 text-lg">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Linkedin"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 flex justify-center">
      <span className="text-xs">© Copyright Rimel 2022. All right reserved</span>
    </div>
  </footer>
);
export default Footer;