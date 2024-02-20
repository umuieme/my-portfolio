import Image from "next/image";
import { Hero } from "./component/hero";
import { NavBar } from "./component/NavBar";
import { AboutMe } from "./component/AboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12">
      <NavBar></NavBar>
      <div className="container mt-24 mx-auto">
      <Hero></Hero>
      <AboutMe />
      </div>
    </main>
  );
}
