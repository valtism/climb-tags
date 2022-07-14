import { Salamander } from "./Constants";

export default function Logos() {
  return (
    <header className="flex items-center justify-between px-2 py-1">
      <div className="flex flex-col px-2 text-2xl font-extrabold uppercase leading-[1]">
        <span>Sydney</span>
        <span>Indoor</span>
        <span>Climbing</span>
        <span>Gym</span>
      </div>
      <div className="font-icomoon text-[10rem] leading-[0.6em] text-[#eb3453] -rotate-90 h-24">
        {Salamander}
      </div>
    </header>
  );
}
