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
  navigation: {
    tabs: [
      {
        label: "← mydori.app",
        path: "/",
        href: "https://mydori.app",
      },
    ],
  },
  theme: {
    accent: {
      // --brand-primary in globals.css (:root / .dark)
      light: "#1a1f4e",
      dark: "#91a0e8",
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
    // --radius-control: 13px in globals.css — closer to blume's rounder scale.
    radius: "lg",
  },
  deployment: {
    site: "https://help.mydori.app",
  },
});
