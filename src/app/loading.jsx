export default function Loading() {
  return (
    <div className="flex justify-center mt-16">
      <div className="text-center">
        <image
          src="/spinner.svg"
          alt="Loading..."
          className="w-16 h-16 animate-spin text-amber-500"
        />
        <p className="mt-4 text-gray-500">Loading...</p>
      </div>
    </div>
  );
}
