export default function FarmCard({ farm }) {
  return (
    <div className="border p-4 rounded-lg bg-white shadow">
      <h3 className="font-bold text-lg">{farm.crop}</h3>
      <p>Quantity: {farm.quantity}</p>
      <p>Location: {farm.location}</p>
      <p>Price: {farm.price}</p>
      <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded">
        Match Buyer
      </button>
    </div>
  );
}
