import StatCard from "../../ui/StatCard";
import { HiFolderOpen, HiMail, HiUsers } from "react-icons/hi";

function Stats({ proposals, users, projects }) {
  // ---
  return (
    <div className="flex flex-wrap gap-4">
      <StatCard
        value={proposals.length}
        title={"درخواست‌ها"}
        icon={<HiMail className="w-20 h-20" />}
        color={"blue"}
      />
      <StatCard
        value={projects.length}
        title={"پروژه‌ها"}
        color={"green"}
        icon={<HiFolderOpen className="w-20 h-20" />}
      />
      <StatCard
        value={users.length}
        title={"کاربران"}
        color={"yellow"}
        icon={<HiUsers className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
