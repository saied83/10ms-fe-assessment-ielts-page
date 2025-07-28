import CheckList from "./_components/CheckList";
import CTA from "./_components/CTA";

import { fetchProduct } from "./_libs/api";
import SectionNavigation from "./_components/SectionNavigation";
import Instructor from "./_components/Instructor";
import Features from "./_components/Features";
import GroupJoinEngagement from "./_components/GroupJoinEngagement";
import WhatWillLearn from "./_components/WhatWillLearn";
import About from "./_components/About";
import ExclusiveFeature from "./_components/ExclusiveFeature";
import Testimonials from "./_components/Testimonials";

import type { Metadata } from "next";
import Hero from "./_components/Hero";
import ContentWrapper from "./_components/ContentWrapper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: "en" | "bn" }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;

  const data = (await fetchProduct(slug, locale)).data.seo;

  const openGraphImages = data.defaultMeta
    .filter(
      (m: { value: string; type: string }) =>
        m.value.startsWith("og:image") && m.type === "property"
    )
    .map((m: { content: string }) => ({ url: m.content }));

  const otherMetaTags = data.defaultMeta
    .filter(
      (m: { value: string; type: string }) =>
        !(m.value.startsWith("og:image") && m.type === "property")
    )
    .map((m: { type: string; value: string; content: string }) => ({
      ...(m.type === "name" ? { name: m.value } : { property: m.value }),
      content: m.content,
    }));

  // Convert to object keyed by name or property
  const otherMetaTagsObject = otherMetaTags.reduce<Record<string, string>>(
    (acc, meta) => {
      if ("name" in meta) {
        acc[meta.name] = meta.content;
      } else if ("property" in meta) {
        acc[meta.property] = meta.content;
      }
      return acc;
    },
    {}
  );

  const ALLOWED_OG_TYPES = [
    "website",
    "article",
    "book",
    "profile",
    "music.song",
    "music.album",
    "music.playlist",
    "music.radio_station",
    "video.movie",
    "video.episode",
    "video.tv_show",
    "video.other",
  ] as const;

  type OgType = (typeof ALLOWED_OG_TYPES)[number];

  const ogTypeCandidate = data.defaultMeta.find(
    (m: { value: string }) => m.value === "og:type"
  )?.content;

  const openGraphType: OgType = ALLOWED_OG_TYPES.includes(
    ogTypeCandidate as OgType
  )
    ? (ogTypeCandidate as OgType)
    : "website";

  return {
    metadataBase: new URL("https://acme.com"),
    title: data.title,
    description: data.description,
    keywords: data.keywords?.join(", "),
    openGraph: {
      title: data.title,
      description: data.description,
      images: openGraphImages.length > 0 ? openGraphImages : undefined,
      locale:
        data.defaultMeta.find((m: { value: string }) => m.value === "og:locale")
          ?.content ?? "en_US",
      type: openGraphType,
      url: data.defaultMeta.find((m: { value: string }) => m.value === "og:url")
        ?.content,
    },
    other: otherMetaTagsObject,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: "en" | "bn" }>;
}) {
  const { slug, locale } = await params;
  const data = (await fetchProduct(slug, locale)).data;

  return (
    <main className="w-full" id="instructor">
      <Hero data={data} />
      <CTA className="block md:hidden" />
      <CheckList checkLists={data.checklist} className="block md:hidden" />
      <ContentWrapper>
        <SectionNavigation />
        <div className="w-full h-2 rounded-sm bg-gray-200 md:hidden"></div>

        {data.sections.map((eachSection) => {
          switch (eachSection.type) {
            case "instructors": {
              return (
                <Instructor instructors={eachSection} key={"instructors"} />
              );
            }
            case "features": {
              return <Features features={eachSection} key={"features"} />;
            }
            case "group_join_engagement": {
              return (
                <div key={"group_join_engagement"}>
                  <GroupJoinEngagement engagement={eachSection} />
                </div>
              );
            }
            case "pointers": {
              return (
                <div key={"pointers"}>
                  <WhatWillLearn whatLearnData={eachSection} />
                </div>
              );
            }
            case "about": {
              return (
                <div key={"about"}>
                  <About aboutData={eachSection} />
                </div>
              );
            }
            case "feature_explanations": {
              return (
                <div key={"feature_explanations"}>
                  <ExclusiveFeature exclusiveData={eachSection} />
                </div>
              );
            }
            case "testimonials": {
              return (
                <div key={"testimonials"}>
                  <Testimonials testimonial={eachSection} />
                </div>
              );
            }
          }
        })}
      </ContentWrapper>
    </main>
  );
}
