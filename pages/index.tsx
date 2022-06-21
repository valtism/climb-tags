import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Creator from "../components/Creator";
import { MadeBy } from "../components/MadeBy";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Climb Tag Creator</title>
      </Head>
      <div className="flex min-h-screen flex-col font-Ubuntu selection:bg-rose-200">
        <header className="flex items-center justify-between px-6 bg-gray-100 print:hidden mb-10">
          <MadeBy />
          <Link href={"/contact"}>
            <a className="text-gray-600 hover:text-gray-900">Contact me</a>
          </Link>
        </header>
        <div className="mx-auto space-y-14 pt-6">
          <Creator />
          <Creator />
        </div>
      </div>
    </>
  );
};

export default Home;
