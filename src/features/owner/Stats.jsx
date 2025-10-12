import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import StatCard from "../../ui/StatCard";

function Stats({ projects }) {
  // ---
  const projectsCount = projects.length;

  const acceptedProjectsCount = projects.filter(
    (p) => p.status === 2
  ).length;

  const proposalsCount = projects.reduce(
    (sum, project) => project.proposals.length + sum,
    0
  ); // 0 is the initial value of sum

  return (
    <div className="flex flex-wrap gap-4">
      <StatCard
        value={projectsCount}
        title={"پروژه‌ها"}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        color={"blue"}
      />
      <StatCard
        value={acceptedProjectsCount}
        title={"پروژه‌های واگذار شده"}
        color={"green"}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <StatCard
        value={proposalsCount}
        title={"پروپوزال‌ها"}
        color={"yellow"}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
