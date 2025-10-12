import LoadingIndicator from "../../../ui/LoadingIndicator";
import Table from "../../../ui/Table";
import EmptyList from "../../../ui/EmptyList";
import useProjects from "../../projects/useProjects";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  // ---
  const { isLoading, projects } = useProjects();

  if (isLoading) return <LoadingIndicator />;

  if (!projects || !projects.length) return <EmptyList mt="m-24" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow
            key={project._id}
            project={project}
            index={index}
          />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
