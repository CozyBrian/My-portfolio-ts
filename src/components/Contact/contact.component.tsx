import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Oval } from "react-loader-spinner";

// contact interface
interface ContactInterface {
  name: string;
  email: string;
  message: string;
}

const ContactView = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactInterface>();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const onSubmit: SubmitHandler<ContactInterface> = (data) => {
    setIsLoading(true);
    emailjs
      .send(
        "service_c4fqdo8",
        "template_2rxlopw",
        { ...data },
        import.meta.env.VITE_APP_EMAILJS_KEY
      )
      .then(
        (result) => {
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const form: {
    title: string;
    type: "name" | "email" | "message";
    error_text: string;
  }[] = [
    { title: "Name", type: "name", error_text: "Name is required...🥲" },
    { title: "Email", type: "email", error_text: "Email is required...😅" },
  ];

  return (
    <section id="contact" className="pt-20 h-full bg-gray-800  text-gray-100 ">
      <div className="container px-4 mx-auto">
        <LayoutGroup>
          <motion.div
            layout="position"
            className="max-w-2xl mx-auto mb-8 text-center"
          >
            <h2 className="text-4xl font-bold lg:text-5xl">CONTACT ME</h2>
            <p className="font-bold tracking-wider uppercase text-sky-500">
              GET IN TOUCH
            </p>
          </motion.div>
          <motion.div
            layout="position"
            className="container flex justify-center items-center"
          >
            <AnimatePresence mode="wait">
              {!isEmailSent ? (
                <form
                  className="flex flex-col gap-3 w-[28rem]"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <LayoutGroup>
                    {form.map((item, i) => (
                      <LayoutGroup key={`form-input-${i}`}>
                        <motion.div
                          layout="position"
                          initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.2 }}
                          className="flex flex-col gap-2"
                        >
                          <LayoutGroup>
                            <motion.div
                              className="flex flex-col"
                              layout="position"
                            >
                              <label className="text-slate-100 pb-2">
                                {item.title}
                              </label>
                              <input
                                className="w-full p-2 border rounded-xl text-lg border-none outline-none bg-slate-600 focus:text-slate-800 text-slate-300 focus:bg-white focus:placeholder:text-gray-300 duration-150"
                                placeholder={item.title}
                                {...register(item.type, {
                                  required: item.error_text,
                                  pattern:
                                    item.type === "email"
                                      ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ // regex for email
                                      : undefined,
                                })}
                                aria-invalid={
                                  errors[item.type] ? "true" : "false"
                                }
                              />
                            </motion.div>
                          </LayoutGroup>
                          <AnimatePresence>
                            <>
                              {errors[item.type] && (
                                <motion.p
                                  layout="position"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="self-end text-sm text-red-400"
                                  role="alert"
                                >
                                  {errors[item.type]?.message}
                                </motion.p>
                              )}
                              {errors[item.type]?.type === "pattern" && (
                                <motion.p
                                  layout="position"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="self-end text-sm text-red-400"
                                  role="alert"
                                >
                                  Please enter a valid email address
                                </motion.p>
                              )}
                            </>
                          </AnimatePresence>
                        </motion.div>
                      </LayoutGroup>
                    ))}
                    <LayoutGroup>
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        layout="position"
                        className="flex flex-col gap-2"
                      >
                        <motion.div className="flex flex-col" layout="position">
                          <label className="text-slate-100 pb-2">Message</label>
                          <div className="rounded-xl overflow-clip">
                            <textarea
                              rows={4}
                              className="w-full p-2 border rounded-xl text-lg border-none outline-none bg-slate-600 focus:text-slate-800 text-slate-300 focus:bg-white focus:placeholder:text-gray-300 duration-150 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-sky-400/80"
                              placeholder="Message..."
                              {...register("message", {
                                required: "Message is Required...🥲",
                              })}
                            />
                          </div>
                        </motion.div>
                        <AnimatePresence>
                          {errors.message && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="self-end text-sm text-red-400"
                              role="alert"
                            >
                              {errors.message?.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </LayoutGroup>
                    <motion.div layout className="flex justify-center my-4">
                      <button
                        className="flex justify-center bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-slate-800 hover:text-slate-200 w-32 px-4 py-2 rounded-full font-bold tracking-wider uppercase text-xl duration-150"
                        type="submit"
                      >
                        {isLoading ? (
                          <Oval
                            height={24}
                            width={24}
                            strokeWidth={6}
                            color="rgba(255, 255, 255, 1)"
                            secondaryColor="rgba(255, 255, 255, 0.49)"
                          />
                        ) : (
                          "SUBMIT"
                        )}
                      </button>
                    </motion.div>
                  </LayoutGroup>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-[40vh] flex justify-center items-center"
                >
                  <p className="text-3xl uppercase font-bold">
                    {"Thank You for reaching out!🎉"
                      .split(" ")
                      .map((word, i) => (
                        <motion.span
                          initial={{}}
                          animate={{
                            fontSize: ["1.875rem", "2.125rem", "1.875rem"],
                            color: [
                              "rgb(255, 255, 255)",
                              "rgb(14, 165, 233)",
                              "rgb(255, 255, 255)",
                            ],
                          }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 }}
                          key={`word${i}`}
                        >
                          {word}
                          {` `}
                        </motion.span>
                      ))}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            layout="position"
            className="flex flex-col justify-center pt-6 lg:pt-0 mt-16"
          >
            <div className="flex justify-center space-x-4">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/CozyBrian"
                title="Github"
                className="flex items-center justify-center w-12 h-12 rounded-full duration-200 bg-sky-500 hover:bg-sky-700  text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-7 h-7"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:kwabenanewton02@gmail.com"
                title="Gmail"
                className="flex items-center justify-center w-12 h-12 rounded-full duration-200 bg-sky-500 hover:bg-sky-700 text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-7 h-7"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/brian-newton-b6b8231b8/"
                title="LinkedIn"
                className="flex items-center justify-center w-12 h-12 rounded-full duration-200 bg-sky-500 hover:bg-sky-700 text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default ContactView;
