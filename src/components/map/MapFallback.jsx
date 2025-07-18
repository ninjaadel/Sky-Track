export function MapFallback() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 z-50">
      <div className="relative w-28 h-28 mb-6">
        <div className="absolute inset-0">
          <span className="text-7xl">🗺️</span>
        </div>
      </div>
      <h1 className="text-2xl font-semibold mb-2 text-center">
        Map Could Not Be Loaded


      </h1>
      <p className="text-center max-w-md text-sm opacity-80">
        The map cannot be displayed at the moment. Please check your internet connection or refresh the page.
Try Again

      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow transition-all dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );
}