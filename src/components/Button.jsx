import React from "react";

export default function Button(props) {
  const { label } = props;
  return <button {...props}>{label}</button>;
}
