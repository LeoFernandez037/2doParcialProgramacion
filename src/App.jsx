import ImgAndButton from "./componentes/ImgAndButton";
import ExcerciseDetails from "./componentes/ExcerciseDetails";

import "./App.css";

function App() {
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
