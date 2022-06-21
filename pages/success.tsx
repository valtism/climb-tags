import Link from "next/link";

export default function Success() {
  return (
    <div className="px-20 py-10">
      <Link href={"/"}>
        <a className="font-bold">Back</a>
      </Link>
      <div className="pt-10 w-full flex justify-center text-2xl">
        Form successfully submitted!
      </div>
    </div>
  );
}
