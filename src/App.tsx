import React from "react";
import ProfileSection from "./components/ProfileSection";
import ProjectFinanceTracker from "./components/ProjectFinanceTracker";
import ProjectNationalParks from "./components/ProjectNationalParks";
import ProjectEcommerce from "./components/ProjectEcommerce";
import ProjectCommunityOne from "./components/ProjectCommunityOne";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="bg-gray-300">
      <ProfileSection />
      <section id="projects">
        <ProjectFinanceTracker />
        <ProjectNationalParks />
        <ProjectEcommerce />
        <ProjectCommunityOne />
      </section>
      <FooterSection />
    </div>
  );
}

export default App;
