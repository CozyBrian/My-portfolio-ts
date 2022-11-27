import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faWindowMaximize, faServer } from "@fortawesome/free-solid-svg-icons";
import {
  BElanguages,
  BETechnologies,
  FElanguages,
  FETechnologies,
} from "../../constants";

const SkillView = () => {
  return (
    <div>
      <section className="py-20 text-gray-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-stretch justify-center -mx-4">
            <div className="flex w-full mb-8 mx-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 justify-center hover:scale-105 duration-500">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="flex flex-col p-6 space-y-6 justify-center items-center rounded-2xl shadow sm:p-8 border-solid border border-sky-600 hover:shadow-sky-400 hover:bg-sky-600 duration-500 text-gray-100"
              >
                <div className="space-y-2">
                  <FontAwesomeIcon icon={faWindowMaximize} size="8x" />
                </div>
                <div className="font-bold text-2xl">Front-end Developer</div>
                <p className="leading-relaxed text-center">
                  The technologies I use to make elegant simple user interfaces
                  and user experiences
                </p>
                <div className="font-bold text-lg">Languages</div>
                <div className="flex flex-row gap-4 leading-relaxed text-center">
                  {FElanguages.map((item, i) => (
                    <div
                      className="flex flex-col items-center justify-center"
                      key={i}
                    >
                      <img className="h-12" src={item.src} alt={item.title} />
                    </div>
                  ))}
                </div>
                <div className="font-bold text-lg">Dev Technologies</div>
                <ul className="grid grid-cols-3 gap-4">
                  {FETechnologies.map((item, i) => (
                    <li
                      className="flex flex-col items-center justify-center"
                      key={i}
                    >
                      <img
                        className="h-12 mb-2"
                        src={item.src}
                        alt={item.title}
                      />
                      <p className="text-sm">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="flex w-full mb-8 mx-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 justify-center hover:scale-105 duration-500">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="flex flex-col p-6 space-y-6 justify-center items-center rounded-2xl shadow sm:p-8 border-solid border border-sky-600 hover:shadow-sky-400 hover:bg-sky-600 duration-500 text-gray-100"
              >
                <div className="space-y-2">
                  <FontAwesomeIcon icon={faServer} size="8x" />
                </div>
                <div className="font-bold text-2xl">Back-end Developer</div>
                <p className="leading-relaxed text-center">
                  Technologies I use to bring functionality to these beautiful
                  applications.
                </p>
                <div className="font-bold text-lg">Languages I speak</div>
                <div className="flex flex-row gap-4 leading-relaxed text-center">
                  {BElanguages.map((item, i) => (
                    <div
                      className="flex flex-col items-center justify-center"
                      key={i}
                    >
                      <img className="h-12" src={item.src} alt={item.title} />
                    </div>
                  ))}
                </div>
                <div className="font-bold text-lg">Dev Technologies</div>
                <ul className="grid grid-cols-3 gap-4">
                  {BETechnologies.map((item, i) => (
                    <li
                      className="flex flex-col items-center justify-center"
                      key={i}
                    >
                      <img
                        className="h-12 mb-2"
                        src={item.src}
                        alt={item.title}
                      />
                      <p className="text-sm">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillView;
