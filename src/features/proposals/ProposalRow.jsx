import Table from "../../ui/Table";
import pMoney from "../../utils/pMoney";
import statusStyle from "../../utils/statusStyle";

function ProposalRow({ proposal, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="truncate max-w-44">{proposal.description}</td>
      <td>{proposal.duration} روز</td>
      <td>{pMoney(proposal.price)} تومان</td>
      <td>
        <span
          className={`rounded-full px-3 py-1  ${
            statusStyle[proposal.status].style
          }`}
        >
          {statusStyle[proposal.status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
