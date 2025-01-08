import Image from "next/image";

import SearchBox from "../molocules/search-box";

const Hero = () => {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/images/hero_bg.webp"
        alt="Seats in a cinema"
        quality={100}
        width={1620}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover
         object-top"
      />
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 h-full px-4 bg-black/50">
        <div className="space-y-2 text-center">
          <h1 className="font-primary text-primary text-4xl font-bold tracking-tight lg:text-5xl">
            SceneIt: Your Guide to Movies and TV Shows
          </h1>
          <h3 className="font-secondary text-secondary text-2xl italic">
            From Binge-Worthy TV to Must-Watch Movies, All in One Place.
          </h3>
        </div>
        <SearchBox />
      </div>
    </section>
  );
};

export default Hero;
