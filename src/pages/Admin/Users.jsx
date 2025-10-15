import UsersTable from "../../features/admin/UsersTable";
import DashboardHeader from "../../ui/DashboardHeader";

function Users() {
  return (
    <div>
      <DashboardHeader
        title="کاربران"
        text="مشاهده و مدیریت کاربران"
      />
      <UsersTable />
    </div>
  );
}

export default Users;
