import { BellDot, Menu, Settings } from "lucide-react";
import SearchInput from "./SearchInput";
import IconWrapper from "./IconWrapper";

const Header = () => {
  return (
    <header className="w-full h-[140px] px-10 py-5 flex flex-col justify-between gap-x-[35px] gap-y-[20px] border-b-[1px] lg:h-[100px] lg:gap-y-0">
      <div className="flex items-center justify-between w-full gap-[35px]">
        <Menu className="lg:hidden" size={30} />
        <h1 className="text-2xl lg:text-[28px] font-semibold">Setting</h1>
        <div className="w-full hidden lg:flex gap-[30px] justify-end">
          <SearchInput />
          <IconWrapper>
            <Settings color="#718EBF" size={25} />
          </IconWrapper>
          <IconWrapper>
            <BellDot color="#FE5C73" size={25} />
          </IconWrapper>
          <img src="/public/woman.png" alt="woman" className="size-[60px]" />
        </div>
        <img
          src="/public/woman.png"
          alt="woman"
          className="size-[35px] md:size-[40px]  lg:hidden"
        />
      </div>
      <SearchInput className="lg:hidden w-full py-1" />
    </header>
  );
};

export default Header;
