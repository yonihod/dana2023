"use client";
export default function useMobile() {
  const isMobile =
    typeof window !== undefined &&
    window?.matchMedia("(max-width: 640px)").matches;

  return { isMobile };
}
