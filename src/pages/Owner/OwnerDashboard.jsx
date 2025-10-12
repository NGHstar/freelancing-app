import LoadingIndicator from "../../ui/LoadingIndicator";
import DashboardHeader from "../../ui/DashboardHeader";
import useOwnerProjects from "../../features/projects/useOwnerProject";
import Stats from "../../features/owner/Stats";

function OwnerDashboard() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <LoadingIndicator mt="mt-16" />;

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default OwnerDashboard;
