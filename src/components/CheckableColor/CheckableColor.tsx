import React from "react";
import styles from "./CheckableColor.module.css";
import { ColorName } from "../types";

interface Props {
  hex: string;
  colorName: ColorName;
  checked?: boolean;
  onChange: (color: ColorName) => void;
}

export const CheckableColor: React.FC<Props> = ({
  hex,
  colorName,
  checked = false,
  onChange,
}) => {
  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={() => onChange(colorName)}
      className={styles.container}
      style={{ backgroundColor: hex }}
    >
      {checked && (
        <div
          className={styles.checked}
          style={{
            border: `4px solid ${hex}`,
            boxShadow: `0 0 6px 2px ${hex}`,
          }}
        />
      )}
    </div>
  );
};
