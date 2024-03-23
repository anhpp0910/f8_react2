import React from "react";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

export default function Paragraph() {
  const context = useContext(ThemeContext);
  return (
    <p className={context.theme}>
      Sleepwalking, also known as somnambulism or noctambulism, is a phenomenon
      of combined sleep and wakefulness. It is classified as a sleep disorder
      belonging to the parasomnia family.
    </p>
  );
}
