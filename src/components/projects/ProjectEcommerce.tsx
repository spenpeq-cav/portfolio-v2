import LiveButton from "../LiveButton";
import ProjectLayout from "./ProjectLayout";

function ProjectEcommerce() {
  return (
    <ProjectLayout bgColor="from-neutral-400 to-neutral-500">
      <div className="grid grid-cols-3 gap-2 px-8 py-10 xl:px-36">
        <img
          className="w-24 h-24 col-span-1 mx-auto md:w-auto md:h-36 lg:h-48 lg:mr-16"
          src="images/projectlogo2.png"
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
            <LiveButton
              link={"https://spencer-ecommerce-shop.herokuapp.com/"}
            />
            <a
              className="btn btn-primary2 text-center sm:ml-4"
              target="_blank"
              href="https://github.com/spenpeq/ecommerce_app"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="lg:px-56">
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
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/store1.jpg" />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/store2.jpg" />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/store3.jpg" />
        </div>
        <div className="px-6 py-2 md:px-12 lg:px-4">
          <img className="image-style" src="images/store4.jpg" />
        </div>
      </div>
    </ProjectLayout>
  );
}

export default ProjectEcommerce;
