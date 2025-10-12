import { ThreeDot } from "react-loading-indicators";

function LoadingIndicator({
  size = "medium",
  mt = "mt-2",
  pos = "center",
}) {
  return (
    <div
      className={`flex justify-${pos} items-center mb-4 w-full ${mt}`}
    >
      <ThreeDot color="#fe7d6d" size={size} textColor="#666" />
    </div>
  );
}

export default LoadingIndicator;
