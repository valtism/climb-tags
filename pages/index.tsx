import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
        <footer className="px-6 pt-20 mt-20 bg-gray-100 print:hidden">
          <div className="max-w-4xl mx-auto pb-10">
            <FeedbackForm />
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
