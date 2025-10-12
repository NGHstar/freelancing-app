import { FiEdit3 } from "react-icons/fi";
import { HiWallet } from "react-icons/hi2";
import { MdOutlineDoneAll } from "react-icons/md";
import pMoney from "../../utils/pMoney";
import StatCard from "../../ui/StatCard";

function Stats({ proposals }) {
  // ---
  console.log(proposals);

  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const proposalsCount = proposals.length;

  console.log(acceptedProposals);

  const totalIncome = acceptedProposals.reduce((sum, proposal) => {
    return proposal.price + sum;
  }, 0);

  return (
    <div className="flex flex-wrap gap-4">
      <StatCard
        value={proposalsCount}
        title={"درخواست‌ها"}
        icon={<FiEdit3 className="w-20 h-20" />}
        color={"blue"}
      />
      <StatCard
        value={acceptedProposals.length}
        title={"درخواست‌های پذیرفته شده"}
        color={"green"}
        icon={<MdOutlineDoneAll className="w-20 h-20" />}
      />
      <StatCard
        value={pMoney(totalIncome)}
        title={"کیف پول"}
        color={"yellow"}
        icon={<HiWallet className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
