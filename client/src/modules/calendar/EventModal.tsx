import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import Modal from "../../components/Modal";

interface EventModalProps {
  isOpen: boolean;
  onRequestClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  onSubmit: SubmitHandler<FieldValues>;
}

export default function EventModal({
  isOpen,
  onRequestClose,
  onSubmit,
}: EventModalProps) {
  const { handleSubmit, control } = useForm();

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h1 className=" text-4xl font-bold">Add Event</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 flex flex-col gap-8"
      >
        <InputField
          label="Title"
          control={control}
          name="First"
          rules={{ required: "This is required Field" }}
        ></InputField>
        <Button type="submit" className=" w-44">
          Submit
        </Button>
      </form>
    </Modal>
  );
}
