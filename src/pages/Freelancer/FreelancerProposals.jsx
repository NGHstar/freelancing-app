import ProposalsTable from "../../features/proposals/ProposalsTable";

function FreelancerProposals() {
  return (
    <div>
      <h1 className="font-black text-secondary text-xl mb-8">
        درخواست‌های شما
      </h1>
      <ProposalsTable />
    </div>
  );
}

export default FreelancerProposals;
