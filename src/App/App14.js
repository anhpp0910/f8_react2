import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
import Content9 from "../Content/Content9";
import "../App.css";

// Context
// CompA => CompB => CompC
// Theme: Dark / Light

// 1. Create context
// 2. Provider
// 3. Consumer

function App14() {
  const context = useContext(ThemeContext);

  return (
    <div className="App" style={{ width: "80%", margin: "50px auto" }}>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Content9 />
    </div>
  );
}

export default App14;
