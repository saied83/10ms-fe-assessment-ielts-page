import { getTranslations } from "next-intl/server";
import React from "react";

const Title: React.FC<{ title: string }> = async ({ title }) => {
  const t = await getTranslations();
  return (
    <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
      {t(title)}
      {t("IELTS Course by Munzereen Shahid")}
    </h1>
  );
};

export default Title;
