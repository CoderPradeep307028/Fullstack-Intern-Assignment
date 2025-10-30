import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">ExperienceHub</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
      </div>
    </nav>
  );
}
