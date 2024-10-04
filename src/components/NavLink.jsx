const NavLink = ({ title, iconPath, active }) => {
  return (
    <div className="flex items-center gap-[1.625rem]">
      {active && (
        <div className="absolute left-0 rounded-r-[10px] w-[0.375rem] h-[3.75rem] bg-[#1814F3]"></div>
      )}
      <img src={iconPath} alt="home" />
      <p
        className={
          active
            ? "text-[#1814F3] font-medium text-lg"
            : "font-medium text-lg text-[#B1B1B1]"
        }
      >
        {title}
      </p>
    </div>
  );
};

export default NavLink;
