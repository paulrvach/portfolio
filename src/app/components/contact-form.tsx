"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";

export function ContactForm() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setInputValue((prevValues) => {
          return { ...prevValues, name: value };
        });
        break;
      case "email":
        setInputValue((prevValues) => {
          return { ...prevValues, email: value };
        });
        break;
      case "message":
        setInputValue((prevValues) => {
          return { ...prevValues, message: value };
        });
        break;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="isolate  px-6  lg:px-8 mt-8">
      <form
        action="#"
        method="POST"
        className="mx-auto  max-w-xl text-background"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                onChange={handleInputChange}
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="NAME"
                style={{ backgroundColor: "rgba(255,255,255,0)" }} // Use rgba to set background color with transparency
                className="block  text-background w-full  border-0 px-3.5 py-2 shadow-sm  ring-inset ring-0 placeholder:text-background border-background border-b-2 rounded-none focus:ring-4  focus:ring-amber-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                onChange={handleInputChange}
                type="email"
                name="email"
                id="email"
                placeholder="EMAIL"
                autoComplete="email"
                style={{ backgroundColor: "rgba(255,255,255,0)" }} // Use rgba to set background color with transparency
                className="block w-full  border-0 px-3.5 py-2 shadow-sm  ring-inset ring-0  focus:ring-4  focus:ring-amber-400 border-b-2 placeholder:text-background border-background rounded-none sm:text-sm sm:leading-6 text-background"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <textarea
                onChange={handleInputChange}
                name="message"
                id="message"
                rows={4}
                style={{ backgroundColor: "rgba(255,255,255,0)" }} // Use rgba to set background color with transparency
                placeholder="MESSAGE"
                className="block w-full  border-0 px-3.5 py-2 shadow-sm  ring-inset ring-0 placeholder:text-background border-background border-b-2 rounded-none focus:ring-4  focus:ring-amber-400 sm:text-sm sm:leading-6 text-background bg-opacity-20 bg-amber-400/20"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-amber-800 shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            {"Let's talk"}
          </button>
        </div>
      </form>
    </div>
  );
}
