import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ImgAndButton from "./componentes/ImgAndButton";
import ExcerciseDetails from "./componentes/ExcerciseDetails";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="contenedorCard">
          <ImgAndButton></ImgAndButton>
          <ExcerciseDetails></ExcerciseDetails>
        </div>
      </div>
    </>
  );
}

export default App;
