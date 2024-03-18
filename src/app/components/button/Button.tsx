import React from "react";

const Button = ({ children }) => {
  return (
    <button className="border-2 border-solid bg-purple-100 p-4 uppercase ">
      {children}
    </button>
  );
};

export default Button;

// button {
//     border: 2px solid black;
//     font-weight: 600;
//     border-radius: 5px;
//     background-color: lavender;
//     padding: 1rem;
//     box-shadow: -4px 4px 0 black;
//     text-transform: uppercase;
//   }
