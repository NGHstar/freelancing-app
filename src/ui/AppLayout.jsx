import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar />

      {/* Content */}
      <div className="p-8 overflow-y-auto bg-gray-100">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-purple-100 col-span-2">app footer</div>
    </div>
  );
}

export default AppLayout;
