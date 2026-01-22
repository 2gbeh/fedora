export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const sleep = (secs = 3): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, secs * 1000));
