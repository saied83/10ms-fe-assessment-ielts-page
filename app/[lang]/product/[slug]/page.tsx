export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; lang: "en" | "bn" }>;
}) {
  const { slug, lang } = await params;
  console.log(slug, lang);
  return <section>product page</section>;
}
