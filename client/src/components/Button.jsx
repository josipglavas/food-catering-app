import React from "react";

const Button = ({ Class, Text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-slate-950 text-white py-3 px-20 text-2xl rounded-lg hover:scale-110 ${Class}`}
    >
      {Text}
    </button>
  );
};

export default Button;
