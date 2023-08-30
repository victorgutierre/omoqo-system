import React from "react";

const InputText = ({label, fieldName, value, changeFn }) => {
  return (
  <label>
    <span>{label}</span>
    <input type="text" name={fieldName} defaultValue={value || ""} onChange={(event) => changeFn(event)} />
  </label>
  );
}

export default InputText;