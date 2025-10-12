import EmptyList from "../../ui/EmptyList";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProjectsTable({ proposals }) {
  if (!proposals.length) return <EmptyList />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow
            key={proposal._id}
            proposal={proposal}
            index={index}
          />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
