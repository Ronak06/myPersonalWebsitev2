import React from "react";
import { ProjectHeader } from "../themes/styles";
import CardProjects from "../components/cards/CardProjects";
import { data } from "../data/projectData";

const Projects = () => {
  return (
    <div
      className="ui equal width center aligned padded grid"
      style={{ paddingTop: 100 }}
    >
      <CardProjects data={data} />
    </div>
  );
};

export default Projects;
