import { useState } from "react";
import FarmCard from "../components/FarmCard";
import AlertBox from "../components/AlertBox";

const farms = [
  { id: 1, crop: "Maize", quantity: "100kg", location: "Lagos", price: "$50" },
  { id: 2, crop: "Tomatoes", quantity: "200kg", location: "Abuja", price: "$80" },
  { id: 3, crop: "Beans", quantity: "150kg", location: "Kano", price: "$65" },
];

export default function Dashboard() {
  const [alert, setAlert] = useState(false);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Harvests</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {farms.map((farm) => (
          <FarmCard key={farm.id} farm={farm} />
        ))}
      </div>

      <button
        onClick={() => setAlert(true)}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Simulate IoT Spoilage Alert
      </button>

      {alert && (
        <AlertBox
          message="⚠️ Storage Alert: Maize in Lagos at risk of spoilage!"
          onClose={() => setAlert(false)}
        />
      )}
    </div>
  );
}
