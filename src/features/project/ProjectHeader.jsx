import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  // ---
  const back = useMoveBack();

  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={back}>
        <HiArrowRight className="h-5 w-5 text-secondary cursor-pointer hover:text-primary" />
      </button>
      <h1 className="text-xl text-secondary font-semibold">
        لیست درخواست‌های پروژه: {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
