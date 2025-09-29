import { ThreeDot } from "react-loading-indicators";

function LoadingIndicator({ size = "medium" }) {
  return (
    <div className="flex justify-center items-center mb-4 mt-2">
      <ThreeDot color="#fe7d6d" size={size} textColor="#666" />
    </div>
  );
}

export default LoadingIndicator;
