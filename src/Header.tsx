import { Salamander } from "./Constants";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-2 py-1">
      <div className="flex flex-col px-2 font-Ubuntu text-[2rem] font-extrabold uppercase leading-[1]">
        <span>Sydney</span>
        <span>Indoor</span>
        <span>Climbing</span>
        <span>Gym</span>
      </div>
      <div className="font-icomoon text-[8rem] leading-[1em] text-[#eb3453]">
        {Salamander}
      </div>
    </header>
  );
}
