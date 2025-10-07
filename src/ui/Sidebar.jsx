function Sidebar({ children }) {
  return (
    <div className="row-start-1 row-span-2 border-l-2 border-border bg-card p-4">
      <ul className="flex flex-col gap-y-4">{children}</ul>
    </div>
  );
}

export default Sidebar;
