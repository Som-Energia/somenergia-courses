import React, { useState } from "react";
import PropTypes from "prop-types";

function Button({ children, text }) {
  
  const [titleText, setTitleText] = useState("PASTEL");

  const onHandleClick = () => {
    setTitleText(text);
  };

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 data-cy="title">{titleText}</h2>
      <button data-cy="button" onClick={onHandleClick}>
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
};
export default Button;
