import { ArrowDownIcon } from "@/app/assets/icons";

const links = [
  "Class 6-12",
  "Skills",
  "Admission",
  "Online Batch",
  "English Centre",
  "More",
];

const NavLinks = () => {
  return (
    <nav className="hidden mr-4 xl:block">
      <ul className="flex items-center gap-2 lg:gap-4">
        {links.map((label, index) => (
          <li key={index} className="relative">
            <button
              type="button"
              className="flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium text-[#4B5563] hover:text-green"
            >
              <p className="relative mb-0">
                {label}
                {(label === "English Centre" || label === "More") && (
                  <span className="absolute top-0 -right-1 h-1.5 w-1.5 bg-[#E63C3C] rounded-full" />
                )}
              </p>
              {label !== "Admission" && <ArrowDownIcon />}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
