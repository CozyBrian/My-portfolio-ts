import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faServer } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const SkillView = () => {
  return (
    <div>
    <section className="py-20 dark:bg-gray-800 dark:text-gray-100">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap items-stretch justify-center -mx-4">
        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 justify-center hover:scale-105 duration-500">
          <div className="flex flex-col p-6 space-y-6 justify-center items-center rounded-2xl shadow sm:p-8 dark:bg-sky-600 dark:text-gray-100">
            <div className="space-y-2">
              <FontAwesomeIcon icon={faWindowMaximize} size="8x" /> 
            </div>
            <div className="font-bold text-2xl">Front-end Developer</div>
            <p className="leading-relaxed text-center">The technologies I use to make elegant simple user interfaces
                  and user experiences</p>
            <div className="font-bold text-lg">Languages I speak</div>
            <p className="leading-relaxed text-center">HTML, Scss, javascript, typescript</p>
            <div className="font-bold text-lg">Dev Tools</div>
            <ul className="flex-1 space-y-1">
            <li className="flex items-center justify-center space-x-2">                                
                React.js
              </li>
              <li className="flex items-center justify-center space-x-2">                                
                Next.js
              </li>
              <li className="flex items-center justify-center space-x-2">                                
                Flutter
              </li>
              <li className="flex items-center justify-center space-x-2">                                
                React Native
              </li>
              <li className="flex items-center justify-center space-x-2">                                
                Tailwindcss
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 justify-center hover:scale-105 duration-500">
          <div className="flex flex-col p-6 space-y-6 justify-center items-center rounded-2xl shadow sm:p-8 dark:bg-sky-600 dark:text-gray-100">
            <div className="space-y-2">
              <FontAwesomeIcon icon={faServer} size="8x" /> 
            </div>
            <div className="font-bold text-2xl">Back-end Developer</div>
            <p className="leading-relaxed text-center">Technologies I use to bring functionality to these beautiful
                  applications.</p>
            <div className="font-bold text-lg">Languages I speak</div>
            <p className="leading-relaxed text-center">python, javascript, java, c++</p>
            <div className="font-bold text-lg">Dev Tools</div>
            <ul className="flex-1 space-y-1">
            <li className="flex items-center justify-center space-x-2">                                
                Node.js
              </li>
              <li className="flex items-center justify-center space-x-2">                                
                Firebase
              </li>
              <li className="flex items-center justify-center space-x-2">                                
                PostgreSql
              </li>
              <li className="flex items-center justify-center space-x-2">                                
                Express.js
              </li>
              <li className="flex items-center justify-center space-x-2">                                
                MongoDB
              </li>
              <li className="flex items-center justify-center space-x-2">                                
                Git
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default SkillView;