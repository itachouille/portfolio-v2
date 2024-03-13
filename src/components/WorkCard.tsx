import { Navigation } from "lucide-react";
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
    <div>
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
     </div>
  ); 
};

export default WorkCard;
