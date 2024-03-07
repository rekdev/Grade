import { useEffect, useRef } from "react";

function InputText({
  children,
  type,
  name,
  id,
  placeholder,
  onChange,
  onInput,
  autoComplete,
  autoFocus,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current = document.getElementById(id);

    if (autoFocus === "on") {
      inputRef.current.focus();
    }
  });

  return (
    <div className="relative">
      <input
        className="active:bg peer h-12 w-full border-b-2 border-b-grade-white-500 bg-grade-white-100 outline-none transition-colors focus:border-grade-black-100 "
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        onInput={onInput}
        autoComplete={autoComplete}
        placeholder=""
      />
      <label
        htmlFor={id}
        className="absolute -top-3 left-0 cursor-text text-xs text-grade-black-100 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-grade-black-100"
      >
        {placeholder}
      </label>
      {children}
    </div>
  );
}

export default InputText;
