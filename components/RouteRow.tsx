import { GradeButton } from "./GradeButton";
import { Route } from "./Constants";
import Popper from "./Popper";
import GradePopup from "./GradePopup";
import ResizableSegments from "./ResizableSegments";

interface RouteRowProps {
  route: Route;
  setRoute: (newRoute: Route) => void;
  removeRoute: () => void;
}
export default function RouteRow({
  route,
  setRoute,
  removeRoute,
}: RouteRowProps) {
  const { color, grade, name, setter } = route;
  return (
    <div>
      <div className="group relative -mr-8 flex items-center space-x-6 py-1 pr-8 text-4xl">
        <Popper RefNode={<GradeButton color={color} grade={grade} />}>
          <GradePopup
            grade={grade}
            setGrade={(grade) => setRoute({ ...route, grade })}
            color={color}
            setColor={(color) => setRoute({ ...route, color })}
          />
        </Popper>
        <ResizableSegments>
          <input
            value={name}
            onChange={(e) =>
              setRoute({ ...route, name: e.currentTarget.value })
            }
            placeholder="Name"
            spellCheck={false}
            className="min-w-0 flex-1 bg-transparent focus:outline-none tracking-wide"
          />

          <input
            value={setter}
            onChange={(e) =>
              setRoute({ ...route, setter: e.currentTarget.value })
            }
            placeholder="Setter"
            spellCheck={false}
            className="min-w-0 flex-1 bg-transparent focus:outline-none text-right tracking-wide"
          />
        </ResizableSegments>
        <button
          onClick={removeRoute}
          className="invisible absolute -right-4 mt-1 flex h-10 w-12 items-center justify-center text-xl text-gray-400 hover:text-gray-900 group-hover:visible"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
