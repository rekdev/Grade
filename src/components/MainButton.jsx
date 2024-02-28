function MainButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-12 rounded-md bg-grade-black-100 text-base text-grade-white-100 shadow-md shadow-grade-white-shadow-100 transition-colors hover:bg-grade-black-200 active:bg-grade-black-300"
    >
      {children}
    </button>
  );
}

export default MainButton;
