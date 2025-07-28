import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <Link
        href={"/en/product/ielts-course"}
        className="px-8 py-2.5 rounded-xl bg-stone-50 shadow-sm shadow-gray-300"
      >
        Ielts Course
      </Link>
    </section>
  );
}
