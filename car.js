import React from "react";

const carComponent = (propers) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, propers.name),
    React.createElement("h2", {}, propers.type),
    React.createElement("h2", {}, propers.color),
  ]);
};

export default carComponent;
