import { render } from "react-dom";
import SearchParams from "./searchParams";
const AppReact = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
    </div>
  );
};

// Producing car from a factory (poping it out )

render(<AppReact />, document.getElementById("root"));
