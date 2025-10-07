import ProjectHeader from "../features/project/ProjectHeader";
import ProposalsTable from "../features/project/ProposalsTable";
import useProject from "../features/project/useProject";
import LoadingIndicator from "../ui/LoadingIndicator";

function Project() {
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

export default Project;
