// import COLOR from "@/constants/COLOR";
// https://hexcolorpedia.com/color/?q=fd366e

const COLOR = {
  brand: "#db1a5a",
  brand_light: "#df316b",
  brand_dark: "#c51751",
  brand_tint: "#fbe8ef",
  brand_shade: "#160309",
  //
  accent: "#19db9a",
  accent_light: "#30dfa4",
  accent_dark: "#17c58b",
  accent_tint: "#e8fbf5",
  accent_shade: "#03160f",
  //
  background: "#131313",
  foreground: "#1c1c21",
  foreground_hover: "#2c2c30",  
  text: "#eee",
  text_muted: "#999",
  subtext: "#aaa",
  border: "#2c2c30",
  hero: "#18181b",
  icon: "#97979b",
  input: {
    background: "#18181b",
    text: "#bec3bb",
    border: "#424248",
    border_focus: "#57575c",
  },
  button: {
    primary: {
      background: "#db1a5a",
      background_hover: "#f02d65",
      text: "#f9f9f1",
    },
    secondary: {
      background: "#424248",
      background_hover: "#1c1c1e",
      text: "#c3c3c6",
    },
  },
  menu: {
    text: "#ededf0",
    icon: "#c3c3c6",
    hover: "#2c2c30",
  },
  avatar: {
    background: "#414146",
    text: "#adadb0",
    background_hover: "#68a3fe",
    text_hover: "#000",
    border_hover: "#424248",
  },
} as const;

export default COLOR;
