"use client";

import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitAuthenticationProvider,
  RainbowKitProvider as NextRainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { PropsWithChildren } from "react";
import { WagmiProvider } from "wagmi";
import { useSession } from "next-auth/react";
import authenticationAdapter from "../lib/authentication-adapter";
import { config } from "@/lib/wagmi/config";
import { getInitialState } from "@/lib/wagmi/server-config";

interface ProviderProps {
  children: React.ReactNode;
  cookie?: string;
}
export default function RainbowKitProvider({
  children,
  cookie,
}: PropsWithChildren<ProviderProps>) {
  const { status } = useSession();
  const initialState = getInitialState(cookie);
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <RainbowKitAuthenticationProvider
        adapter={authenticationAdapter}
        status={status}
      >
        {children}
      </RainbowKitAuthenticationProvider>
    </WagmiProvider>
  );
}
