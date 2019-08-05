import React, { useState } from "react";

import StackIcons from "./StackIcons";

const Card = props => {
  const [style, setStyle] = useState({
    img: {
      maxWidth: "400px"
    }
  });

  const codePen = () => {
    return (
      <div className="col m4">
        <div className="card hoverable">
          <div className="card-image waves-effect waves-block waves-light">
            <img style={style.img} src={props.data.image} />
          </div>
          <div className="card-content">
            <div>
              <StackIcons data={props.data.stack} />
            </div>
            <span className="card-title activator grey-text text-darken-4">
              {props.data.project}
              <i className="material-icons right">more_vert</i>
            </span>
            <div>
              <span>
                <a href={props.data.website}>Website</a>
              </span>
              <span>
                <a className="github" href={props.data.github}>
                  Github
                </a>
              </span>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {props.data.project}
              <i className="material-icons right">close</i>
            </span>
            <div>
              <span className="status">{props.data.status}</span>
            </div>
            <p>{props.data.description}</p>
            <p>
              <strong>Need:</strong>
            </p>
            <p>{props.data.needs}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="image">
          <img style={style.img} src={props.data.image} />
        </div>
        <div className="content">
          <StackIcons data={props.data.stack} />
          <a className="header">{props.data.project}</a>
          <div class="meta">
            <span class="date">{props.data.status}</span>
          </div>
          <div className="description">{props.data.description}</div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon" />
            22 Friends
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
