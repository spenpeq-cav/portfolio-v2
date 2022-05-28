import React from "react";

type ProjectLayout = {
  children: React.ReactNode;
  bgColor: string;
};

function ProjectLayout(props: ProjectLayout) {
  return (
    <div className={"bg-gradient-to-tl py-12 " + props.bgColor}>
      {props.children}
    </div>
  );
}

export default ProjectLayout;
