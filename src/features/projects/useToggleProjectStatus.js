import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatusApi } from "../../services/projectServices";
import toast from "react-hot-toast";

export default function useToggleProjectStatus() {
  // ---
  const queryClient = useQueryClient();

  const { isPending: isToggling, mutate: toggleProjectStatus } =
    useMutation({
      mutationFn: toggleProjectStatusApi,
      onSuccess: (data) => {
        toast.success(data.message);
        // update ui
        queryClient.invalidateQueries({
          queryKey: ["owner-projects"],
        });
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    });

  return { isToggling, toggleProjectStatus };
}
