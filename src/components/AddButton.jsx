import { Plus } from "lucide-react";

function AddButton({ onClick }) {
  return (
    <button
      className="shadow-grade-white-shadow-100 animate-open-button fixed bottom-20 right-5 grid h-14 w-14 place-content-center rounded-xl bg-grade-black-100 shadow-md transition-colors ease-out *:h-8 *:w-auto *:stroke-grade-white-100 hover:bg-grade-black-200 active:bg-grade-black-300"
      onClick={onClick}
    >
      <Plus />
    </button>
  );
}

export default AddButton;
