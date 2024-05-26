"use client";
export default function useMobile() {
  const isMobile = window.matchMedia("(max-width: 640px)").matches;

  return { isMobile };
}
