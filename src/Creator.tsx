import { ButtonHTMLAttributes, useState } from "react";
import { initialRoute, Route } from "./Constants";
import Header from "./Header";
import RouteRow from "./RouteRow";

export default function Creator() {
  const [routes, setRoutes] = useState<Route[]>([initialRoute]);
  return (
    <div className="flex h-[460px] w-[700px] flex-col space-y-2 font-Ubuntu">
      <Header />
      <main className="flex h-full flex-col justify-between py-1 pl-4 pr-8">
        <div className="flex flex-col space-y-2">
          <TableHeader />
          <div className="flex flex-col divide-y-2">
            {routes.map((route, index) => {
              function setRoute(newRoute: Route) {
                setRoutes(
                  routes.map((route, i) => (i === index ? newRoute : route))
                );
              }
              function removeRoute() {
                setRoutes(routes.filter((_, i) => i !== index));
              }
              return (
                <RouteRow
                  key={index}
                  route={route}
                  setRoute={setRoute}
                  removeRoute={removeRoute}
                />
              );
            })}
          </div>
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
    <div className="flex items-center space-x-6 text-xl font-medium uppercase text-gray-500">
      <span className="w-[72px] text-center">Grade</span>
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
        className="rounded bg-red-300 px-2 py-1 text-white hover:bg-red-400"
      >
        Add Route
      </button>
    </div>
  );
}

function SetOn() {
  return (
    <div className="flex items-center justify-center space-x-2 pl-16 text-gray-500">
      <span>Set On:</span>
      <input className="w-32 min-w-0" type="date" />
    </div>
  );
}
