import pMoney from "../../../utils/pMoney";
import Table from "../../../ui/Table";
import pDate from "../../../utils/pDate";
import { projectStatus } from "../../../utils/statusStyle";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposalForm from "../../proposals/CreateProposalForm";

function ProjectRow({ project, index }) {
  // ---
  const { status, title, budget, deadline } = project;

  const [open, setOpen] = useState();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="truncate max-w-44">{title}</td>
      <td>{pMoney(budget)} تومان</td>
      <td>{pDate(deadline)}</td>
      <td>
        <span
          className={`rounded-full px-4 py-1  ${projectStatus[status].style}`}
        >
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <MdAssignmentAdd
          onClick={() => setOpen(true)}
          className="w-6 h-6 text-blue mr-2 cursor-pointer hover:opacity-70"
        />
        <Modal
          open={open}
          title={`ثبت درخواست برای پروژه ${title}`}
          onClose={() => setOpen(false)}
        >
          <CreateProposalForm
            onClose={() => setOpen(false)}
            projectId={project._id}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
