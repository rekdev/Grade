import { X } from "lucide-react";

function Modal({ children, id, openState, toggleFunction, title }) {
  return (
    <div
      className={`bg-grade-modal-bg fixed left-0 top-0 grid h-screen w-screen place-content-center ${openState ? "visble" : "invisible"}`}
      id={id}
    >
      <div className="min-h-28 w-[calc(100vw-36px)] rounded-xl bg-grade-white-100 shadow-xl">
        <ModalHeader closeFunction={toggleFunction} />
        <div className="flex flex-col gap-7 px-5 py-8">
          <h1 className="text-xl">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

function ModalHeader({ closeFunction }) {
  return (
    <div className="flex h-14 w-full items-center justify-end px-1">
      <CloseButton onClick={closeFunction} />
    </div>
  );
}

function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="grid h-12 w-12 place-content-center rounded-md hover:bg-grade-white-200 active:bg-grade-white-300"
    >
      <X />
    </button>
  );
}

export default Modal;
