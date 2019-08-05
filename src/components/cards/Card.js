import React, { useState } from "react";
import StackIcons from "./StackIcons";

const Card = props => {
  const [style, setStyle] = useState({
    img: {
      maxWidth: "400px"
    }
  });

  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="image">
          <img style={style.img} src={props.data.image} alt={style.img} />
        </div>
        <div className="content">
          <StackIcons data={props.data.stack} />
          <a className="header">{props.data.project}</a>
          <div className="meta">
            <span className="status">{props.data.status}</span>
          </div>
          <div className="description">{props.data.description}</div>
        </div>
        <div className="extra content">
          <a className="iconP" href={props.data.github} target="_blank">
            <span className="code">
              <i className="large github icon" />
              <span />
            </span>
          </a>
          <a className="iconP" href={props.data.website} target="_blank">
            <span className="demo">
              <span />
            </span>
          </a>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Card;
