import {
  HiFolderOpen,
  HiHome,
  HiMail,
  HiUsers,
} from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard" title="داشبورد">
          <HiHome className="w-5 h-5" />
        </CustomNavLink>
        <CustomNavLink to="users" title="کاربران">
          <HiUsers className="w-5 h-5" />
        </CustomNavLink>
        <CustomNavLink to="projects" title="پروژه‌ها">
          <HiFolderOpen className="w-5 h-5" />
        </CustomNavLink>
        <CustomNavLink to="proposals" title="درخواست‌ها">
          <HiMail className="w-5 h-5" />
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
