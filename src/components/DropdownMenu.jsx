import NavLink from "./NavLink";

const DropdownMenu = () => {
  const navLinks = [
    { title: "Dashboard", iconPath: "/public/home.svg", active: false },
    { title: "Transactions", iconPath: "/public/transfer.svg", active: false },
    { title: "Accounts", iconPath: "/public/user.svg", active: false },
    { title: "Investments", iconPath: "/public/economic.svg", active: false },
    { title: "Credit Cards", iconPath: "/public/credit.svg", active: false },
    { title: "Loans", iconPath: "/public/loan.svg", active: false },
    { title: "Services", iconPath: "/public/service.svg", active: false },
    {
      title: "My Privileges",
      iconPath: "/public/econometric.svg",
      active: false,
    },
    { title: "Settings", iconPath: "/public/cog.svg", active: true },
  ];

  return (
    <aside className="h-screen min-w-[250px] border-r-[1px]">
      <div className="pl-[2.75rem] py-[2.063rem] w-full flex flex-col gap-[3.785rem]">
        <div className="w-full flex items-center gap-2 ">
          <img
            className="size-9"
            src="/public/credit-card.svg"
            alt="Credit card"
          />
          <h2 className="font-black text-2xl font-mont">BankDash.</h2>
        </div>
        <nav className="flex flex-col gap-10">
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.title}
              title={navLink.title}
              iconPath={navLink.iconPath}
              active={navLink.active}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default DropdownMenu;
