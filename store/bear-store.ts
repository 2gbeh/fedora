import { create } from "zustand";

interface BearState {
  count: number;
  mutate: (newCount?: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  count: 0,
  mutate: (newCount) =>
    set((state) => ({ count: state.count + (newCount ?? 1) })),
}));
