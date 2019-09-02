import React from "react";
import StackIcons from "./StackIcons";

import { withTheme } from "styled-components";

const Card = props => {
  const img = {
    maxWidth: "400px"
  };

  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="image">
          <img
            src={props.data.image}
            style={{ height: "200px", width: "348px" }}
            alt={img}
          />
        </div>
        <div className="content">
          <StackIcons data={props.data.stack} />
          <p className="header">{props.data.project}</p>
          <div className="meta">
            <span className="status">{props.data.status}</span>
          </div>
          <div className="description">{props.data.description}</div>
        </div>
        <div className="extra content">
          <a
            className="iconP"
            href={props.data.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="code">
              <span />
            </span>
          </a>
          <a
            className="iconP"
            href={props.data.website}
            target="_blank"
            rel="noopener noreferrer"
          >
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

export default withTheme(Card);
