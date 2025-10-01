import { createAuthenticationAdapter } from "@rainbow-me/rainbowkit";
import { signIn, signOut } from "next-auth/react";
import { createSiweMessage } from "viem/siwe";

const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/nonce`);
    if (!response.ok) throw new Error("Failed to get nonce");
    const data = await response.json();
    return data.nonce;
  },
  createMessage: ({ nonce, address, chainId }) => {
    return createSiweMessage({
      domain: window.location.host,
      address,
      statement: "Sign in with Ethereum to the app.",
      uri: window.location.origin,
      version: "1",
      chainId,
      nonce,
    });
  },
  verify: async ({ message, signature }) => {
    const loginData = {
      message,
      signature,
    };

    const verifyRes = await signIn("credentials", {
      //redirect: false,
      message: loginData.message,
      redirectTo: window.location.origin + "/dashboard",
      signature: loginData.signature,
    });

    return new Promise((resolve) => {
      resolve(true);
    });
    //return Boolean(verifyRes?.ok);
  },
  signOut: async () => {
    // await fetch('/api/logout');
    // await deleteCookieFromIronSession();
    await signOut({
      redirectTo: window.location.origin,
    });
  },
});

export default authenticationAdapter;
