function InputText({
  children,
  type,
  name,
  id,
  placeholder,
  onChange,
  onInput,
  autoComplete
}) {
  return (
    <div className="relative">
      <input
        className="active:bg peer h-12 w-full border-b-2 border-b-grade-white-500 bg-grade-white-100 outline-none transition-colors focus:border-grade-black-100 "
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        onInput={onInput}
        autoFocus
        autoComplete={autoComplete}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-3 cursor-text text-grade-black-100 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-grade-black-100"
      >
        {placeholder}
      </label>
      {children}
    </div>
  );
}

export default InputText;
