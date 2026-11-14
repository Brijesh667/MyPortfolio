import type { MetadataRoute } from "next";
import portfolio from "@/app/lib/config/portfolio";

const BASE_URL = portfolio.url;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
