import {
  ButtonHTMLAttributes,
  SVGProps,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { ColorType, DefaultColors } from "./Constants";

interface ColorPickerProps {
  color: ColorType;
  setColor: (color: ColorType) => void;
}
export default function ColorPicker({ color, setColor }: ColorPickerProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col space-y-2 bg-white"
    >
      <div className="grid grid-cols-6">
        {DefaultColors.map((dotColor) => (
          <ColorDot
            key={dotColor.name}
            color={dotColor.hex}
            selected={dotColor.hex === color.hex}
            onClick={() => setColor(dotColor)}
          />
        ))}
      </div>
    </div>
  );
}

interface ColorDotProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  selected: boolean;
  className?: string;
  dotClassName?: string;
}
function ColorDot({
  color,
  selected,
  className,
  dotClassName,
  ...props
}: ColorDotProps) {
  return (
    <button
      style={{ color }}
      className={clsx(
        "flex h-6 w-6 items-center justify-center rounded focus:outline-none",
        "border border-transparent hover:bg-gray-200",
        {
          "border-gray-300": selected,
        },
        className
      )}
      {...props}
    >
      <DotIcon className={clsx("h-3 w-3 fill-current", dotClassName)} />
    </button>
  );
}

function DotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <rect width="16" height="16" x="0" y="0" rx="10" fill="#66666688" />
      <rect width="15" height="15" x="0.5" y="0.5" rx="9" />
    </svg>
  );
}

function isValidHex(color: string) {
  return /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(color);
}
