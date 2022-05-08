import React from "react";

function FooterSection() {
  return (
    <footer className="bg-gradient-to-tl from-neutral-800 to-neutral-900 py-12">
      <div className="px-4 py-8 max-w-xl mx-auto">
        <div className="items-center border-4 border-red-500 rounded-md py-6 w-full bg-neutral-600 md:text-center">
          <h1 className="text-center font-semibold text-neutral-200 text-5xl mb-6">
            Contact Me
          </h1>
          <form
            className="w-full max-w-lg px-2"
            action="https://formsubmit.co/836bb4ac015cff38ad22a8a843b57cdb"
            method="post"
          >
            <input
              type="hidden"
              name="_subject"
              value="New email submission!"
            />
            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/4">
                <label
                  className="block text-neutral-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>
              <div className="md:w-3/4">
                <input
                  className="bg-neutral-200 appearance-none border-2 border-neutral-200 rounded w-full py-2 px-2 text-neutral-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                  id="email"
                  type="email"
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/4">
                <label
                  className="block text-neutral-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="full-name"
                >
                  Name
                </label>
              </div>
              <div className="md:w-3/4">
                <input
                  className="bg-neutral-200 appearance-none border-2 border-neutral-200 rounded w-full py-2 px-2 text-neutral-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                  id="name"
                  type="text"
                  name="name"
                  required
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/4">
                <label
                  className="block text-neutral-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="subject"
                >
                  Subject
                </label>
              </div>
              <div className="md:w-3/4">
                <input
                  className="bg-neutral-200 appearance-none border-2 border-neutral-200 rounded w-full py-2 px-2 text-neutral-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                  id="subject"
                  type="text"
                  name="subject"
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/4">
                <label
                  className="block text-neutral-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="message"
                >
                  Message
                </label>
              </div>
              <div className="md:w-3/4">
                <input
                  className="bg-neutral-200 appearance-none border-2 border-neutral-200 rounded w-full py-2 px-2 text-neutral-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                  id="message"
                  type="text"
                  name="message"
                  required
                />
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-full">
                <button
                  className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Send Email
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="pt-10">
          <ul className="list-none flex text-center px-10">
            <li className="social-btn">
              <a href="https://github.com/spenpeq" target="_blank">
                <i className="fab fa-github-square fa-3x"></i>
              </a>
            </li>
            <li className="social-btn">
              <a
                href="https://www.linkedin.com/in/spencer-pequegnat/"
                target="_blank"
              >
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
            </li>
            <li className="social-btn">
              <a href="mailto: spencer.peq@gmail.com">
                <i className="fas fa-envelope-square fa-3x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
