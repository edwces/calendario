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
  id: string;
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
        title: data.title,
      },
      where: { id: parseInt(id) },
    });
  };

  const onDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    await dexecute({
      where: { id: parseInt(id) },
    });
    e.stopPropagation();
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
