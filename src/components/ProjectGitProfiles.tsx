function ProjectGitProfiles() {
  return (
    <div className="bg-gradient-to-tl from-slate-900 to-slate-800 py-12">
      <div className="grid grid-cols-3 gap-2 px-8 py-10 xl:px-36">
        {/* <img className="w-24 h-24 col-span-1 mx-auto md:w-36 md:h-36" src="img/placeholder.png" /> */}
        <i className="fa-brands fa-github flex flex-col bg-slate-700 rounded-xl text-slate-50 text-center md:text-7xl justify-center w-24 h-24 col-span-1 mx-auto md:w-36 md:h-36 lg:mr-16"></i>

        <div className="col-span-2">
          <h1 className="text-neutral-50 text-5xl font-extrabold flex tracking-wide">
            GitHub Profiles
          </h1>
          <p className="text-neutral-100 tracking-wide py-4 text-left text-lg">
            Small project using the GitHub api. Search a user and display
            profile information such as name, followers, and project repos.
          </p>
          <div className="flex flex-col sm:flex-row">
            <a
              className="btn btn-live my-4 sm:my-0"
              target="_blank"
              href="http://github-profiles-angular.vercel.app/"
            >
              <span className="flex">
                <i className="fa-solid fa-circle fa-xs absolute inline-flex animate-ping opacity-80 mt-3"></i>
                <i className="fa-solid fa-circle fa-xs relative inline-flex pt-3"></i>
                <span className="inline-flex pl-2">Live Site</span>
              </span>
            </a>
            <a
              className="btn btn-primary5 text-center sm:ml-4"
              target="_blank"
              href="https://github.com/spenpeq/github-profiles-angular"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="lg:px-56">
        <ul className="list-none flex flex-wrap py-4 justify-center">
          <li className="bg-slate-700 tech-labels">
            <i className="fab fa-angular text-red-600"></i> Angular
          </li>
          <li className="bg-slate-700 tech-labels">
            <i className="fa-solid fa-t fa-xs text-blue-400"></i><i className="fa-solid fa-s fa-xs text-blue-400"></i> Typescript
          </li>
          <li className="bg-slate-700 tech-labels">
            <i className="fab fa-js-square text-yellow-300"></i> JavaScript
          </li>
          <li className="bg-slate-700 tech-labels">
            <i className="fab fa-html5 text-yellow-600"></i> HTML
          </li>
          <li className="bg-slate-700 tech-labels">
            <i className="fas fa-cogs text-neutral-200"></i> GitHub API
          </li>
        </ul>
      </div>
      {/* <div className="flex flex-wrap justify-center">
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/nat-photo-1.jpg" />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/nat-photo-2.jpg" />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/nat-photo-3.jpg" />
        </div>
      </div> */}
    </div>
  );
}

export default ProjectGitProfiles;
