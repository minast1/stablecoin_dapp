"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { PropsWithChildren } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
  session: Session | null;
};
export function AuthProvider({
  children,
  session,
}: PropsWithChildren<AuthProviderProps>) {
  return (
    <SessionProvider session={session} baseUrl={process.env.NEXTAUTH_URL}>
      {children}
    </SessionProvider>
  );
}

export default AuthProvider;
