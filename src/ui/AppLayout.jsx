import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      {children}

      {/* Content */}
      <div className="p-8 overflow-y-auto bg-background">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-card col-span-2">app footer</div>
    </div>
  );
}

export default AppLayout;
