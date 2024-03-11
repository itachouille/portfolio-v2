import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";

const Page = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col">
        <div className="relative w-full h-64" aria-hidden="true">
          <Image src="/travel_app.png" alt="project image" fill />
        </div>
        <div className="flex w-full items-center justify-around h-32 border-b border-border">
          <h1 className="relative max-w-44 text-3xl font-extrabold text-white-smoke">
            Travel Application
          </h1>
          <div className="text-3xl font-extrabold text-white-smoke">+</div>
        </div>
        <div>
          <p className="text-white-smoke p-6 border-b border-border">
            A vintage website for an old school barbershop. After going to this
            shop a few times, I decided that I had to make a (re)design for
            their website.
          </p>
        </div>
        <div className="flex items-center  justify-evenly border-b border-border">
          <div className="flex justify-center w-1/2 p-6 border-r border-border">
            <MoveLeft
              className=" h-10 w-10 text-white-smoke "
              aria-hidden="true"
            />
          </div>
          <div className="flex items-center justify-center w-1/2 p-6 ">
            <MoveRight
              className="h-10 w-10 text-white-smoke"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
