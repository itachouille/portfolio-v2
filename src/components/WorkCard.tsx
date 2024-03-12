import { MoveLeft, MoveRight, Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WorkCardProps {
    title: string
    image: string
    description: string
    link: string
}

const WorkCard = ({title, image, description, link}: WorkCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-64" aria-hidden="true">
        <Image src={image} alt="project image" fill />
      </div>
      <div className="flex w-full items-center justify-around h-32 border-b border-border">
        <h1 className="max-w-44 text-3xl font-extrabold text-white-smoke">
          {title}
        </h1>
        <Link href={link}>
        <Navigation
            className="h-10 w-10 text-white-smoke"
            aria-hidden="true"
          />
        </Link>
      </div>
      <div>
        <p className="text-white-smoke p-6 border-b border-border">
          {description}
        </p>
      </div>
      <div className="flex items-center  justify-evenly border-b border-border">
        <div className="flex justify-center w-1/2 p-6 border-r border-border">
          <MoveLeft
            className="h-10 w-10 text-white-smoke "
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
  );
};

export default WorkCard;
