import { useState } from "react";
import Modal from "../../components/Modal";

interface EventModalProps {
  initialOpen: boolean;
}

export default function EventModal({ initialOpen }: EventModalProps) {
  const [isOpen, setOpen] = useState(initialOpen);

  return (
    <Modal isOpen={isOpen} onRequestClose={() => setOpen(false)}>
      <h1 className=" text-4xl font-bold">Add Event</h1>
      <h2> - Date - </h2>
    </Modal>
  );
}
