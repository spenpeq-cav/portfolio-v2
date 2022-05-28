import React from "react";

function ProjectCommunityOne() {
  return (
    <div className="bg-gradient-to-tl from-purple-500 to-purple-700">
      <div className="grid grid-cols-3 gap-2 px-8 py-10">
        <img
          className="w-36 h-36 col-span-1 mx-auto xl:mr-16"
          src="images/placeholder.png"
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
  );
}

export default ProjectCommunityOne;
