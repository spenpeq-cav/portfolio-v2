import React from "react";

function ProfileSection() {
  return (
    <div className="bg-gradient-to-tl from-neutral-800 to-neutral-900">
      <div className="px-4 py-16 max-w-md mx-auto md:grid md:grid-cols-3 md:max-w-3xl md:py-24">
        <img
          className="mx-auto h-60 bg-neutral-800 rounded-full border-2 p-1 border-neutral-100 shadow-xl object-cover md:h-60 md:col-span-1"
          src="images/profile-pic.jpg"
          alt="Spencer's profile"
        />
        <div className="md:col-span-2">
          <h1 className="tracking-tighter text-center mt-2 text-7xl font-bold text-neutral-400 md:mt-5">
            Spencer Pequegnat
          </h1>
          <p className="mt-6 text-neutral-400 font-semibold pl-8">
            Hey! My name is Spencer and I'm a fullstack developer and physics
            graduate from San Diego. Check out my projects and contact me below!
          </p>
        </div>
        <ul className="list-none flex text-center px-10 pt-8 md:col-span-3 md:mx-40">
          <li className="social-btn">
            <a
              href="https://github.com/spenpeq"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square fa-3x"></i>
            </a>
          </li>
          <li className="social-btn">
            <a
              href="https://www.linkedin.com/in/spencer-pequegnat/"
              target="_blank"
              rel="noreferrer"
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
  );
}

export default ProfileSection;
