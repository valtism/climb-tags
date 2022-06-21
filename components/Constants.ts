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
  { name: "Black", hex: "#333333" },
  { name: "Gray", hex: "#666666" },
  { name: "White", hex: "#fbf8f8" },
  { name: "Red", hex: "#dc2626" },
  { name: "Orange", hex: "#f97316" },
  { name: "Yellow", hex: "#fccb00" },
  { name: "Lime", hex: "#50e405" },
  { name: "Green", hex: "#008b02" },
  { name: "Teal", hex: "#68ccca" },
  { name: "Blue", hex: "#004dcf" },
  { name: "Purple", hex: "#9900ef" },
  { name: "Pink", hex: "#fa28af" },
];

export const initialRoute: Route = {
  grade: "",
  color: DefaultColors[1],
  name: "",
  setter: "",
};
