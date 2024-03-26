import MobileNav from "./MobileNav";
import { Linkedin, Github } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex w-full border-b bg-background text-white-smoke border-border">
      <MobileNav />
      <div className="hidden md:contents">
        <div className="flex basis-[calc(100%/3)] py-12 px-8 gap-4 border-l border-border items-center content-start">
          logo
        </div>
        <div className="flex basis-[40%] py-12 px-8 gap-24 border-l border-border justify-center items-center">
          <div className="">WORK</div>
        </div>
        <div className="flex py-12 px-8 gap-12 border-l border-border">
          <Linkedin color="#ffffff" />
          <Github color="#ffffff" />
        </div>
        <div className="flex py-12 border-l border-border justify-center items-center">
          GET IN TOUCH
        </div>
      </div>
    </header>
  );
};

export default Navbar;
