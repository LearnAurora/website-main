const Projects = () => {
  return (
    <div className="flex justify-center items-center text-white">
      <div
        className="max-w-6xl h-screen max-h-full w-full flex flex-col justify-center items-center gap-x-16 uppercase mx-5"
        id="section-projects"
      >
        <div data-aos="fade-right" data-aos-duration="1000">
          <h1 className="mb-14 text-7xl font-semibold" id="textgradient">
            Projects
          </h1>
        </div>

        <div
          id="comingsoon"
          className="p-[5rem] py-[8rem]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1 className="text-5xl font-semibold text-center">Coming Soon!</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
