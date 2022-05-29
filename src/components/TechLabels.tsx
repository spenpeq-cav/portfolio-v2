import { TechLabelsType } from "../utils/ProjectTech";

type TechLabelsProps = {
  labels: TechLabelsType[];
  bgColor: string;
};

function TechLabels({ labels, bgColor }: TechLabelsProps) {
  return (
    <div className="lg:px-56">
      <ul className="list-none flex flex-wrap py-4 justify-center">
        {labels.map((label) => (
          <li className={`tech-labels ${bgColor}`}>
            <i className={`${label.icon} ${label.color}`}></i> {label.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechLabels;
