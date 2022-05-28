import React from "react";
import ProfileSection from "./components/ProfileSection";
import ProjectFinanceTracker from "./components/projects/ProjectFinanceTracker";
import ProjectNationalParks from "./components/projects/ProjectNationalParks";
import ProjectEcommerce from "./components/projects/ProjectEcommerce";
import ProjectCommunityOne from "./components/projects/ProjectCommunityOne";
import FooterSection from "./components/FooterSection";
import ProjectGitProfiles from "./components/projects/ProjectGitProfiles";

function App() {
  return (
    <div className="bg-gray-300">
      <ProfileSection />
      <section id="projects">
        <ProjectFinanceTracker />
        <ProjectNationalParks />
        <ProjectGitProfiles />
        <ProjectEcommerce />
        {/* <ProjectCommunityOne /> */}
      </section>
      <FooterSection />
    </div>
  );
}

export default App;
