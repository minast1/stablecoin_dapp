"use client";

import { useStore } from "zustand";
import { type ReactNode, createContext, useRef, useContext } from "react";

import { createAppStore, type AppStore } from "../stores/app-store";

export type AppStoreApi = ReturnType<typeof createAppStore>;

export const AppStoreContext = createContext<AppStoreApi | undefined>(
  undefined
);

export function AppStoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStoreApi | null>(null);
  if (storeRef.current == null) {
    storeRef.current = createAppStore();
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
}

export const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext);
  if (!appStoreContext) {
    throw new Error("useAppStore must be used within a AppStoreProvider");
  }
  return useStore(appStoreContext, selector);
};
