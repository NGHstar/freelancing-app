import { useState } from "react";
import Table from "../../ui/Table";
import pMoney from "../../utils/pMoney";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";
import statusStyle from "../../utils/statusStyle";

function ProposalRow({ proposal, index }) {
  // ---
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="truncate max-w-44">{proposal.user.name}</td>
      <td>{proposal.description}</td>
      <td>{proposal.duration} روز</td>
      <td>{pMoney(proposal.price)} تومان</td>
      <td>
        <span
          className={`rounded-full px-3 py-1 ${
            statusStyle[proposal.status].style
          }`}
        >
          {statusStyle[proposal.status].label}
        </span>
      </td>
      <td>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          minWidth="sm:min-w-80"
          title="تغییر وضعیت درخواست"
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button
          onClick={() => setOpen(true)}
          className="btn btn--primary"
        >
          تغییر وضعیت
        </button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
