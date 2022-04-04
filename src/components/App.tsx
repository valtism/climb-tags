import Creator from "./Creator";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto">
        <Creator />
      </div>
      <div className="mt-auto print:hidden">
        <div className="flex justify-end space-x-1 p-2">
          <span>Made by</span>
          <a
            href="https://github.com/valtism/climb-tags"
            className="hover:underline"
          >
            @valtism
          </a>
        </div>
      </div>
    </div>
  );
}
