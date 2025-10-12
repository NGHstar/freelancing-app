const statusStyle = [
  { label: "رد شده", style: "bg-ired text-white" },
  {
    label: "در انتظار تایید",
    style: "bg-chips-gray text-secondary",
  },
  { label: "تایید شده", style: "bg-msg text-white" },
];

export const projectStatus = {
  OPEN: { label: "باز", style: "bg-msg text-white" },
  CLOSED: {
    label: "بسته",
    style: "bg-ired text-white",
  },
};

export default statusStyle;
