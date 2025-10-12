import { useForm } from "react-hook-form";
import TextInput from "../../ui/form/TextInput";
import useAddProposal from "./useAddProposal";
import LoadingIndicator from "../../ui/LoadingIndicator";
import toast from "react-hot-toast";

function CreateProposalForm({ onClose, projectId }) {
  // ---
  const { addProposal, isLoading: isAdding } = useAddProposal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      addProposal(
        { ...data, projectId },
        { onSuccess: () => onclose() }
      );
    } catch (err) {
      toast.error(err?.response?.data?.message || err.message);
    }
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 grid grid-cols-2 gap-6 max-sm:grid-cols-1"
    >
      <TextInput
        name="description"
        label="متن درخواست"
        isNum={false}
        placeHolder={""}
        register={register}
        validationSchema={{
          minLength: {
            value: 15,
            message: "عنوان پروژه باید حداقل 15 کاراکتر باشد",
          },
          required: "متن درخواست ضروری است",
        }}
        errors={errors}
      />
      <TextInput
        name="price"
        label="قیمت پیشنهادی"
        isNum={false}
        isPrice={true}
        placeHolder=""
        register={register}
        validationSchema={{
          required: "قیمت ضروری است",
        }}
        errors={errors}
      />

      <TextInput
        name="duration"
        label="مدت زمان (روز)"
        isNum={false}
        placeHolder=""
        register={register}
        validationSchema={{
          required: "مدت زمان ضروری است",
        }}
        errors={errors}
      />

      {isAdding ? (
        <LoadingIndicator />
      ) : (
        <button
          type="submit"
          className="btn btn--primary  w-full sm:col-span-2"
        >
          ثبت درخواست
        </button>
      )}
    </form>
  );
}

export default CreateProposalForm;
