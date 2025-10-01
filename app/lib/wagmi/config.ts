import { mainnet, anvil } from "wagmi/chains";
import { cookieStorage, createStorage, http } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { raise } from "../index";

export const config = getDefaultConfig({
  appName: "Decentralized Stablecoin Application",
  projectId:
    process.env.NEXT_PUBLIC_PROJECT_ID ??
    raise("NEXT_PUBLIC_PROJECT_ID is not defined"),
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  chains: [
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [anvil] : []),
  ],
});
