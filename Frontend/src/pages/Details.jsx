import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Details() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/experiences/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold">{data.name}</h2>
      <p className="text-gray-600 mt-2">{data.description}</p>
      <button
        onClick={() => navigate("/checkout", { state: data })}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Book Now
      </button>
    </div>
  );
}
