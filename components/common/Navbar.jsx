import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto px-16 py-[18.25px]  ">
      <div className="flex justify-between px-4.75">
        {/* logo */}
        <div className="">
          <Link className="text-blue-600 font-bold text-xl" href="/">
            HostSeba
          </Link>
        </div>
        {/* menue */}
        <div className="flex justify-center items-center gap-6 text-[#374151]">
          <Link href="/">Home</Link>
          <Link href="/domains">Domains</Link>
          <Link href="/hosting">Hosting</Link>
          <Link href="/bundles">Bundles</Link>
          <Link href="/about">About</Link>
        </div>
        {/* action button */}
        <div className="">
          <Link
            className="px-4 py-2.75 bg-black text-white text-[14px]  font-medium rounded-md"
            href="/login"
          >
            Login / Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
