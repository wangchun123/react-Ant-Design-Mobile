import React, { useEffect, useState } from "react";
import closeEye from "@/assets/close.png";

import "./index.scss";

const CustomInput = (props) => {
  const { type = "text", placeholder, value = "", onChange } = props;
  const [inputValue, setInputValue] = useState();
  const [eyeStatus, setEyeStatus] = useState(() => type === "password");
  const [inputType, setInputType] = useState();

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    setInputType(type);
  }, [type]);

  return (
    <div className="custom_input">
      <input
        type={inputType}
        placeholder={placeholder}
        value={inputValue}
        onChange={(val) => {
          setInputValue(val.target.value);
          onChange && onChange(val.target.value);
        }}
      />
      {type === "password" && (
        <img
          src={closeEye}
          alt=""
          onClick={() => {
            setEyeStatus(!eyeStatus);
            setInputType(eyeStatus ? "password" : "text");
          }}
        />
      )}
    </div>
  );
};
export default CustomInput;
