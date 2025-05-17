import React from "react";

const WhyUs = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container mx-auto px-16 py-16 ">
        <div className="grid grid-cols-4 gap-8">
          {/* 1st div */}
          <div className="shadow-md p-6 bg-white rounded-md ">
            <h3 className="text-xl font-medium pb-3">Free Migrations</h3>
            <p className="text-[#374151]">
              Moving to HostSeba is easy, we'll take care of the migration for
              you for FREE
            </p>
          </div>
          <div className="shadow-md p-6 bg-white rounded-md ">
            <h3 className="text-xl font-medium pb-3">24/7 support</h3>
            <p className="text-[#374151]">
              Our team is always online 24/7 for your support and customer
              service.
            </p>
          </div>
          <div className="shadow-md p-6 bg-white rounded-md ">
            <h3 className="text-xl font-medium pb-3">Free Daily backup</h3>
            <p className="text-[#374151]">
              We automatically create daily, weekly backups of your entire
              websites.
            </p>
          </div>
          <div className="shadow-md p-6 bg-white rounded-md ">
            <h3 className="text-xl font-medium pb-3">30 days guarantee</h3>
            <p className="text-[#374151]">
              Give our high-speed hosting service a try completely risk-free!
              money back guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
