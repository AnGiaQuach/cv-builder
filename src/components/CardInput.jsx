import React, { Fragment } from "react";

export default function CardInput({ type, title, handleChange }) {
  return (
    <Fragment>
      <label>{title}</label>
      <input type={type} onChange={handleChange}></input>
    </Fragment>
  );
}
