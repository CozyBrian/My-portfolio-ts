"use client";
import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full flex flex-row justify-center mb-24 items-center"
    >
      <div className="w-full md:w-[880px] px-4 md:px-0 flex flex-col gap-10 text-tesla-text">
        <h2 className="text-3xl font-medium tracking-wide">CONTACT</h2>
        <div className="text-lg">
          <p>Want to get in touch?</p>
          <p>
            Write me at{" "}
            <a
              href="mailto:brian@briannewton.dev"
              className="hover:text-tesla-100 duration-200"
            >
              brian[at]briannewton.dev
            </a>{" "}
            :)
            {/* or{" "}
            <a
              href="/#"
              className="x-contact-me hover:text-tesla-100 duration-200"
            >
              shoot me a DM on X
            </a> */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
