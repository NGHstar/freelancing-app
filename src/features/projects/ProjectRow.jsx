import { HiEye, HiOutlineTrash } from "react-icons/hi";
import Table from "../../ui/Table";
import pDate from "../../utils/pDate";
import pMoney from "../../utils/pMoney";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";
import { useState } from "react";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

function ProjectRow({ project, index }) {
  // ---
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { removeProject } = useRemoveProject();

  console.log(project.category);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="truncate max-w-44">{project.title}</td>
      <td>{project.category?.title}</td>
      <td>{pMoney(project.budget)}</td>
      <td>{project.deadline ? pDate(project.deadline) : "-"}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags?.map((tag) => {
            return (
              <span
                className="bg-chips-gray rounded-lg px-2 pt-1 pb-0.5 text-[0.78rem] text-secondary"
                key={tag}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
        {/* {project.status === "OPEN" ? (
          <span className="rounded-lg px-2 py-1 text-green-800 bg-green-50">
            باز
          </span>
        ) : (
          <span className="rounded-lg px-2 py-1 text-red-800 bg-red-50">
            بسته
          </span>
        )} */}
      </td>
      <td className="space-x-4">
        <>
          {/* EDIT */}
          <button onClick={() => setIsEditOpen(true)}>
            <TbPencilMinus className="w-5 h-5 text-blue cursor-pointer  rounded-sm hover:opacity-60 transition duration-200" />
          </button>
          <Modal
            open={isEditOpen}
            onClose={() => setIsEditOpen(false)}
            minWidth="sm:min-w-2xl"
            title={`ویرایش پروژه «${project.title}»`}
            icon={<TbPencilMinus className="h-6 w-6 text-blue" />}
          >
            <CreateProjectForm
              projectToEdit={project}
              onClose={() => setIsEditOpen(false)}
            />
          </Modal>
        </>
        <>
          {/* DELETE */}
          <button onClick={() => setIsDeleteOpen(true)}>
            <HiOutlineTrash className="w-5 h-5 text-ired cursor-pointer rounded-sm hover:opacity-60 transition duration-200" />
          </button>
          <Modal
            open={isDeleteOpen}
            onClose={() => setIsDeleteOpen(false)}
            title={`حذف پروژه «${project.title}»`}
            icon={<HiOutlineTrash className="h-6 w-6 text-ired" />}
          >
            <p>آیا مطمئن هستید؟</p>
            <div className="flex mt-3 justify-stretch items-center gap-2">
              <button
                onClick={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
                className="small-btn btn--primary flex-1"
              >
                بله
              </button>
              <button
                onClick={() => setIsDeleteOpen(false)}
                className="small-btn btn--secondary flex-1"
              >
                خیر
              </button>
            </div>
          </Modal>
        </>
      </td>
      <td>
        <Link to={project._id}>
          <HiEye className="w-5 h-5 text-blue mx-auto" />
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
