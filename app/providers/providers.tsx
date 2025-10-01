"use client";
import { Session } from "next-auth";
import { PropsWithChildren } from "react";
import AuthProvider from "./auth-provider";
import RainbowKitProvider from "./rainbow-kit-provider";
import ReactQueryProvider from "./react-query-provider";
import { State } from "wagmi";
//import { AppStoreProvider } from "./app-store-provider";

type ProviderProps = {
  children: React.ReactNode;
  cookie?: string;
  session: Session | null;
};

export function Providers({
  children,
  cookie,
  session,
}: PropsWithChildren<ProviderProps>) {
  return (
    <>
      <AuthProvider session={session}>
        <ReactQueryProvider>
          <RainbowKitProvider cookie={cookie}>{children}</RainbowKitProvider>
        </ReactQueryProvider>
      </AuthProvider>
    </>
  );
}
