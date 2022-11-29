import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center text-white ">
      <div className="max-w-6xl h-[120vh] lg:h-screen max-h-full w-full flex flex-col lg:flex-row justify-center items-center gap-x-16 uppercase my-5 mx-5 sm:my-0 ">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-2xl lg:text-6xl font-[montserrat] font-extrabold">
            LEARN HOW TO USE AND BUILD ON <span id="textgradient">AURORA</span>
          </h1>
          <Image
            src="/assets/images/linedesign.png"
            alt=""
            height={200}
            width={200}
            className="py-5 pointer-events-none"
          />
          <p className="text-xl">
            Utilize Aurora’s vast and continuously growing sets of tools for
            development and building and learn from the experts in the industry!
          </p>
        </div>

        <div data-aos="fade-down" data-aos-duration="1000">
          <Image
            src="/assets/icons/codeicon.svg"
            alt=""
            height={1000}
            width={1000}
            className="pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
