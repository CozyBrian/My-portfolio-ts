import type { MetadataRoute } from "next";
import { baseUrl } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: [""],
      allow: ["/", "/NowPlayr"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
