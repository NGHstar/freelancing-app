import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectServices";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  // ---
  const queryClient = useQueryClient();

  const { mutate: removeProject, isPending: isDeleting } =
    useMutation({
      mutationFn: removeProjectApi,
      onSuccess: (data) => {
        toast.success(data.message);

        // update ui - show new list of project that have 1 less project
        queryClient.invalidateQueries({
          queryKey: ["owner-projects"],
        });
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    });

  return { removeProject, isDeleting };
}
