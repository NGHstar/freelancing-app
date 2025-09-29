import { IoAddCircleOutline } from "react-icons/io5";
import LoadingIndicator from "../../ui/LoadingIndicator";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./useOwnerProject";
import Modal from "../../ui/Modal";
import { useState } from "react";
import EmptyList from "../../ui/EmptyList";
import CreateProjectForm from "./CreateProjectForm";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  const [isCreateProjectOpen, setIsCreateProjectOpen] =
    useState(false);

  if (isLoading) return <LoadingIndicator />;

  return (
    <>
      {/* هدر جدول و دکمه افزودن پروژه */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">پروژه‌های شما</h2>
        <button
          onClick={() => setIsCreateProjectOpen(true)}
          className="btn btn--primary flex"
        >
          افزودن پروژه
          <IoAddCircleOutline className="w-5 h-5 mr-1.5 mt-0.5" />
        </button>
      </div>

      {/* مودال ایجاد پروژه */}
      <Modal
        open={isCreateProjectOpen}
        onClose={() => setIsCreateProjectOpen(false)}
        title="افزودن پروژه جدید"
        icon={
          <IoAddCircleOutline className="h-8 w-8 text-blue-500" />
        }
      >
        <CreateProjectForm
          onClose={() => setIsCreateProjectOpen(false)}
        />
      </Modal>

      {/* جدول پروژه‌ها */}
      {!projects || projects.length === 0 ? (
        <EmptyList mt="m-24" />
      ) : (
        <Table>
          <Table.Header>
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته‌بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ‌ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
            <th>درخواست‌ها</th>
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
      )}
    </>
  );
}

export default ProjectTable;
