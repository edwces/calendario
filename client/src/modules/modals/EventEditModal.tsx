import { MouseEventHandler } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import Modal from "../../components/Modal";

interface EventCreateModalProps {
  isOpen: boolean;
  onRequestClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  onSubmit: SubmitHandler<FieldValues>;
  onDelete: MouseEventHandler<HTMLButtonElement>;
}

export default function EventCreateModal({
  isOpen,
  onRequestClose,
  onSubmit,
  onDelete,
}: EventCreateModalProps) {
  const { handleSubmit, control } = useForm();

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h1 className=" text-4xl font-bold">Edit Modal</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 flex flex-col gap-8"
      >
        <InputField
          label="Title"
          control={control}
          name="title"
          rules={{ required: "This is required Field" }}
        ></InputField>
        <Button type="submit" className=" w-44">
          Edit
        </Button>
      </form>
      <Button variant="delete" className=" w-44" onClick={onDelete}>
        Delete
      </Button>
    </Modal>
  );
}
