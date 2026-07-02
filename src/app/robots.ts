import { MetadataRoute } from "next";
import { personal } from "@/data/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://${personal.domain}/sitemap.xml`,
  };
}
