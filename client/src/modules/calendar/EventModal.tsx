import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputField from "../../components/InputField";
import Modal from "../../components/Modal";

interface EventModalProps {
  initialOpen: boolean;
}

export default function EventModal({ initialOpen }: EventModalProps) {
  const [isOpen, setOpen] = useState(initialOpen);
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Modal isOpen={isOpen} onRequestClose={() => setOpen(false)}>
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
