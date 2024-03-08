import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-10 px-5 mx-auto text-left flex flex-col">
        <h1 className="text-3xl text-white-smoke font-bold">Anthony DAVID</h1>
        <p className="text-2xl text-white-smoke">Frontend Developer</p>
      </div>
      <div className="px-5">
        <p className="text-white-smoke font-medium">
          I’m a French Frontend Developer based in Riec-sur-Bélon, France.
          Creating digital experiences with love.
        </p>
      </div>
      <div className="relative my-10 m-auto h-96 w-60" aria-hidden="true">
        <Image src="/hero.png" alt="hero image" fill />
      </div>
    </MaxWidthWrapper>
  );
}
