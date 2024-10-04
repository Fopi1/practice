import ProfileInput from "./ProfileInput";
import ProfileEditLinks from "./ProfileLinks";

const ProfileEdit = () => {
  const profileInputs = [
    { title: "Your Name", placeholder: "Charlene Reed", type: "text" },
    { title: "User Name", placeholder: "Charlene Reed", type: "text" },
    {
      title: "Email",
      placeholder: "charlenereed@gmail.com",
      type: "email",
    },
    { title: "Password", placeholder: "*********", type: "password" },

    { title: "Date of Birth", placeholder: "25 January 1990", type: "text" },
    {
      title: "Present Address",
      placeholder: "San Jose, California, USA",
      type: "text",
    },
    {
      title: "Permanent Address",
      placeholder: "San Jose, California, USA",
      type: "text",
    },
    { title: "City", placeholder: "San Jose", type: "text" },

    { title: "Postal Code", placeholder: "45962", type: "text" },

    { title: "Country", placeholder: "USA", type: "text" },
  ];
  return (
    <div className="bg-[#f5f7fa] h-full px-10 pt-[37px]">
      <main className="rounded-[25px] size-full max-h-[717px] bg-[#FFFFFF] flex flex-col">
        <div className="px-[1.875rem]">
          <ProfileEditLinks />
          <section className="py-[52px]">
            <div className="flex gap-[53px] flex-col lg:flex-row">
              <div className="relative min-w-[130px] flex items-center justify-center">
                <img
                  src="/public/womanWithPencil.png"
                  className="size-[130px]"
                  alt="Woman"
                />
              </div>
              <div className="w-full grid md:grid-cols-2 grid-rows-5 gap-x-[30px] gap-y-[22px]">
                {profileInputs.map((input) => (
                  <ProfileInput
                    key={input.title}
                    title={input.title}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                ))}
              </div>
            </div>
            <a
              className="bg-[#1814F3] text-[#FFFFFF] rounded-[15px] h-[50px] flex items-center justify-center mt-[30px] w-full lg:float-right lg:w-[190px]"
              href="#"
            >
              Save
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProfileEdit;
