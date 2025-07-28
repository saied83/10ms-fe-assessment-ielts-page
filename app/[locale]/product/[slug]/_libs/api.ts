import { notFound } from "next/navigation";
import { FetchProductResponse } from "./types";

export const fetchProduct = async (
  slug: string,
  lang = "en"
): Promise<FetchProductResponse> => {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/${slug}?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) notFound();

  return res.json();
};
