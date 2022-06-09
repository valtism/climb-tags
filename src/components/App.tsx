import Creator from "./Creator";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col caret-red-700 selection:bg-red-200">
      <div className="mx-auto space-y-20 py-6">
        <Creator />
        <Creator />
      </div>
      <div className="mt-auto print:hidden">
        <div className="flex justify-end space-x-1 p-2">
          <span className="text-gray-500">Made by</span>
          <a
            href="https://github.com/valtism/climb-tags"
            className="bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow filter"
          >
            @valtism
          </a>
        </div>
      </div>
    </div>
  );
}
