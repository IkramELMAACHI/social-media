import React from "react";
import Header from "../components/header";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="mt-10 flex">{children}</div>
    </div>
  );
}
