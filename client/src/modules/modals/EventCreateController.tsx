import { useContext } from "react";
import { FieldValues } from "react-hook-form";
import { useAddEventMutation } from "../../generated/graphql";
import userStateContext from "../../stores/userState/userStateContext";
import EventCreateModal from "./EventCreateModal";

interface EventCreateControllerProps {
  isOpen: boolean;
  onRequestClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  selectedDate: string;
}

export default function EventCreateController({
  isOpen,
  onRequestClose,
  selectedDate,
}: EventCreateControllerProps) {
  const { user } = useContext(userStateContext);
  const [result, execute] = useAddEventMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    console.log(selectedDate);

    await execute({
      data: {
        title: data.title,
        date: selectedDate,
        owner: { connect: { id: user?.id } },
      },
    });
  };

  return (
    <EventCreateModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onSubmit={onSubmit}
    ></EventCreateModal>
  );
}
