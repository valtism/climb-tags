import { ButtonHTMLAttributes, useState } from "react";
import { initialRoute, Route } from "./Constants";
import Header from "./Header";
import Routes from "./Routes";

export default function Creator() {
  const [routes, setRoutes] = useState<Route[]>([initialRoute]);
  return (
    <div
      className="flex h-[460px] w-[700px] flex-col space-y-2 font-Ubuntu"
      style={{ printColorAdjust: "exact" }}
    >
      <Header />
      <main className="flex h-full flex-col justify-between py-1 pl-4 pr-8">
        <div className="flex flex-col space-y-2">
          <TableHeader />
          <Routes routes={routes} setRoutes={setRoutes} />
          {routes.length < 3 && (
            <AddRouteButton
              onClick={() => setRoutes([...routes, initialRoute])}
            />
          )}
        </div>
        <SetOn />
      </main>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="flex items-center space-x-6 text-xl font-medium uppercase">
      <span className="w-[84px] text-center">Grade</span>
      <span className="flex-1">Name</span>
      <span>Setter</span>
    </div>
  );
}

function AddRouteButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="flex justify-center print:hidden">
      <button
        {...props}
        className="rounded bg-red-400 px-2 py-1 text-white hover:bg-red-500"
      >
        Add Route
      </button>
    </div>
  );
}

function SetOn() {
  return (
    <div className="flex items-center justify-center space-x-2 pl-10 text-gray-800">
      <span>Set On:</span>
      <input className="w-32 min-w-0" type="date" />
    </div>
  );
}
