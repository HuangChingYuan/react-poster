import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div
        className="fixed inset-0 w-full h-screen bg-black/60 z-[1]"
        onClick={closeHandler}
      />
      <dialog
        open
        className="border-none rounded-md shadow-md p-0 overflow-hidden z-[1] place-self-center"
      >
        {children}
      </dialog>
    </>
  );
}

export default Modal;
