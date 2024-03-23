import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App18 from "./App/App18";
// import App15 from "./App/App15";
// import { StoreProvider } from "./store";
// import App14 from "./App/App14";
// import { ThemeProvider } from "./ThemeContext";
import reportWebVitals from "./reportWebVitals";

// Fake comments
// function emitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `Nội dung comment của lesson ${id} `,
//       })
//     );
//   }, 2000);
// }

// emitComment(1);
// emitComment(2);
// emitComment(3);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App7 />
  // </React.StrictMode>

  // <ThemeProvider>
  //   <App14 />
  // </ThemeProvider>

  // <StoreProvider>
  //   <App15 />
  // </StoreProvider>

  <BrowserRouter>
    <App18 />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
