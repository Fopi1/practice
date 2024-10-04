import ProfileLink from "./ProfileLink";

const ProfileLinks = () => {
  const profileLinks = [
    { title: "Edit Profile", active: true },
    { title: "Preferences", active: false },
    { title: "Security", active: false },
  ];
  return (
    <div className="mx-auto pt-[29px] text-base border-b-[1px] relative">
      <div className="flex px-4 pb-[0.75rem] font-medium text-base gap-[20px] md:gap-[72px]">
        {profileLinks.map((link) => (
          <ProfileLink
            key={link.title}
            title={link.title}
            active={link.active}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileLinks;
