import clsx from "clsx";
import Color from "color";
import { ColorType } from "./Constants";

interface GradeButtonProps {
  color: ColorType;
  grade: string;
}
export function GradeButton({ color, grade }: GradeButtonProps) {
  return (
    <div
      className={clsx(
        "relative flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center",
        "overflow-hidden rounded-t-[4rem] rounded-b-xl border-2 border-gray-300 ring-gray-300 hover:ring-2"
      )}
      style={{ backgroundColor: color.hex }}
    >
      <div className="flex items-center justify-center">
        <div
          className="pointer-events-none absolute top-3 text-[2.75rem] font-medium"
          style={{ color: Color(color.hex).isLight() ? "#000" : "#fff" }}
        >
          {grade}
        </div>
        <div
          className="pointer-events-none absolute -bottom-2 text-[1rem] font-medium uppercase"
          style={{ color: Color(color.hex).isLight() ? "#000" : "#fff" }}
        >
          {color.name}
        </div>
      </div>
    </div>
  );
}
