import DashboardHeader from "../../ui/DashboardHeader";
import ProposalsTable from "../proposals/ProposalsTable";

function AdminProposals() {
  return (
    <div>
      <DashboardHeader
        title={"پروپوزال‌ها"}
        text={"لیست تمام درخواست‌‌ها"}
      />
      <ProposalsTable />
    </div>
  );
}

export default AdminProposals;
