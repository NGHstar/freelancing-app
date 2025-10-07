import { ThreeDot } from "react-loading-indicators";

function LoadingIndicator({ size = "medium", mt = "mt-2" }) {
  return (
    <div className={`flex justify-center items-center mb-4 ${mt}`}>
      <ThreeDot color="#fe7d6d" size={size} textColor="#666" />
    </div>
  );
}

export default LoadingIndicator;
