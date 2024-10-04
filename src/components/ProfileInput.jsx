const ProfileInput = ({ title, placeholder, type }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="font-normal text-[13px] md:text-base">{title}</h2>
      <input
        className="w-full focus:outline-none border-2 rounded-[15px] py-[11px] pl-5 placeholder:text-[12px] placeholder:md:text-[15px]"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ProfileInput;
