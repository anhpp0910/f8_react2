import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

// classnames
// clsx

export default function Button({ primary, disabled }) {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    [styles.disabled]: disabled,
  });
  return (
    <div>
      <button className={classes}>Click me!</button>
    </div>
  );
}
