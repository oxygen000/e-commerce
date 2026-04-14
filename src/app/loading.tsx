import { ClimbingBoxLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ClimbingBoxLoader
        color="#70ff00"
        loading
        size={20}
        speedMultiplier={2}
      />
    </div>
  );
}
