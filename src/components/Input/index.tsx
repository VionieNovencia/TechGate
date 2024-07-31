import React from "react";
import Typography from "../Typography";
import styles from "./styles";

const Input = ({
  label, 
  type,
  value,
  onChange,
  isRequired,
}: {
  label: string,
  type: string,
  value: string,
  onChange: (e: any) => void,
  isRequired: boolean,
}) => {
  return (
    <div>
      <Typography variant="title2" >
        {label}
      </Typography>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        required={isRequired}
        className={styles.inputContainer}
      />
    </div>
  )
};

export default Input;