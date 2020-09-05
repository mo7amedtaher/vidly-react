import React from "react";

const Like = (props) => {
  const className = props.liked === true ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <i
      onClick={props.handleOnClick}
      className={className}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
