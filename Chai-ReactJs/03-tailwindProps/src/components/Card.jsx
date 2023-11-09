import React from "react";

const Card = ({ name, study = "BSIT" }) => {
  // means Property //=> const Card=()
  return (
    <>
      <h2>Hello {name}</h2> {/* 1 method to access the propes {props.name} */}
      <p>I am a student of {study}</p>{" "}
      {/* we does not use {study || "BSIT"} beacuse that's not show code readability */}
    </>
  );
};

export default Card;
