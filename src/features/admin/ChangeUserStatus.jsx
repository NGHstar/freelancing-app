import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/form/RHFSelect";
import { useQueryClient } from "@tanstack/react-query";
import LoadingIndicator from "../../ui/LoadingIndicator";
import useChangeUserStatus from "./useChangeUserStatus";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeUserStatus({ userId, onClose }) {
  // ---
  const { register, handleSubmit } = useForm();
  const { changeUserStatus, isChanging } = useChangeUserStatus();

  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["users"],
          });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        label="تغییر وضعیت"
        name="status"
        register={register}
        options={options}
      />
      <div className="mt-4">
        {isChanging ? (
          <LoadingIndicator mt="mt-8" size="small" />
        ) : (
          <button
            type="submit"
            className="btn mt-4 btn--primary w-full"
          >
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default ChangeUserStatus;
