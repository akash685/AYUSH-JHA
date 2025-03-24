import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <div className="mt-6 flex flex-col gap-3 text-white">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href={`mailto:${config.html.email}`} className="text-lg hover:underline">{config.html.email}</a>
          </div>
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <a href="https://www.linkedin.com/in/ayush-jha-583822171" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">linkedin.com/in/ayush-jha-583822171</a>
          </div>
        </div>

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
