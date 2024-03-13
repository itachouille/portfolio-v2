import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import WorkCard from "@/components/WorkCard";
import WorkSlider from "@/components/WorkSlider";
import { Work } from "@/constants";
import { MoveLeft, MoveRight } from "lucide-react";
import { notFound } from "next/navigation";

const Page = () => {
 /*  const workData = Work; */

  const [product] = Work;

  if (!product) return notFound();
 
  const validUrls = product.image
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  return (
    <MaxWidthWrapper>
      <div className="">
        <WorkSlider urls={validUrls}/>
    {/*     {workData.map((card, index) => (
          <WorkCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))} */}
        {/* <div className="flex items-center  justify-evenly border-b border-border">
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
        </div> */}
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
