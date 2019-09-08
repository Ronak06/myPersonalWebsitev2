import React from "react";
import Card from "./Card";

const CardProjects = props => {
  const projects = [];
  const data = props.data;

  data.forEach(item => {
    projects.push(<Card data={item} key={item.id} />);
  });

  return <div className="ui stackable three column grid">{projects}</div>;
};

export default CardProjects;
