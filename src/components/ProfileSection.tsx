import React from "react";

function ProfileSection() {
  return (
    <div className="bg-gradient-to-tl from-neutral-800 to-neutral-900 h-screen px-4 py-12 ">
      <div className="max-w-md mx-auto md:max-w-3xl md:py-24">
        <img
          className="mx-auto h-60 bg-neutral-800 rounded-3xl p-1 border-2  border-blue-500 shadow-xl object-cover md:h-60 md:col-span-1"
          src="images/profile-pic.jpg"
          alt="Spencer's profile"
        />
        <div className="md:col-span-2">
          <h1 className="tracking-wide text-center mt-2 text-7xl font-bold text-neutral-50 md:mt-5">
            Spencer Pequegnat
          </h1>
          <p className="mt-6 text-neutral-200 px-12 text-xl text-center">
            Hey! My name is Spencer and I'm a full stack developer and physics
            graduate from San Diego. Check out my projects and socials below!
          </p>
          <div className="text-center mt-10">
            <a
              className="btn-2 btn-profile text-center sm:ml-4 py-4 px-20 text-xl"
              href="#projects"
            >
              View Projects
            </a>
          </div>
        </div>
        <ul className="list-none flex text-center px-10 pt-8 md:col-span-3 md:mx-40">
          <li className="social-btn">
            <a
              href="https://github.com/spenpeq"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square fa-4x"></i>
            </a>
          </li>
          <li className="social-btn">
            <a
              href="https://www.linkedin.com/in/spencer-pequegnat/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-4x"></i>
            </a>
          </li>
          <li className="social-btn">
            <a
              href="https://twitter.com/spenpeq"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter-square fa-4x sm:fa-2x"></i>
            </a>
          </li>
          <li className="social-btn">
            <a href="mailto: spencer.peq@gmail.com">
              <i className="fas fa-envelope-square fa-4x"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSection;
