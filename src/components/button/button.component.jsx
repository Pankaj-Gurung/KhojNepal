import React from "react";

const Button = (props) => {
  const { children, variant, style } = props;
  return (
    <div className="btn" style={style}>
      {children}
    </div>
  );
};

export default Button;
