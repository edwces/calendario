import { ReactChild } from "react";
import ReactModal from "react-modal";
import CloseIcon from "../icons/CloseIcon";
import Button from "./Button";

const styleCustom = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem",
    border: "none",
    filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
    borderRadius: "0.75rem",
  },
};

type ModalProps = ReactModal.Props & {
  children: ReactChild[] | ReactChild;
};

export default function Modal({
  children,
  onRequestClose,
  ...props
}: ModalProps) {
  return (
    <ReactModal shouldCloseOnEsc style={styleCustom} {...props}>
      <div className="flex flex-col w-full">
        <div className="flex justify-end absolute right-3 top-3">
          <Button onClick={(e) => onRequestClose!(e)} variant="transparent">
            <CloseIcon width={34} height={34}></CloseIcon>
          </Button>
        </div>
        {children}
      </div>
    </ReactModal>
  );
}
