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
        <CustomNavLink to="dashboard">
          <HiHome className="w-5 h-5" />
          داشبورد
        </CustomNavLink>
        <CustomNavLink to="users">
          <HiUsers className="w-5 h-5" />
          کاربران
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiFolderOpen className="w-5 h-5" />
          پروژه‌ها
        </CustomNavLink>
        <CustomNavLink to="proposals">
          <HiMail className="w-5 h-5" />
          درخواست‌ها
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
