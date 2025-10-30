import { useLocation, Link } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const success = state?.success;

  return (
    <div className="text-center p-10">
      {success ? (
        <h2 className="text-2xl text-green-600 font-semibold">Booking Successful 🎉</h2>
      ) : (
        <h2 className="text-2xl text-red-600 font-semibold">Booking Failed ❌</h2>
      )}
      <Link to="/" className="mt-4 inline-block text-blue-600 underline">Go Home</Link>
    </div>
  );
}
