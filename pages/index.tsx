import type { NextPage } from "next";
import Head from "next/head";
import { Changelog } from "../components/Changelog";
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
        <div className="mx-auto max-w-full space-y-14 overflow-auto pt-6 sm:overflow-visible">
          <Creator />
          <Creator />
        </div>
        <div className="mt-20 bg-gray-100 px-6 pt-20 print:hidden">
          <div className="mx-auto max-w-4xl pb-10">
            <FeedbackForm />
          </div>
        </div>
        <footer className="bg-gray-900 px-6 pt-20 text-white print:hidden">
          <div className="mx-auto max-w-4xl pb-10">
            <Changelog />
          </div>
          <div className="flex justify-end">
            <MadeBy />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
