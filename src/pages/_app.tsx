import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { LayoutTree } from "@moxy/next-layout";

import { api } from "../utils/api";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <LayoutTree Component={Component} pageProps={pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
