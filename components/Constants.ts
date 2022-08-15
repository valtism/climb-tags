export const Salamander = "";

export type ColorType = {
  name: string;
  hex: string;
};

export interface Route {
  grade: string;
  color: ColorType;
  name: string;
  setter: string;
}

export const DefaultColors: ColorType[] = [
  { name: "Black", hex: "#333" },
  { name: "Gray", hex: "#666" },
  { name: "White", hex: "#fff" },
  { name: "Red", hex: "#d22" },
  { name: "Orange", hex: "#f71" },
  { name: "Yellow", hex: "#fc0" },
  { name: "Lime", hex: "#5e0" },
  { name: "Green", hex: "#080" },
  { name: "Teal", hex: "#7cc" },
  { name: "Blue", hex: "#04d" },
  { name: "Purple", hex: "#a2e" },
  { name: "Pink", hex: "#f5c" },
];

export const initialRoute: Route = {
  grade: "",
  color: DefaultColors[1],
  name: "",
  setter: "",
};

export const GradeWidth = 164;
