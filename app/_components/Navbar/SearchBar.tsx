const SearchBar = () => {
  return (
    <div className="relative hidden w-full flex-1 xl:max-w-[360px] flex-col items-center bg-white z-50 md:flex">
      <div className="shadow-0 rounded-b-[23px] flex w-full items-center gap-2 rounded-t-[23px] border-0 px-[12px] py-2 md:border md:border-slate-300">
        <input
          type="search"
          placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
          className="w-full flex-1 placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#7C818A] focus:outline-none"
          name="Search"
          defaultValue=""
        />
      </div>
    </div>
  );
};

export default SearchBar;
