import Stats from "../../features/freelancer/Stats";
import useProposals from "../../features/proposals/useProposals";
import DashboardHeader from "../../ui/DashboardHeader";
import LoadingIndicator from "../../ui/LoadingIndicator";

function FreelancerDashboard() {
  // ---
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <LoadingIndicator mt="mt-16" />;

  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default FreelancerDashboard;
