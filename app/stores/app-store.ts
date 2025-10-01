import { createStore } from "zustand/vanilla";

export type AppStoreState = {
  isSetup: boolean;
};

export type AppStoreActions = {
  setUp: () => void;
};

export type AppStore = AppStoreState & AppStoreActions;

export const defaultInitState: AppStoreState = {
  isSetup: false,
};
export const createAppStore = () => {
  return createStore<AppStore>()((set) => ({
    ...defaultInitState,
    setUp: () => set({ isSetup: true }),
  }));
};
