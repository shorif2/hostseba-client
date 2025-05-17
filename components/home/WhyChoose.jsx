import React from "react";

const WhyChoose = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container mx-auto px-16 py-16 ">
        <h2 className=" text-center text-3xl font-bold pb-12">
          Why choose HostSeba Hosting?
        </h2>
        <div className="grid grid-cols-4 gap-8 ">
          {/* 1st cart */}
          <div className="shadow-md p-6 bg-white rounded-md ">
            <h3 className="text-xl font-medium pb-3">Money Back Guarantee</h3>
            <p className="text-[#374151]">
              We have 30 Days moneyback guarantee, so you can try our service
              without any risk. We'll refund you if you're not satisfied. Your
              satisfaction is our top priority.
            </p>
          </div>
          <div className="shadow-md p-6 bg-white rounded-md ">
            <h3 className="text-xl font-medium pb-3">Free Data Migration</h3>
            <p className="text-[#374151]">
              You can transfer your web hosting data from your previous hosting
              company to us. Our team can move your site to us. We offer free
              website data migration.
            </p>
          </div>
          <div className="shadow-md p-6 bg-white rounded-md ">
            <h3 className="text-xl font-medium pb-3">
              Softaculous script installer
            </h3>
            <p className="text-[#374151]">
              Instantly install scripts such as Wordpress in 3 easy to follow
              steps. Lots of software including Wordpress more then 451+. Easy
              to install softaculous tool.
            </p>
          </div>
          <div className="shadow-md p-6 bg-white rounded-md ">
            <h3 className="text-xl font-medium pb-3">Website Security</h3>
            <p className="text-[#374151]">
              Stop malware before it gets a chance to infect your site. We scan
              your site all content daily and automatically remove any detected
              malware. It's fully free.
            </p>
          </div>
          <div className="shadow-md p-6 bg-white rounded-md ">
            <h3 className="text-xl font-medium pb-3">
              99.9% Uptime Gurarantee
            </h3>
            <p className="text-[#374151]">
              We understand the uptime importance. Our servers are optimized
              with the latest software and are only hosted within the best
              datacenters, allowing us to achieve our 99.9% uptime guarantee.
            </p>
          </div>
          <div className="shadow-md p-6 bg-white rounded-md ">
            <h3 className="text-xl font-medium pb-3">
              High Performance SSD Servers
            </h3>
            <p className="text-[#374151]">
              We use only top of the line server hardware, and this reflects in
              the quality service that we provide. We are using Enterprise NVMe
              SSD hard drives in a Raid array to give your site that extra speed
              boost!
            </p>
          </div>
          <div className="shadow-md p-6 bg-white rounded-md ">
            <h3 className="text-xl font-medium pb-3">Free SSL Certificate</h3>
            <p className="text-[#374151]">
              Our all web hosting plan Life-time FREE Let's Encrypt SSL
              certificates with just a few clicks in your cPanel/Directadmin.
              Secure your customer data and improve SEO ranking by using this
              limited time offer!
            </p>
          </div>
          <div className="shadow-md p-6 bg-white rounded-md ">
            <h3 className="text-xl font-medium pb-3">Live support</h3>
            <p className="text-[#374151]">
              We provide office hours live chat support via facebook messenger,
              whatsapp, live chat, Call Support. Speak to our staff live in
              (GMT+6) 10AM - 9PM, 24/7 Ticket support and they will be happy to
              help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
