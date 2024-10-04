const ProfileLink = ({ title, active }) => {
  return (
    <div>
      <p
        className={`text-[13px] md:text-base ${
          active ? "text-[#1814F3]" : "text-[#718EBF]"
        }`}
      >
        {title}
      </p>
      {active && (
        <div className="absolute bottom-0 translate-x-[-15%] rounded-t-[10px] w-[114px] h-[3px] bg-[#1814F3]"></div>
      )}
    </div>
  );
};

export default ProfileLink;
