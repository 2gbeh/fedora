export type ColorVariantType =
  | "default"
  | "success"
  | "danger"
  | "warning"
  | "info";

function text(variant?: ColorVariantType) {
  const v = variant || "default";
  return {
    default: "!text-foreground-muted",
    info: "!text-indigo-600",
    success: "!text-emerald-600",
    warning: "!text-amber-600",
    danger: "!text-rose-600",
  }[v];
}

function badge(variant?: ColorVariantType) {
  const v = variant || "default";
  return {
    default: "!bg-muted text-foreground-muted",
    info: "!bg-indigo-600 text-white",
    success: "!bg-emerald-600 text-white",
    warning: "!bg-amber-600 text-foreground",
    danger: "!bg-rose-600 text-white",
  }[v];
}

export const colorUtil = { text, badge };
