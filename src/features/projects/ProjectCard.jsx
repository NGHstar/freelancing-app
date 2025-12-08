import { HiEye } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import pDate from "../../utils/pDate";
import pMoney from "../../utils/pMoney";
import { Link } from "react-router-dom";
import { useState } from "react";
import useRemoveProject from "./useRemoveProject";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectCard({ project, index }) {
  // ---
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { removeProject } = useRemoveProject();

  return (
    <div className="bg-card border border-border rounded-xl p-4 mb-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-secondary truncate">
          {project.title}
        </h3>
        <span className="text-sm text-secondary-400">
          #{index + 1}
        </span>
      </div>

      <p className="text-sm text-secondary-400 mb-1">
        <strong>دسته:</strong> {project.category?.title || "-"}
      </p>
      <p className="text-sm text-secondary-400 mb-1">
        <strong>بودجه:</strong> {pMoney(project.budget)}
      </p>
      <p className="text-sm text-secondary-400 mb-1">
        <strong>ددلاین:</strong>{" "}
        {project.deadline ? pDate(project.deadline) : "-"}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tags?.map((tag) => (
          <span
            key={tag}
            className="bg-chips-gray text-secondary px-2 py-0.5 rounded-lg text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4 text-secondary-400">
        <div className="flex gap-2">
          <TbPencilMinus
            className="w-5 h-5 cursor-pointer hover:text-blue"
            onClick={() => setIsEditOpen(true)}
          />
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

          <HiOutlineTrash
            className="w-5 h-5 cursor-pointer hover:text-ired"
            onClick={() => setIsDeleteOpen(true)}
          />
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
          <Link to={project._id}>
            <HiEye className="w-5 h-5 cursor-pointer hover:text-blue" />
          </Link>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-lg ${
            project.status === "OPEN"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {project.status === "OPEN" ? "باز" : "بسته"}
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
