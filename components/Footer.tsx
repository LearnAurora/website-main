import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socmed = [
    {
      id: 1,
      imgUrl: "/assets/icons/Socmed/Discord.svg",
      label: "Discord",
      link: "https://discord.gg/HVhQf4xW5Y",
    },
    {
      id: 2,
      imgUrl: "/assets/icons/Socmed/Email.svg",
      label: "Email",
      link: "learnaurora@gmail.com",
    },
    {
      id: 3,
      imgUrl: "/assets/icons/Socmed/Facebook.svg",
      label: "Facebook",
      link: "https://facebook.com/learnaurora",
    },
    {
      id: 4,
      imgUrl: "/assets/icons/Socmed/Instragram.svg",
      label: "Instagram",
      link: "https://instagram.com/learn_aurora",
    },
    {
      id: 5,
      imgUrl: "/assets/icons/Socmed/LinkedIn.svg",
      label: "LinkedIn",
      link: "https://www.linkedin.com/company/learn-aurora-club",
    },
    {
      id: 6,
      imgUrl: "/assets/icons/Socmed/Medium.svg",
      label: "Medium",
      link: "https://medium.com/@learnaurora",
    },
    {
      id: 7,
      imgUrl: "/assets/icons/Socmed/Telegram.svg",
      label: "Telegram",
      link: "https://t.me/+SlnSP7Qpe7YxYmFl",
    },
    {
      id: 8,
      imgUrl: "/assets/icons/Socmed/Twitter.svg",
      label: "Twitter",
      link: "https://twitter.com/LearnAurora",
    },
    {
      id: 9,
      imgUrl: "/assets/icons/Socmed/Youtube.svg",
      label: "Youtube",
      link: "https://youtube.com/@learnauroraofficial",
    },
  ];
  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-center max-w-6xl h-[auto] lg:h-screen max-h-full gap-x-16 text-white my-[3rem]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div>
        <div className="flex flex-col justify-center items-center uppercase mx-5 my-[3rem]">
          <Image
            src="/assets/icons/LEARNAURORALOGO.svg"
            height={200}
            width={200}
            alt="Learn Aurora"
          />
          <div className="flex flex-wrap justify-center items-center">
            {socmed.map(({ imgUrl, link }) => {
              return (
                <Link href={link}>
                  <Image
                    src={imgUrl}
                    height={40}
                    width={40}
                    alt="Learn Aurora"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-auto md:w-[40rem] mx-5 lg:mx-0">
        <h1 className="uppercase font-[montserrat] font-semibold text-5xl pb-5">
          Contact US
        </h1>
        <p className="pb-5 text-lg">
          You can get in touch with us quickly by filling in your details below
          and we will respond to you.
        </p>
        <div className="flex w-auto px-0 sm:px-[2rem] md:px-[0rem] md:w-[40rem] flex-col md:flex-row items-center md:justify-between">
          <div className="flex-col">
            <h1 className="font-[montserrat] font-semibold tracking-widest text-2xl">
              Name
            </h1>
            <input
              id="input-name"
              name="input-name"
              type="text"
              className="px-0 py-1 leading-2 text-left bg-[transparent]
													 text-white placeholder-gray-600 border-4 border-transparent rounded-md text-xl"
              placeholder="Rodolph"
            />

            <h1 className="font-[montserrat] font-semibold tracking-widest text-2xl mt-5">
              Email
            </h1>
            <input
              id="input-email"
              name="input-email"
              type="text"
              className="px-0 py-1 leading-2 text-left bg-[transparent]
													 text-white placeholder-gray-600 border-4 border-transparent rounded-md text-xl"
              placeholder="Ex. Email@gmail.com"
            />

            <h1 className="font-[montserrat] font-semibold tracking-widest text-2xl mt-5">
              Phone
            </h1>
            <input
              id="input-phone"
              name="input-phone"
              type="text"
              className="px-0 py-1 leading-2 text-left bg-[transparent] mb-5
													 text-white placeholder-gray-600 border-4 border-transparent rounded-md text-xl"
              placeholder="09*********"
            />
          </div>
          <div>
            <h1 className="font-[montserrat] font-semibold tracking-widest text-2xl mb-5">
              Message
            </h1>
            <textarea
              name="message"
              className="text-white w-[15rem] h-[16rem] p-5"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="rounded-full bg-gradient-to-b hover:bg-gradient-to-t hover:opacity-60
                    from-[#83ef55] to-[#baf54b] 
                      font-extrabold text-black py-4 px-8 text-xl mt-5"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
