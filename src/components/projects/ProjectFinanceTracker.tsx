import LiveButton from "../LiveButton";
import ProjectLayout from "./ProjectLayout";
import TechLabels from "../TechLabels";
import { FinanceProjectTech } from "../../utils/ProjectTech";

function ProjectFinanceTracker() {
  return (
    <ProjectLayout bgColor="from-teal-800 to-teal-700">
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
            <LiveButton link={"https://finance-tracker-v2.vercel.app/"} />
            <a
              className="btn btn-primary4 text-center sm:ml-4"
              target="_blank"
              href="https://github.com/spenpeq/finance-tracker-v2"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      <TechLabels labels={FinanceProjectTech} bgColor={"bg-teal-900"} />

      <div className="flex flex-wrap justify-center">
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/finance_pic_1.jpg" />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/finance_pic_2.jpg" />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/finance_pic_6.jpg" />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/finance_pic_3.jpg" />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/finance_pic_4.jpg" />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/finance_pic_5.jpg" />
        </div>
      </div>
    </ProjectLayout>
  );
}

export default ProjectFinanceTracker;
