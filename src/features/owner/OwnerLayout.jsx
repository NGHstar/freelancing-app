import { HiFolderOpen, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import CustomNavLink from "../../ui/CustomNavLink";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard" title="داشبورد">
          <HiHome className="w-6 h-6" />
        </CustomNavLink>
        <CustomNavLink to="projects" title="پروژه‌ها">
          <HiFolderOpen className="w-6 h-6" />
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
