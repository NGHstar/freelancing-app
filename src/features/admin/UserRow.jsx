import { useState } from "react";
import statusStyle from "../../utils/statusStyle";
import Table from "../../ui/Table";
import { HiPencil, HiPencilAlt } from "react-icons/hi";
import Modal from "../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";

function UserRow({ user, index }) {
  // ---
  const [open, setOpen] = useState(false);

  const { status } = user;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role === "FREELANCER" ? "فریلنسر" : "کارفرما"}</td>
      <td>
        <span
          className={`rounded-full px-4 py-1  ${statusStyle[status].style}`}
        >
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <button
          className="text-blue cursor-pointer hover:opacity-70"
          onClick={() => setOpen(true)}
        >
          <HiPencilAlt className="w-6 h-6 translate-y-1 -translate-x-1" />
        </button>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title="تعیین وضعیت کاربر"
        >
          <ChangeUserStatus
            onClose={() => setOpen(false)}
            userId={user._id}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default UserRow;
