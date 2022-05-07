import React from "react";

function App() {
  return (
    <div className="bg-gray-300">
      <div className="bg-gradient-to-tl from-neutral-800 to-neutral-900">
        <div className="px-4 py-16 max-w-md mx-auto md:grid md:grid-cols-3 md:max-w-3xl md:py-24">
          <img
            className="mx-auto h-60 bg-neutral-800 rounded-full border-2 p-1 border-neutral-100 shadow-xl object-cover md:h-60 md:col-span-1"
            src="/img/profile-pic.jpg"
            alt="Spencer's profile image"
          />
          <div className="md:col-span-2">
            <h1 className="tracking-tighter text-center mt-2 text-7xl font-bold text-neutral-400 md:mt-5">
              Spencer Pequegnat
            </h1>
            <p className="mt-6 text-neutral-400 font-semibold pl-8">
              Hey! My name is Spencer and I'm a fullstack developer and physics
              graduate from San Diego. Check out my projects and contact me
              below!
            </p>
          </div>
          <ul className="list-none flex text-center px-10 pt-8 md:col-span-3 md:mx-40">
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

      <div className="bg-gradient-to-tl from-lime-700 to-lime-500 py-12">
        <div className="grid grid-cols-3 gap-2 px-8 py-10 xl:px-36">
          {/* <img className="w-24 h-24 col-span-1 mx-auto md:w-36 md:h-36" src="img/placeholder.png" /> */}
          <i className="fas fa-money-bill-wave flex flex-col bg-teal-900 rounded-xl text-teal-600 text-center text-5xl md:text-7xl justify-center w-24 h-24 col-span-1 mx-auto md:w-36 md:h-36 lg:mr-16"></i>
          <div className="col-span-2">
            <h1 className="text-neutral-900 text-gradient-to-tl from-blue-700 to-blue-500 text-5xl font-extrabold flex">
              Finance Tracker
            </h1>
            <p className="text-neutral-900 tracking-wide py-4 text-left text-lg">
              {" "}
              All in one personal finance tracker utilizing the Plaid API. View
              all account data in one location. In development.
            </p>
            <div className="flex flex-col sm:flex-row">
              <a
                className="btn btn-live my-4 sm:my-0"
                target="_blank"
                href="https://finance-tracker-v2.vercel.app/"
              >
                <span className="flex">
                  <i className="fas fa-circle fa-xs absolute inline-flex animate-ping opacity-80 mt-1"></i>
                  <i className="fas fa-circle fa-xs relative inline-flex top-1"></i>
                  <span className="inline-flex pl-2">Live Demo</span>
                </span>
              </a>
              <a
                className="btn btn-primary4 text-center sm:ml-4"
                target="_blank"
                href="https://github.com/spenpeq/finance-tracker-v2"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="lg:px-56">
          <ul className="list-none flex flex-wrap py-4 justify-center">
            <li className="bg-lime-900 tech-labels">
              <i className="fab fa-react text-blue-400"></i> React
            </li>
            <li className="bg-lime-900 tech-labels">
              <i className="fab fa-react text-blue-400"></i> Next.js
            </li>
            <li className="bg-lime-900 tech-labels">
              <i className="fab fa-react text-blue-400"></i> Next-Auth
            </li>
            <li className="bg-lime-900 tech-labels">
              <i className="fab fa-react text-blue-400"></i> Typescript
            </li>
            <li className="bg-lime-900 tech-labels">
              <i className="fas fa-wind text-blue-300"></i> Tailwind CSS
            </li>
            <li className="bg-lime-900 tech-labels">
              <i className="fas fa-database text-green-400"></i> PostgreSQL
            </li>
            <li className="bg-lime-900 tech-labels">
              <i className="fas fa-cogs text-gray-200"></i> Plaid API
            </li>
            <li className="bg-lime-900 tech-labels">
              <i className="fas fa-cogs text-gray-200"></i> Prisma
            </li>
          </ul>
        </div>
        {/* <div className="flex flex-wrap justify-center">
            <img className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4" src="img/nat-photo-1.JPG" />
            <img className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4" src="img/nat-photo-2.JPG" />
            <img className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4" src="img/nat-photo-3.JPG" />
            <img className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4" src="img/nat-photo-4.JPG" />
            <img className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4" src="img/nat-photo-5.JPG" />
            <img className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4" src="img/nat-photo-6.JPG" />
        </div> */}
      </div>

      <div className="bg-gradient-to-tl from-yellow-600 to-yellow-400 py-12">
        <div className="grid grid-cols-3 gap-2 px-8 py-10 xl:px-36">
          {/* <img className="w-24 h-24 col-span-1 mx-auto md:w-36 md:h-36" src="img/placeholder.png" /> */}
          <i className="fas fa-mountain flex flex-col bg-green-900 rounded-xl text-green-600 text-center text-5xl md:text-7xl justify-center w-24 h-24 col-span-1 mx-auto md:w-36 md:h-36 lg:mr-16"></i>
          <div className="col-span-2">
            <h1 className="text-gray-50 text-gradient-to-tl from-blue-700 to-blue-500 text-5xl font-extrabold flex">
              National Parks
            </h1>
            <p className="text-gray-50 tracking-wide py-4 text-left text-lg">
              Explore America's National Parks with this informational park
              site. Search by state or keyword to get all park information. When
              you find your favorite parks, add them to your favorites. This
              site is made possible with the National Park Service API.
            </p>
            <div className="flex flex-col sm:flex-row">
              <a
                className="btn btn-live my-4 sm:my-0"
                target="_blank"
                href="https://national-parks-spencer.herokuapp.com/"
              >
                <span className="flex">
                  <i className="fas fa-circle fa-xs absolute inline-flex animate-ping opacity-80 mt-1"></i>
                  <i className="fas fa-circle fa-xs relative inline-flex top-1"></i>
                  <span className="inline-flex pl-2">Live Demo</span>
                </span>
              </a>
              <a
                className="btn btn-primary1 text-center sm:ml-4"
                target="_blank"
                href="https://github.com/spenpeq/national_parks"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="lg:px-56">
          <ul className="list-none flex flex-wrap py-4 justify-center">
            <li className="bg-yellow-900 tech-labels">
              <i className="fab fa-react text-blue-400"></i> React
            </li>
            <li className="bg-yellow-900 tech-labels">
              <i className="fab fa-react text-blue-400"></i> React Router
            </li>
            <li className="bg-yellow-900 tech-labels">
              <i className="fab fa-react text-blue-400"></i> Context API
            </li>
            <li className="bg-yellow-900 tech-labels">
              <i className="fab fa-js-square text-yellow-300"></i> JavaScript
            </li>
            <li className="bg-yellow-900 tech-labels">
              <i className="fab fa-node text-green-500"></i> Node
            </li>
            <li className="bg-yellow-900 tech-labels">
              <i className="fab fa-node text-green-500"></i> Express
            </li>
            <li className="bg-yellow-900 tech-labels">
              <i className="fab fa-html5 text-yellow-600"></i> HTML
            </li>
            <li className="bg-yellow-900 tech-labels">
              <i className="fas fa-wind text-blue-300"></i> Tailwind CSS
            </li>
            <li className="bg-yellow-900 tech-labels">
              <i className="fas fa-database text-green-400"></i> MongoDB
            </li>
            <li className="bg-yellow-900 tech-labels">
              <i className="fas fa-cogs text-green-400"></i> Mongoose
            </li>
            <li className="bg-yellow-900 tech-labels">
              <i className="fas fa-cogs text-gray-200"></i> NPS API
            </li>
            <li className="bg-yellow-900 tech-labels">
              {" "}
              <i className="fas fa-cogs"></i>{" "}
              <i className="fab fa-google text-blue-500"></i> Google Maps API
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-center">
          <img
            className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4"
            src="img/nat-photo-1.JPG"
          />
          <img
            className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4"
            src="img/nat-photo-2.JPG"
          />
          <img
            className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4"
            src="img/nat-photo-3.JPG"
          />
          <img
            className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4"
            src="img/nat-photo-4.JPG"
          />
          <img
            className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4"
            src="img/nat-photo-5.JPG"
          />
          <img
            className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4"
            src="img/nat-photo-6.JPG"
          />
        </div>
      </div>

      <div className="bg-gradient-to-tl from-neutral-400 to-neutral-500 py-12">
        <div className="grid grid-cols-3 gap-2 px-8 py-10 xl:px-36">
          <img
            className="w-24 h-24 col-span-1 mx-auto md:w-auto md:h-36 lg:h-48 lg:mr-16"
            src="img/projectlogo2.png"
          />
          <div className="col-span-2">
            <h1 className="text-white text-4xl md:text-5xl font-semibold flex">
              Ecommerce Shop
            </h1>
            <p className="text-white tracking-wide py-4 text-left text-lg">
              Ecommerce Shop is a mock product store with full functionality,
              including cart, view profile/orders, checkout with the PayPal API,
              etc.
            </p>
            <div className="flex flex-col sm:flex-row">
              <a
                className="btn btn-live my-4 sm:my-0"
                target="_blank"
                href="https://spencer-ecommerce-shop.herokuapp.com/"
              >
                <span className="flex">
                  <i className="fas fa-circle fa-xs absolute inline-flex animate-ping opacity-80 mt-1"></i>
                  <i className="fas fa-circle fa-xs relative inline-flex top-1"></i>
                  <span className="inline-flex pl-2">Live Demo</span>
                </span>
              </a>
              <a
                className="btn btn-primary2 text-center sm:ml-4"
                target="_blank"
                href="https://github.com/spenpeq/ecommerce_app"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="px-4">
          <ul className="list-none flex flex-wrap py-4 justify-center">
            <li className="bg-gray-900 tech-labels">
              <i className="fab fa-react text-blue-400"></i> React
            </li>
            <li className="bg-gray-900 tech-labels">
              <i className="fab fa-react text-blue-400"></i> React Redux
            </li>
            <li className="bg-gray-900 tech-labels">
              <i className="fab fa-react text-blue-400"></i> React Bootstrap
            </li>
            <li className="bg-gray-900 tech-labels">
              <i className="fab fa-python text-yellow-300"></i> Python
            </li>
            <li className="bg-gray-900 tech-labels">
              <i className="fab fa-python text-yellow-300"></i> Django
            </li>
            <li className="bg-gray-900 tech-labels">
              <i className="fab fa-html5 text-yellow-600"></i> HTML
            </li>
            <li className="bg-gray-900 tech-labels">
              <i className="fas fa-database"></i> PostgreSQL
            </li>
            <li className="bg-gray-900 tech-labels">
              <i className="fab fa-aws"></i> AWS S3 Bucket
            </li>
            <li className="bg-gray-900 tech-labels">
              <i className="fas fa-cogs"></i> PayPal API
            </li>
            <li className="bg-gray-900 tech-labels">
              <i className="fas fa-cogs"></i> JSON Web Tokens
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-center">
          <img
            className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-auto lg:px-4"
            src="img/store1.jpg"
          />
          <img
            className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-auto lg:px-4"
            src="img/store2.jpg"
          />
          <img
            className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-auto lg:px-4"
            src="img/store4.jpg"
          />
          <img
            className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-auto lg:px-4"
            src="img/store5.jpg"
          />
        </div>
      </div>

      <div className="bg-gradient-to-tl from-purple-500 to-purple-700">
        <div className="grid grid-cols-3 gap-2 px-8 py-10">
          <img
            className="w-36 h-36 col-span-1 mx-auto xl:mr-16"
            src="img/placeholder.png"
          />
          <div className="col-span-2">
            <h1 className="text-white text-3xl md:text-5xl font-bold flex">
              CommunityOne
            </h1>
            <p className="text-white tracking-wide py-4 text-justify text-lg">
              {" "}
              (In Development) Project manangement site for developers where you
              can share and view projects.
            </p>
            <div className="flex">
              {/* <a className="btn btn-live" target="_blank" href="https://national-parks-spencer.herokuapp.com/" >
                        <span className="flex">
                            <i className="fas fa-circle fa-xs absolute inline-flex animate-ping opacity-80 mt-1"></i>
                            <i className="fas fa-circle fa-xs relative inline-flex top-1"></i>
                            <span className="inline-flex pl-2">Live Demo</span>
                        </span>
                    </a>  */}
              <a
                className="btn btn-primary3 text-center"
                target="_blank"
                href="https://github.com/spenpeq/community-one"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="px-4">
          <ul className="list-none flex flex-wrap py-4 justify-center">
            <li className="bg-indigo-700 tech-labels">
              <i className="fab fa-react text-blue-400"></i> React
            </li>
            <li className="bg-indigo-700 tech-labels">
              <i className="fab fa-react text-blue-400"></i> React Router
            </li>
            <li className="bg-indigo-700 tech-labels">
              <i className="fab fa-react text-blue-400"></i> React Bootstrap
            </li>
            <li className="bg-indigo-700 tech-labels">
              <i className="fas fa-cogs"></i> GraphQL
            </li>
            <li className="bg-indigo-700 tech-labels">
              <i className="fas fa-cogs"></i> Strapi
            </li>
            <li className="bg-indigo-700 tech-labels">
              <i className="fas fa-cogs"></i> Apollo Client
            </li>
          </ul>
        </div>
        {/* <div className="flex flex-wrap justify-center">
            <img className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-auto lg:px-4" src="img/placeholder.png" />
            <img className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-auto lg:px-4" src="img/placeholder.png" />
            <img className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-auto lg:px-4" src="img/placeholder.png" />
        </div> */}
      </div>

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
    </div>
  );
}

export default App;
