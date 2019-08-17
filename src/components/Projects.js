import React from "react";
import CardProjects from "../components/cards/CardProjects";
import { data } from "../data/projectData";
import ScrollUpButton from "react-scroll-up-button";

const Projects = () => {
  return (
    <div
      className="ui equal width center aligned padded grid"
      style={{ paddingTop: 25 }}
    >
      <CardProjects data={data} />
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={50}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{
          backgroundColor: "black",
          borderRadius: "10px"
        }}
        ToggledStyle={{}}
      />
    </div>
  );
};

export default Projects;
