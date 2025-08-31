export default function AlertBox({ message, onClose }) {
  return (
    <div className="fixed bottom-4 right-4 bg-yellow-200 border border-yellow-600 text-yellow-800 p-4 rounded shadow-lg">
      <p>{message}</p>
      <button
        onClick={onClose}
        className="mt-2 bg-yellow-600 text-white px-3 py-1 rounded"
      >
        Close
      </button>
    </div>
  );
}
