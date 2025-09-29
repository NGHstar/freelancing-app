function EmptyList({ message = "موردی یافت نشد 😴", mt = "m-12" }) {
  return <div className={`text-center ${mt}`}>{message}</div>;
}

export default EmptyList;
