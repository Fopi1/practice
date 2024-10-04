import { Search } from "lucide-react";

const SearchInput = ({ className }) => {
  return (
    <div
      className={`${className} flex items-center gap-4 w-[15.625rem] h-[3.125rem] pl-6 bg-[#F5F7FA] rounded-[2.5rem]`}
    >
      <div className="size-auto">
        <Search color="#718EBF" size={18} />
      </div>
      <input
        className="border-none focus:outline-none placeholder-[#8BA3CB] bg-[#F5F7FA] text-base w-full max-w-xs overflow-hidden text-ellipsis"
        type="search"
        placeholder="Search for something"
      />
    </div>
  );
};

export default SearchInput;
