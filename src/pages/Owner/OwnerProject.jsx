import ProjectHeader from "../../features/ownerProject/OwnerProjectHeader";
import ProposalsTable from "../../features/ownerProject/OwnerProposalsTable";
import useProject from "../../features/ownerProject/useProject";
import LoadingIndicator from "../../ui/LoadingIndicator";

function OwnerProject() {
  // ---
  const { isLoading, project } = useProject();

  if (isLoading) return <LoadingIndicator />;

  console.log(project);

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}

export default OwnerProject;
