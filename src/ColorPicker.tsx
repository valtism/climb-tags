import {
  ButtonHTMLAttributes,
  SVGProps,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { DefaultColors } from "./DefaultColors";


interface ColorPickerProps {
  color?: string;
  setColor: (color: string) => void;
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
            key={dotColor}
            color={dotColor}
            selected={dotColor === color}
            onClick={() => setColor(dotColor)}
          />
        ))}
      </div>
      <CustomColorInput color={color} setColor={setColor} />
    </div>
  );
}

function CustomColorInput({ color, setColor }: ColorPickerProps) {
  // We use a separate state so that it will not change when other colors in the picker are selected
  const [inputColor, setInputColor] = useState(color);
  const inputPickerRef = useRef<HTMLInputElement>(null);

  // We need to debounce for the <input type="color" /> because dragging calls the setter too often
  const setColors = (color: string) => {
    setColor(color);
    setInputColor(color);
  };

  // Allow input to be changed by other color changes
  useEffect(() => {
    setInputColor(color);
  }, [color]);

  return (
    <div className="relative flex items-center font-mono">
      <input
        type="text"
        placeholder="FFFFFF"
        value={inputColor?.slice(1)}
        onChange={(e) => {
          const input = `#${e.target.value
            .replace(/[^0-9A-F]/gi, "")
            .slice(0, 6)
            .toUpperCase()}`;

          setInputColor(input);
          if (isValidHex(input)) {
            setColor(input);
          }
        }}
        // ----- Seven dots wide
        style={{ width: 24 * 6, fontSize: 12 }}
        className="h-7 w-full text-gray-900 rounded border border-gray-300 pl-10 pr-2 font-mono text-sm focus:outline-none"
      />
      <ColorDot
        color={color}
        selected={color === inputColor}
        onClick={() => inputPickerRef.current?.click()}
        className="absolute left-0 mx-2 rounded border"
        dotClassName="border rounded-full"
      />
      <input
        ref={inputPickerRef}
        type="color"
        placeholder="FFFFFF"
        value={color}
        onChange={(e) => setColors(e.target.value.toUpperCase())}
        className="invisible absolute left-0 h-6 w-6"
      />
      <span
        className="absolute right-0 mr-2 font-mono font-bold text-gray-400"
        style={{ fontSize: 10 }}
      >
        HEX
      </span>
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
