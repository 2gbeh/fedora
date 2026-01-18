export type ColorVariantType =
  | "default"
  | "success"
  | "danger"
  | "warning"
  | "info";

function text(variant?: ColorVariantType) {
  const v = variant || "default";
  return {
    default: "text-foreground-muted",
    info: "text-indigo-500",
    success: "text-emerald-500",
    warning: "text-amber-500",
    danger: "text-rose-500",
  }[v];
}

function badge(variant?: ColorVariantType) {
  const v = variant || "default";
  return {
    default: "bg-muted text-foreground-muted",
    info: "bg-indigo-500 text-white",
    success: "bg-emerald-500 text-white",
    warning: "bg-amber-500 text-foreground",
    danger: "bg-rose-500 text-white",
  }[v];
}

export const colorUtil = { text, badge };
