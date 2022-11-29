import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Guides from "../components/Guides";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Learn Aurora</title>
        <link rel="icon" href="/assets/icons/LEARNAURORA.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1, user-scalable=no"
        />
      </Head>

      <NavBar />
      <HeroSection />
      <Guides />
      <Courses />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
