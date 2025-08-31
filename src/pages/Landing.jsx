export default function Landing({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-600 text-white">
      <h1 className="text-4xl font-bold mb-4">🌍 AgriLink360</h1>
      <p className="mb-6">From Farm to Table – Fighting Hunger in Africa</p>
      <button
        onClick={onStart}
        className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold"
      >
        Get Started
      </button>
    </div>
  );
}
