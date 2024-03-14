import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import WorkCard from "@/components/WorkCard";
import WorkSlider from "@/components/WorkSlider";
import { Work } from "@/constants";
import { notFound } from "next/navigation";

const Page = () => {

  const [product] = Work;

  if (!product) return notFound();

  const validUrls = Work.map(({ image }) => {
    if (typeof image === "string") {
      return image;
    } else {
      return image.url;
    }
  }).filter(Boolean) as string[];

  return (
    <MaxWidthWrapper>
        <WorkSlider urls={validUrls} />
    </MaxWidthWrapper>
  );
};

export default Page;
