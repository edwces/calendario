import { FieldValues } from "react-hook-form";
import { useAddEventMutation } from "../../generated/graphql";
import EventModal from "./EventModal";

interface EventControllerProps {
  isOpen: boolean;
  onRequestClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  selectedDate: string;
}

export default function EventController({
  isOpen,
  onRequestClose,
  selectedDate,
}: EventControllerProps) {
  const [result, execute] = useAddEventMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    console.log(selectedDate);

    await execute({
      data: {
        title: data.title,
        date: selectedDate,
        owner: { connect: { id: 1 } },
      },
    });
  };

  return (
    <EventModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onSubmit={onSubmit}
    ></EventModal>
  );
}
