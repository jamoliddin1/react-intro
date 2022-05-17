const carComponent = (propers) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, propers.name),
    React.createElement("h2", {}, propers.type),
    React.createElement("h2", {}, propers.color),
  ]);
};
// One specific type of car in factory
const AppReact = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      { class: "that-how__give-class" },
      "My first React App"
    ),

    // Stamping the stamp 3 times
    React.createElement(carComponent, {
      name: "Lamborghini",
      type: "SuperCar",
      color: "Gold",
    }),
    React.createElement(carComponent, {
      name: "Tesla",
      type: "ElectroCar",
      color: "Red",
    }),
    React.createElement(carComponent, {
      name: "Honda",
      type: "Civic",
      color: "Grey",
    }),
  ]);
};

// Producing car from a factory (poping it out )
const producingByOne = React.createElement(AppReact);

ReactDOM.render(producingByOne, document.getElementById("root"));
