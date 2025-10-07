import { HiFolderOpen, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import CustomNavLink from "../../ui/CustomNavLink";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="/owner/dashboard">
          <HiHome />
          داشبورد
        </CustomNavLink>
        <CustomNavLink to="/owner/projects">
          <HiFolderOpen />
          پروژه‌ها
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
