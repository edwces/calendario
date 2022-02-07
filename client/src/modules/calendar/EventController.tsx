import EventModal from "./EventModal";

interface EventControllerProps {
  isOpen: boolean;
  onRequestClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
}

export default function EventController({
  isOpen,
  onRequestClose,
}: EventControllerProps) {
  const onSubmit = (data) => console.log(data);

  return (
    <EventModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onSubmit={onSubmit}
    ></EventModal>
  );
}
