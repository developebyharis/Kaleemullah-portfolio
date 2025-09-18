import { clsx, type ClassValue } from "clsx";
import { Asset } from "contentful";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function normalizeImageUrl(url?: string): string {
  if (!url) return "";

  if (url.startsWith("//")) {
    return `https:${url}`;
  }

  return url;
}
export function getContentfulAssetUrl(asset?: Asset): string | null {
  const url = asset?.fields?.file?.url;
  return url ? normalizeImageUrl(url as string | undefined) : null;
}
