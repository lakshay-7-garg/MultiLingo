import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("MultiLingo-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("MultiLingo-theme", theme);
    set({ theme });
  },
}));