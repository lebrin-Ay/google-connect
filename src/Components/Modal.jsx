import ReactModal from "react-modal";

const Modal = ({ isOpen, message, onRequestClose }) => {
  return (
    <ReactModal
      className="h-[100px] w-[200px] mt-64 mx-auto my-auto bg-[#E0E7FF] rounded-3xl"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      contentLabel="Success Modal"
    >
      <p className="font-bold text-center pt-8">{message}</p>
    </ReactModal>
  );
};

export default Modal;
