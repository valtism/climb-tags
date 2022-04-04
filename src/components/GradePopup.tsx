import ColorPicker from "./ColorPicker";
import { ColorType } from "./Constants";

interface GradePopupProps {
  grade: string;
  setGrade: (newGrade: string) => void;
  color: ColorType;
  setColor: (newColor: ColorType) => void;
}
export default function GradePopup({
  grade,
  setGrade,
  color,
  setColor,
}: GradePopupProps) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded border bg-white p-2 shadow-lg">
      <div className="text-sm font-medium uppercase text-gray-500">Grade:</div>
      <input
        autoFocus
        value={grade?.toString() || ""}
        onChange={(e) => setGrade(e.currentTarget.value)}
        className="w-32 rounded bg-gray-100 text-center text-xl hover:bg-gray-200 focus:bg-gray-200"
      />
      <ColorPicker color={color} setColor={setColor} />
    </div>
  );
}
