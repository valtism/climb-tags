import Link from "next/link";
import { FeedbackForm } from "../components/FeedbackForm";

export default function Contact() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="mb-10">
        <Link href={"/"}>
          <a className="text-md font-bold">{"<- Back"}</a>
        </Link>
      </div>
      <FeedbackForm />
    </div>
  );
}
