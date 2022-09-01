import React from "react";

const ContactView = () => {
  return (
    <section id="contact" className="py-20  bg-gray-800  text-gray-100 ">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">CONTACT ME</h2>
        </div>
        {/* <div className="flex flex-wrap items-stretch justify-center -mx-4">
          <button type="button" className="flex items-center justify-center p-2 font-semibold rounded-sm w-36  bg-sky-500  text-gray-900">
            Contact Me
          </button>
        </div> */}
        <div className="flex flex-col justify-center pt-6 lg:pt-0 mt-4">
          <div className="flex justify-center space-x-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/CozyBrian"
              title="Github"
              className="flex items-center justify-center w-20 h-20 rounded-full sm:w-24 sm:h-24 duration-200 bg-sky-500 hover:bg-sky-700  text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-10 h-10"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:kwabenanewton02@gmail.com"
              title="Gmail"
              className="flex items-center justify-center w-20 h-20 rounded-full sm:w-24 sm:h-24 duration-200 bg-sky-500 hover:bg-sky-700 text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-10 h-10"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/brian-newton-b6b8231b8/"
              title="LinkedIn"
              className="flex items-center justify-center w-20 h-20 rounded-full sm:w-24 sm:h-24 duration-200 bg-sky-500 hover:bg-sky-700 text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactView;
