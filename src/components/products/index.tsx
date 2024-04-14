import Link from "next/link";
import React from "react";

const ProductsView = () => {
  return (
    <section className="md:min-h-[300px] mb-20 w-full flex flex-row justify-center items-center">
      <div className="w-screen md:w-[880px] md:min-h-[300px] py-8 flex flex-col gap-8">
        <h2 className="pl-4 md:pl-0 text-tesla-text text-3xl font-semibold tracking-wide uppercase">
          PRODUCTs
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 px-4 md:px-0">
          <Link
            href="/NowPlayr"
            className="bg-tesla-800 flex flex-col justify-center gap-2 outline outline-1 outline-tesla-400 hover:outline-tesla-300 shadow-tesla-800 text-tesla-300 font-medium p-4 rounded-lg duration-200"
          >
            <p className="text-xl text-tesla-200">NowPlayr</p>
            <p className=" text-tesla-300">
              The beautiful, sleek, open-source music preview for macOS. Your
              music, at a glance.
            </p>
          </Link>
        </div>
        <p className="text-tesla-400 pl-4 md:pl-0">More coming soon...</p>
      </div>
    </section>
  );
};

export default ProductsView;
