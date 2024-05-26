"use client";
export default function useMobile() {
  if (typeof window === undefined) {
    return { isMobile: false };
  }
  const isMobile =
    typeof window !== undefined &&
    window?.matchMedia("(max-width: 640px)").matches;

  return { isMobile };
}
