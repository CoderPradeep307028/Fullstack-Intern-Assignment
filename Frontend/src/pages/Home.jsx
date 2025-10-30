import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/experiences") 
      .then((res) => setExperiences(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Available Experiences</h2>
      <div className="grid grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <div key={exp._id} className="border p-4 rounded-xl shadow hover:shadow-lg">
            <img src={exp.image} alt={exp.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">{exp.name}</h3>
            <p className="text-gray-600">{exp.location}</p>
            <Link
              to={`/details/${exp._id}`}
              className="text-blue-600 font-semibold mt-2 inline-block"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
