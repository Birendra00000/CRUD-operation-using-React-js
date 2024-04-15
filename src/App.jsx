import { useState } from "react";
import "./App.css";

import Button from "./Components/button.jsx/ButtonRe";
import CrudOperation from "./Components/crudOperation";
let nextid = 0;
function App() {
  const [color, setColor] = useState("bg-amber-500");

  return (
    <div>
      <div>
        <CrudOperation />
        {/* <Button
          className={`text-red-500 ${color}`}
          onClick={() => setColor("")}
        >
          Click Me
        </Button>
        <Button onClick={() => alert(`This button is click ${nextid++}`)}>
          Success
        </Button> */}
      </div>
    </div>
  );
}

export default App;
