import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#194a9a] text-white text-xs sm:text-sm py-2 font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 px-4 text-center sm:text-left">
      
      {/* Mobile View: Email + Phone only */}
      <div className="flex sm:hidden flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-1">
          <MdEmail className="text-[#e30613]" />
          <a href="mailto:info@leptisgroups.com" className="hover:underline">
            info@leptisgroups.com
          </a>
        </div>

        <div className="text-lg">|</div>

        <div className="flex items-center gap-1">
          <FiPhone className="text-[#e30613]" />
          <a href="tel:+9742505549" className="hover:underline">
            +97 4 250 5549
          </a>
        </div>
      </div>

      {/* Desktop View: Full bar */}
      <div className="hidden sm:flex flex-wrap items-center justify-center gap-5">
        <div className="flex items-center gap-1">
          <MdLocationOn className="text-[#e30613]" />
          <span>Dubai / UAE</span>
        </div>

        <div className="text-lg">|</div>

        <div className="flex items-center gap-1">
          <MdEmail className="text-[#e30613]" />
          <a href="mailto:info@leptisgroups.com" className="hover:underline">
            info@leptisgroups.com
          </a>
        </div>

        <div className="text-lg">|</div>

        <div className="flex items-center gap-1">
          <FiPhone className="text-[#e30613]" />
          <a href="tel:+9742505549" className="hover:underline">
            +97 4 250 5549
          </a>
        </div>

        <div className="text-lg">|</div>

        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/share/19u51ph8vv/" className="hover:text-[#e30613] transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/leptis-groups/" className="hover:text-[#e30613] transition-colors">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
