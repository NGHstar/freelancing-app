import Stats from "../../features/admin/Stats";
import useUsers from "../../features/admin/useUsers";
import useProjects from "../../features/projects/useProjects";
import useProposals from "../../features/proposals/useProposals";
import DashboardHeader from "../../ui/DashboardHeader";
import LoadingIndicator from "../../ui/LoadingIndicator";

function AdminDashboard() {
  // ---
  const { proposals } = useProposals();
  const { projects } = useProjects();
  const { isLoading, users } = useUsers();

  if (isLoading) return <LoadingIndicator />;

  return (
    <div>
      <DashboardHeader
        title="در یک نگاه"
        text="خلاصه‌ای از اطلاعات"
      />
      <Stats
        projects={projects}
        users={users}
        proposals={proposals}
      />
    </div>
  );
}

export default AdminDashboard;
