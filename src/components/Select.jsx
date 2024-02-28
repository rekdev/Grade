function Select({ children, name, id, onChange }) {
  return (
    <select
      name={name}
      id={id}
      className="h-12 w-full border-b-2 border-grade-white-500 bg-grade-white-100 outline-none transition-colors focus:border-grade-black-100"
      onChange={onChange}
    >
      {children}
    </select>
  );
}

export default Select;
