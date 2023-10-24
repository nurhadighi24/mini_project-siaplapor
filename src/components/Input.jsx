import React from "react";

function Input({
  label,
  placeholder,
  onChange,
  type,
  value,
  defaultValue,
  register,
  name,
  error,
}) {
  return (
    <div className="flex flex-col mb-4 font-quicksand-font mx-10">
      <label>{label}</label>
      <input
        className=" mt-1 px-3 py-2 bg-slate-950 border-2 border-custom-blue-1 shadow-sm w-full rounded-radius-20px text-white"
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

function TextArea({
  label,
  placeholder,
  onChange,
  type,
  value,
  defaultValue,
  register,
  name,
  error,
}) {
  return (
    <div className="flex flex-col mb-4">
      <label>{label}</label>
      <textarea
        className="mt-1 px-3 pb-32 pt-3 bg-slate-950 border-2 border-custom-blue-1 shadow-sm w-full rounded-radius-20px font-quicksand-font text-white"
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
