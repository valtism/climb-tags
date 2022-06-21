import Creator from "./Creator";
import { FeedbackForm } from "./FeedbackForm";
import { MadeBy } from "./MadeBy";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col font-Ubuntu selection:bg-rose-200">
      <div className="mx-auto space-y-14 pt-6">
        <Creator />
        <Creator />
      </div>
      <div className="bg-gray-100 print:hidden mt-10">
        <div className="mx-auto max-w-4xl py-10">
          <FeedbackForm />
        </div>
        <div className="mx-4">
          <MadeBy />
        </div>
      </div>
    </div>
  );
}
