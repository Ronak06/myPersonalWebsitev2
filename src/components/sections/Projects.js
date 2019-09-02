import React from "react";
import CardProjects from "../cards/CardProjects";
import { data } from "../../data/projectData";

const Projects = () => {
  return (
    <div
      className="ui equal width center aligned padded grid"
      style={{ paddingTop: 25 }}
    >
      <CardProjects data={data} />
    </div>
  );
};

export default Projects;
