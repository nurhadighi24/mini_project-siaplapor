import React from "react";

function Input(props) {
  const {
    label,
    placeholder,
    onChange,
    type,
    value,
    defaultValue,
    register,
    name,
    error,
  } = props;
  return (
    <div className="flex flex-col mb-4 font-quicksand-font">
      <label>{label}</label>
      <input
        className=" mt-1 px-3 py-2 bg-white border-2 border-custom-blue-1 shadow-sm w-full rounded-radius-20px"
        type={type}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...(register ? register(name) : {})}
      />
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function TextArea(props) {
  const {
    label,
    placeholder,
    onChange,
    type,
    value,
    defaultValue,
    register,
    name,
    error,
  } = props;
  return (
    <div className="flex flex-col mb-4">
      <label>{label}</label>
      <textarea
        className="mt-1 px-3 pb-32 pt-3 bg-white border-2 border-custom-blue-1 shadow-sm w-full rounded-radius-20px font-quicksand-font"
        type={type}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...(register ? register(name) : {})}
      />
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

export { Input, TextArea };
