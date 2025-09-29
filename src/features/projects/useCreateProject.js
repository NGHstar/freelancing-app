import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectServices";
import toast from "react-hot-toast";

export default function useCreateProject() {
  // ---
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } =
    useMutation({
      mutationFn: (data) => createProjectApi(data),
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

  return { isCreating, createProject };
}
