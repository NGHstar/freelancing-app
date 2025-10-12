import EmptyList from "../../ui/EmptyList";
import LoadingIndicator from "../../ui/LoadingIndicator";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";

function ProposalsTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading)
    return <LoadingIndicator mt="mt-12 mr-2" pos="start" />;

  if (!proposals.length) return <EmptyList />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
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

export default ProposalsTable;
