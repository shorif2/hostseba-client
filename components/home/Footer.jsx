import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div className="bg-[#1F2937] text-gray-300">
      <div className="container mx-auto xl:px-16 py-12 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 px-5">
          {/* logo */}
          <div>
            <h1 className="text-xl font-bold pb-4 text-white">HostSeba</h1>
            <p>
              Premium web hosting and domain services for businesses of all
              sizes.
            </p>
            <div className="pt-4">
              <p>facebook</p>
              <p>twitter</p>
            </div>
          </div>
          {/* service */}
          <div>
            <h2 className="text-lg font-medium pb-4 text-white">Services</h2>
            <div className="space-y-2">
              <p>Domain Registration</p>
              <p>Web Hosting</p>
              <p>VPS Hosting</p>
              <p>Managed Wordpress</p>
              <p>Email Hosting</p>
            </div>
          </div>
          {/* service */}
          <div>
            <h2 className="text-lg font-medium pb-4 text-white">Support</h2>
            <div className="space-y-2">
              <p>Help Center</p>
              <p>Ticket System</p>
              <p>Knowledge Base</p>
              <p>Community Forum</p>
              <p>Contact Us</p>
            </div>
          </div>
          {/* Contact */}
          <div>
            <h2 className="text-lg font-medium pb-4 text-white">Contact</h2>
            <div className="space-y-2">
              <p>123 Hosting Street</p>
              <p>Webville, WB 12345</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Email: support@hostseba.com</p>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
