import React from "react";
import "../../themes/CardTheme.css";

const StackIcons = props => {
  const array = props.data;
  const icons = array.map(item => {
    return (
      <div key={item} className="iconP">
        <span className={item}>
          <span />
        </span>
      </div>
    );
  });
  return <div> {icons} </div>;
};

export default StackIcons;
