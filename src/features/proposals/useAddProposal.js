import { QueryClient, useMutation } from "@tanstack/react-query";
import { addProposalApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useAddProposal() {
  // ---
  const queryClient = new QueryClient();

  const { mutate: addProposal, isLoading } = useMutation({
    queryKey: ["projects"],
    mutationFn: addProposalApi,
    onSuccess: () => {
      toast.success("پیشنهاد با موفقیت ثبت شد");

      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || err.message);
    },
    retry: false,
  });
  return { isLoading, addProposal };
}
