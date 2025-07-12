import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <>
      <div className="flex justify-center bg-blue-200 text-2xl">
        User:{userId}
      </div>
    </>
  );
}
