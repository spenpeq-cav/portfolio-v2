import React from "react";

function ProjectFinanceTracker() {
  return (
    <div className="bg-gradient-to-tl from-teal-800 to-teal-700 py-12">
      <div className="grid grid-cols-3 gap-2 px-8 py-10 xl:px-36">
        {/* <img className="w-24 h-24 col-span-1 mx-auto md:w-36 md:h-36" src="img/placeholder.png" /> */}
        <i className="fas fa-money-bill-wave flex flex-col bg-lime-900 rounded-xl text-lime-600 text-center text-5xl md:text-7xl justify-center w-24 h-24 col-span-1 mx-auto md:w-36 md:h-36 lg:mr-16"></i>
        <div className="col-span-2">
          <h1 className="text-neutral-50 text-gradient-to-tl from-blue-700 to-blue-500 text-5xl font-extrabold flex tracking-wide">
            Finance Tracker
          </h1>
          <p className="text-neutral-300 tracking-wide py-4 text-left text-lg">
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
          <li className="bg-teal-900 tech-labels">
            <i className="fab fa-react text-blue-400"></i> React
          </li>
          <li className="bg-teal-900 tech-labels">
            <i className="fab fa-react text-blue-400"></i> Next.js
          </li>
          <li className="bg-teal-900 tech-labels">
            <i className="fab fa-react text-blue-400"></i> Next-Auth
          </li>
          <li className="bg-teal-900 tech-labels">
            <i className="fab fa-react text-blue-400"></i> Typescript
          </li>
          <li className="bg-teal-900 tech-labels">
            <i className="fas fa-wind text-blue-300"></i> Tailwind CSS
          </li>
          <li className="bg-teal-900 tech-labels">
            <i className="fas fa-database text-green-400"></i> PostgreSQL
          </li>
          <li className="bg-teal-900 tech-labels">
            <i className="fas fa-cogs text-gray-200"></i> Plaid API
          </li>
          <li className="bg-teal-900 tech-labels">
            <i className="fas fa-cogs text-gray-200"></i> Prisma
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img
            className="image-style"
            src="images/finance_pic_1.jpg"
          />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img
            className="image-style"
            src="images/finance_pic_2.jpg"
          />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img
            className="image-style"
            src="images/finance_pic_6.jpg"
          />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img
            className="image-style"
            src="images/finance_pic_3.jpg"
          />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img
            className="image-style"
            src="images/finance_pic_4.jpg"
          />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img
            className="image-style"
            src="images/finance_pic_5.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectFinanceTracker;
