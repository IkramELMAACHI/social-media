import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: sessionData } = useSession();

  return (
    <div className="px-6">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <div className="h-15 w-40">
            <img
              className="h-full w-full scale-100"
              src="https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1673046611452_akame-logo.jpeg"
            />
          </div>
        </div>
        {sessionData ? (
          <button
            className="rounded-full px-5 py-2 text-red-600 hover:bg-red-50"
            onClick={() => signOut()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
        ) : (
          <button
            // href="/auth/signin"
            onClick={() => signIn()}
            className="rounded-full bg-blue-500 px-5 py-2 text-white"
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}
