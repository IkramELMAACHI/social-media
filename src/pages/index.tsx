import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import Header from "../components/header";

const Home: NextPage = () => {
  const hello = api.organization.hello.useQuery({
    organizationName: "AkaMiracle",
  });

  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col">
      <Header />
      <main className="mt-10 flex flex-col items-center gap-2">
        <p className="text-2xl text-slate-600">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
        <p className="text-xl text-slate-500">
          {sessionData?.user
            ? `You are connected as  ${sessionData.user.name}`
            : "Please connect your account"}
        </p>
      </main>
    </div>
  );
};

export default Home;
