import { render } from "react-dom";
import CarComponent from "./car";

const AppReact = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <CarComponent name="Lamborghini" type="SuperCar" color="Gold" />
      <CarComponent name="Tesla" type="ElectroCar" color="Red" />
      <CarComponent name="Honda" type="Civic" color="Grey" />
    </div>
  );
};

// Producing car from a factory (poping it out )

render(<AppReact />, document.getElementById("root"));
