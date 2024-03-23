import { useState } from "react";

// import Content1 from "./Content1";
// import Content2 from "./Content2";
// import Content3 from "../Content/Content3";
import Content4 from "../Content/Content4";
import Content5 from "../Content/Content5";
import Content6 from "../Content/Content6";
import Content7 from "../Content/Content7";

function App7() {
  const [show, setShow] = useState(false);

  return (
    <div className="App7" style={{ width: "80%", margin: "50px auto" }}>
      <button onClick={() => setShow(!show)}>Toogle</button>
      {show && <Content7 />}
    </div>
  );
}

export default App7;
