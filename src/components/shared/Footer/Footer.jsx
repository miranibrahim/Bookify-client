"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-white text-lg font-bold mb-2">Contact Us</h4>
          <p>123 Bookify St.</p>
          <p>Book City, BK 12345</p>
          <p>Email: info@bookify.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="mb-4 md:mb-0 text-center">
          <h4 className="text-white text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-4 justify-center">
            <a href="#" className="hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.126v-3.622h3.126v-2.671c0-3.066 1.871-4.731 4.602-4.731 1.309 0 2.438.097 2.764.141v3.207l-1.898.001c-1.489 0-1.776.707-1.776 1.744v2.279h3.555l-.465 3.622h-3.09v9.293h6.055c.732 0 1.324-.592 1.324-1.324v-21.35c0-.733-.592-1.325-1.324-1.325z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.797-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.896-.955-2.173-1.55-3.594-1.55-2.717 0-4.916 2.198-4.916 4.917 0 .386.044.762.128 1.124-4.083-.205-7.699-2.159-10.124-5.134-.423.724-.666 1.561-.666 2.456 0 1.693.862 3.188 2.173 4.067-.802-.026-1.557-.246-2.217-.614v.062c0 2.364 1.68 4.337 3.911 4.782-.409.111-.84.171-1.285.171-.314 0-.618-.031-.917-.089.619 1.933 2.419 3.336 4.554 3.375-1.67 1.31-3.778 2.092-6.066 2.092-.394 0-.779-.023-1.162-.068 2.161 1.385 4.729 2.192 7.494 2.192 8.988 0 13.905-7.447 13.905-13.904 0-.211-.005-.423-.014-.634.955-.689 1.786-1.549 2.444-2.528z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.004 2.002c-5.519 0-10 4.481-10 10.001 0 4.991 3.657 9.13 8.437 9.876.617.113.84-.267.84-.594 0-.294-.01-1.073-.016-2.106-3.326.724-4.026-1.605-4.026-1.605-.561-1.426-1.37-1.806-1.37-1.806-1.12-.764.085-.748.085-.748 1.236.087 1.887 1.27 1.887 1.27 1.101 1.885 2.89 1.34 3.591 1.025.113-.797.431-1.34.783-1.647-2.657-.302-5.455-1.328-5.455-5.92 0-1.306.465-2.373 1.234-3.211-.123-.303-.535-1.522.117-3.171 0 0 1.005-.322 3.3 1.229.956-.266 1.98-.399 3-.404 1.019.005 2.043.138 3 .404 2.292-1.551 3.295-1.229 3.295-1.229.653 1.649.241 2.868.119 3.171.769.838 1.233 1.905 1.233 3.211 0 4.603-2.803 5.614-5.467 5.911.444.383.838 1.138.838 2.296 0 1.658-.015 2.994-.015 3.401 0 .33.22.712.848.592 4.775-.748 8.428-4.888 8.428-9.874 0-5.52-4.481-10.001-10.001-10.001z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-4 md:mb-0 text-right">
          <h4 className="text-white text-lg font-bold mb-2">Quick Links</h4>
          <ul>
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#books" className="hover:text-white">
                Books
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-4 border-t border-gray-700 pt-4">
        <p className="text-center text-sm">
          &copy; 2024 Bookify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
