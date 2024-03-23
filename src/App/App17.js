import React from "react";
import Heading from "../components/Heading/Heading";
import Paragraph from "../components/Paragraph/Paragraph";
import GlobalStyle from "../components/GlobalStyle";
import Button from "../components/Button/Button";

export default function App17() {
  return (
    <GlobalStyle>
      <div style={{ padding: "10px 32px" }}>
        {/* <Heading />
        <Paragraph /> */}
        <Button />
        <Button primary />
        <Button primary disabled />
      </div>
    </GlobalStyle>
  );
}

// Development: npm start / yarn start => CSS internal
// Prodution: npm run build/ yarn build => CSS external
