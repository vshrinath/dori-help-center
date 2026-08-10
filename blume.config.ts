import { defineConfig } from "blume";

// Brand values sourced from dori-portal/app/globals.css (`:root` / `.dark` brand
// palette) and dori-portal/public/icons/dori-mark.png — kept in sync by hand
// since the two repos don't share a design-token package yet.
export default defineConfig({
  title: "Dori Help Center",
  description: "How to install, set up, and use Dori — your AI executive assistant.",
  logo: {
    image: {
      light: "/brand/dori-mark.png",
      dark: "/brand/dori-mark.png",
      alt: "Dori",
    },
    text: "Dori Help Center",
  },
  theme: {
    accent: {
      // --brand-primary / --brand-primary-light in globals.css
      light: "#1a1f4e",
      dark: "#6f7fd0",
    },
    background: {
      // --brand-canvas in globals.css
      light: "#fafaf8",
      dark: "#0e0f13",
    },
    fonts: {
      display: "figtree",
      body: "figtree",
      mono: "jetbrains-mono",
    },
  },
  deployment: {
    site: "https://help.mydori.app",
  },
});
