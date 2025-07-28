import { PhoneIcon } from "@/app/_assets/icons";
import CheckList from "./_components/CheckList";
import CTA from "./_components/CTA";
import Description from "./_components/Description";
import Title from "./_components/Title";
import Trailer from "./_components/Trailer";
import { fetchProduct } from "./_libs/api";
import SectionNavigation from "./_components/SectionNavigation";
import Instructor from "./_components/Instructor";
import Features from "./_components/Features";
import GroupJoinEngagement from "./_components/GroupJoinEngagement";
import WhatWillLearn from "./_components/WhatWillLearn";
import About from "./_components/About";
import ExclusiveFeature from "./_components/ExclusiveFeature";
import Testimonials from "./_components/Testimonials";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; lang: "en" | "bn" }>;
}) {
  const { slug, lang } = await params;
  const data = (await fetchProduct(slug, lang)).data;

  return (
    <main className="w-full" id="instructor">
      <section
        className="w-full  flex justify-center h-max"
        style={{
          backgroundImage: `url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <section className="xl:max-w-[1200px] w-full relative flex flex-col gap-4 p-4 md:flex-row  md:py-10 md:pl-6 md:pr-0 md:gap-12 lg:py-28 lg:pt-20">
          <Trailer media={data.media} className="md:hidden" />
          <section className="w-full    flex-1 md:self-center">
            <Title title={data.title} />
            <Description preHTML={data.description} />
          </section>

          <section className="w-full md:w-[330px] lg:w-[400px] relative hidden md:block ">
            <section className="absolute top-0 bg-white left-0 right-0 border border-slate-200">
              <div className="   p-1 lg:p-2  ">
                <Trailer media={data.media} className="" />
              </div>

              <CTA className="hidden md:block" />
              <CheckList
                checkLists={data.checklist}
                className="hidden md:block"
              />
              <p className="justify-between absolute -bottom-10 left-0 right-0 hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
                <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
                <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green-600">
                  <PhoneIcon className="fill-green-600" />
                  <span className="ml-1">ফোন করুন (16910)</span>
                </span>
              </p>
            </section>
          </section>
        </section>
      </section>
      <CTA className="block md:hidden" />
      <CheckList checkLists={data.checklist} className="block md:hidden" />
      <section className="w-full  flex justify-center  relative">
        <section className="max-w-[1200px] w-full">
          <section className="w-full md:max-w-[calc(100%-378px)] lg:max-w-[calc(100%-448px)] px-4">
            <SectionNavigation />
            <div className="w-full h-2 rounded-sm bg-gray-200 md:hidden"></div>
            <div className="w-full ">
              {data.sections.map((eachSection) => {
                switch (eachSection.type) {
                  case "instructors": {
                    return (
                      <Instructor
                        instructors={eachSection}
                        key={"instructors"}
                      />
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
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
