function DashboardHeader({ title, text }) {
  return (
    <div className="mb-8">
      <h1 className="text-secondary text-xl font-black mb-2">
        {title}
      </h1>
      <p className="text-secondary-400">{text}</p>
    </div>
  );
}

export default DashboardHeader;
