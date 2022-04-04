import { useState } from "react";
import Color from "color";
import {
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react-dom-interactions";
import ColorPicker from "./ColorPicker";
interface GradePickerProps {
  color: string;
  setColor: (color: string) => void;
  grade: string;
  setGrade: (grade: string) => void;
}

export default function GradePicker({
  color,
  setColor,
  grade,
  setGrade,
}: GradePickerProps) {
  const [open, setOpen] = useState(false);
  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "right",
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useDismiss(context, { outsidePointerDown: true }),
  ]);
  return (
    <>
      <div
        {...getReferenceProps({
          ref: reference,
        })}
        className="relative flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-gray-300 ring-gray-300 hover:ring-2"
      >
        <button
          className="flex h-full w-full items-center justify-center"
          style={{ backgroundColor: color }}
          onClick={() => setOpen(true)}
        >
          <div
            className="pointer-events-none text-[2.75rem] font-medium"
            style={{ color: Color(color).isLight() ? "#000" : "#fff" }}
          >
            {grade}
          </div>
        </button>
      </div>
      {open && (
        <div
          {...getFloatingProps({
            ref: floating,
            style: {
              position: strategy,
              top: y ?? "",
              left: x ?? "",
            },
          })}
          className="z-10"
        >
          <div className="flex flex-col items-center space-y-2 rounded border bg-white p-2 shadow-lg">
            <div className="text-sm font-medium uppercase text-gray-500">
              Grade:
            </div>
            <input
              autoFocus
              value={grade?.toString() || ""}
              onChange={(e) => setGrade(e.currentTarget.value)}
              className="w-32 rounded bg-gray-100 text-center text-xl hover:bg-gray-200 focus:bg-gray-200"
            />
            <ColorPicker color={color} setColor={(color) => setColor(color)} />
          </div>
        </div>
      )}
    </>
  );
}
