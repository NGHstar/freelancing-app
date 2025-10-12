import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/form/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../../ui/LoadingIndicator";

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

function ChangeProposalStatus({ proposalId, onClose }) {
  // ---
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();

  const { changeProposalStatus, isChanging } =
    useChangeProposalStatus();

  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["project", projectId],
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

export default ChangeProposalStatus;
