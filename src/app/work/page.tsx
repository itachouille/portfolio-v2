import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import WorkCard from "@/components/WorkCard";
import { Work } from "@/constants";

const Page = () => {
  const workData = Work;

  return (
    <MaxWidthWrapper>
      {workData.map((card, index) => (
        <WorkCard
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          link={card.link}
        />
      ))}
    </MaxWidthWrapper>
  );
};

export default Page;
