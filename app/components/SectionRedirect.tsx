"use client";

import { useEffect } from "react";

import { assetPath } from "@/app/lib/utils/assetPath";

export default function SectionRedirect({ section }: { section: string }) {
  useEffect(() => {
    window.location.replace(`${assetPath("/")}#${section}`);
  }, [section]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 text-sm text-white/60">
      Redirecting to {section}…
    </section>
  );
}
