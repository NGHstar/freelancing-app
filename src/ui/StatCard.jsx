function StatCard({ value, title, icon, color }) {
  // ---
  const colors = {
    blue: "bg-blue/15 text-blue",
    green: "bg-green-500/15 text-green-600",
    yellow: "bg-yellow-500/15 text-yellow-600",
  };

  return (
    <div className="bg-card p-5 rounded-xl flex gap-x-6 justify-start items-center flex-1 min-w-[270px]">
      <div className={`rounded-full p-4 ${colors[color]}`}>
        {icon}
      </div>
      <div className="grid">
        <h5 className="text-secondary-400 text-lg font-bold">
          {title}
        </h5>
        <p className="text-2xl mt-2 font-black">{value}</p>
      </div>
    </div>
  );
}
export default StatCard;
