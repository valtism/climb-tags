import clsx from "clsx";
import Color from "color";
import { ColorType, GradeWidth } from "./Constants";

interface GradeButtonProps {
  color: ColorType;
  grade: string;
}
export function GradeButton({ color, grade }: GradeButtonProps) {
  return (
    <div
      className="flex h-20 items-stretch divide-x-2 divide-black overflow-hidden rounded-l-3xl rounded-r-3xl border-2 border-black"
      style={{ width: GradeWidth }}
    >
      <div className="flex w-24 flex-shrink-0 items-center justify-end pr-1">
        <span className="text-7xl font-medium">{grade}</span>
      </div>
      <div
        className="flex w-full items-stretch justify-start pl-3 pr-2 text-base uppercase drop-shadow-2xl"
        style={{
          backgroundColor: color.hex,
          color: Color(color.hex).darken(0.1).isLight() ? "#000" : "#fff",
        }}
      >
        <span className="tracking-wider" style={{ writingMode: "vertical-lr" }}>{color.name}</span>
      </div>
    </div>
  );

  return (
    <div
      className={clsx(
        "relative flex h-[84px] w-[84px] flex-shrink-0 items-center justify-center",
        "overflow-hidden rounded-t-[4rem] rounded-b-xl border-2 border-black ring-gray-400 hover:ring-2"
      )}
      style={{ backgroundColor: color.hex }}
    >
      <div className="flex items-center justify-center">
        <div
          className="pointer-events-none absolute top-4 text-[3rem] font-medium"
          style={{ color: Color(color.hex).isLight() ? "#000" : "#fff" }}
        >
          {grade}
        </div>
        <div
          className="pointer-events-none absolute -bottom-2 text-[1.1rem] font-medium uppercase"
          style={{ color: Color(color.hex).isLight() ? "#000" : "#fff" }}
        >
          {color.name}
        </div>
      </div>
    </div>
  );
}
