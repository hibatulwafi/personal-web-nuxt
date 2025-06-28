import { defineStore } from "pinia";

export const useViewModeStore = defineStore("viewMode", {
  state: () => ({
    mode: "dev" as "dev" | "view",
  }),
  actions: {
    toggleMode() {
      this.mode = this.mode === "dev" ? "view" : "dev";
    },
    setMode(mode: "dev" | "view") {
      this.mode = mode;
    },
  },
});
