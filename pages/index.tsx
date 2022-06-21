import type { NextPage } from "next";
import Head from "next/head";
import Creator from "../components/Creator";
import { FeedbackForm } from "../components/FeedbackForm";
import { MadeBy } from "../components/MadeBy";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Climb Tag Creator</title>
      </Head>
      <div className="flex min-h-screen flex-col font-Ubuntu selection:bg-rose-200">
        <div className="mx-auto space-y-14 pt-6">
          <Creator />
          <Creator />
        </div>
        <footer className="bg-gray-100 print:hidden mt-10">
          <div className="mx-auto max-w-4xl py-10">
            <FeedbackForm />
          </div>
          <div className="mx-4">
            <MadeBy />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
