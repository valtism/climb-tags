import { ButtonHTMLAttributes, useState } from "react";
import { GradeWidth, initialRoute, Route } from "./Constants";
import Logos from "./Logos";
import Routes from "./Routes";

export default function Creator() {
  const [routes, setRoutes] = useState<Route[]>([initialRoute]);
  return (
    <div
      className="relative flex h-[460px] w-[700px] flex-col space-x-2"
      style={{ printColorAdjust: "exact" }}
    >
      <div className="flex h-full flex-col justify-between py-1 pl-4 pr-8 sm:px-0">
        <div className="flex flex-col space-y-2">
          <Logos />
          <TableHeader />
          <Routes routes={routes} setRoutes={setRoutes} />
          {routes.length < 3 && (
            <AddRouteButton
              onClick={() => setRoutes([...routes, initialRoute])}
            />
          )}
        </div>
        <SetOn />
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="flex items-center space-x-6 text-xl font-medium uppercase">
      <span className="pl-4 text-left" style={{ width: GradeWidth }}>
        Grade
      </span>
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
    <div className="flex items-center justify-center space-x-2 pl-10 text-xl text-gray-800">
      <span>Set On:</span>
      <input type="date" />
    </div>
  );
}
