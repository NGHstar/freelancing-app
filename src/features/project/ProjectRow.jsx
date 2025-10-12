import { useState } from "react";
import Table from "../../ui/Table";
import pMoney from "../../utils/pMoney";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";
import statusStyle from "../../utils/statusStyle";

function ProjectRow({ project, index }) {
  // ---

  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="truncate max-w-44">{project.user.name}</td>
      <td>{project.description}</td>
      <td>{project.duration} روز</td>
      <td>{pMoney(project.price)} تومان</td>
      <td>
        <span
          className={`rounded-full px-3 py-1  ${
            statusStyle[project.status].style
          }`}
        >
          {statusStyle[project.status].label}
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
            proposalId={project._id}
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

export default ProjectRow;
