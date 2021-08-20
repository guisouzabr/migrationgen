import React from "react";

export const Input = ({
  relatesTo,
  type = "text",
  value,
  onChange,
  belongsTo,
  longerInput,
  disabled
}) => (
  <input
    className={longerInput ? "inputStyleLong" : "inputStyle"}
    id={relatesTo}
    type={type}
    value={value}
    onChange={onChange}
    name={belongsTo}
    disabled={disabled}
  />
);
