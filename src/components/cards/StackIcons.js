import React from "react";

const StackIcons = props => {
  const array = props.data;
  const icons = array.map(item => {
    return (
      <div key={item} className="icon">
        <span className={item}>
          <span />
        </span>
      </div>
    );
  });
  return <div> {icons} </div>;
};

export default StackIcons;
