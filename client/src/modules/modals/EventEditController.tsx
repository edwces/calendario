import { FieldValues } from "react-hook-form";
import {
  useDeleteEventMutation,
  useEditEventMutation,
} from "../../generated/graphql";
import EventEditModal from "./EventEditModal";

interface EventEditControllerProps {
  isOpen: boolean;
  onRequestClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  id: number;
}

export default function EventEditController({
  isOpen,
  onRequestClose,
  id,
}: EventEditControllerProps) {
  const [eresult, eexecute] = useEditEventMutation();
  const [dresult, dexecute] = useDeleteEventMutation();

  const onSubmit = async (data: FieldValues) => {
    await eexecute({
      data: {
        title: { set: data.title },
      },
      where: { id: id },
    });
  };

  const onDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    await dexecute({
      where: { id: id },
    });
  };

  return (
    <EventEditModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onSubmit={onSubmit}
      onDelete={onDelete}
    ></EventEditModal>
  );
}
