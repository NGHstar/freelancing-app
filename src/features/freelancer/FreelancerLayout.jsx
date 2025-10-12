import { HiCollection, HiFolderOpen, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { MdAssignment } from "react-icons/md";

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome className="w-5 h-5" />
          داشبورد
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiFolderOpen className="w-5 h-5" />
          پروژه‌ها
        </CustomNavLink>
        <CustomNavLink to="proposals">
          <MdAssignment className="w-5 h-5" />
          درخواست‌ها
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
