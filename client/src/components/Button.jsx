import React from "react";

const Button = ({ Class, Text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-slate-950 text-white py-3 xl:px-20 px-16 xl:text-2xl text-xl rounded-lg hover:scale-110 ${Class}`}
    >
      {Text}
    </button>
  );
};

export default Button;
