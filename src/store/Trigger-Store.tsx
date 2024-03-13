import { create } from "zustand";

export const useTriggerStore = create((set) => ({
  trigger: false,
  header: false,
  setTrigger: (trigger: boolean) => set({ trigger }),
  setHeader: (header: boolean) => set({ header }),
}));
