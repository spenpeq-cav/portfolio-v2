import React from "react";

function ProjectNationalParks() {
  return (
    <div className="bg-gradient-to-tl from-yellow-600 to-yellow-400 py-12">
      <div className="grid grid-cols-3 gap-2 px-8 py-10 xl:px-36">
        {/* <img className="w-24 h-24 col-span-1 mx-auto md:w-36 md:h-36" src="img/placeholder.png" /> */}
        <i className="fas fa-mountain flex flex-col bg-green-900 rounded-xl text-green-600 text-center text-5xl md:text-7xl justify-center w-24 h-24 col-span-1 mx-auto md:w-36 md:h-36 lg:mr-16"></i>
        <div className="col-span-2">
          <h1 className="text-gray-50 text-gradient-to-tl from-blue-700 to-blue-500 text-5xl font-extrabold flex">
            National Parks
          </h1>
          <p className="text-gray-50 tracking-wide py-4 text-left text-lg">
            Explore America's National Parks with this informational park site.
            Search by state or keyword to get all park information. When you
            find your favorite parks, add them to your favorites. This site is
            made possible with the National Park Service API.
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
          src="images/nat-photo-1.jpg"
        />
        <img
          className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4"
          src="images/nat-photo-2.jpg"
        />
        <img
          className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4"
          src="images/nat-photo-3.jpg"
        />
        <img
          className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4"
          src="images/nat-photo-4.jpg"
        />
        <img
          className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4"
          src="images/nat-photo-5.jpg"
        />
        <img
          className="mb-4 px-6 py-2 md:px-12 lg:h-96 lg:w-max lg:px-4"
          src="images/nat-photo-6.jpg"
        />
      </div>
    </div>
  );
}

export default ProjectNationalParks;
