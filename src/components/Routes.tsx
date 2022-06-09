import { Route } from "./Constants";
import RouteRow from "./RouteRow";

interface RoutesProps {
  routes: Route[];
  setRoutes: (routes: Route[]) => void;
}
export default function Routes({ routes, setRoutes }: RoutesProps) {
  return (
    <div className="flex flex-col divide-y-2">
      {routes.map((route, index) => {
        function setRoute(newRoute: Route) {
          setRoutes(routes.map((route, i) => (i === index ? newRoute : route)));
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
  );
}
