import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import WorkSlider from "@/components/WorkSlider";
import { Work } from "@/constants";
import { notFound } from "next/navigation";

const Page = () => {

  const [project] = Work;

  if (!project) return notFound();

  const validImage = Work.map(({ image }) => {
    if (typeof image === "string") {
      return image;
    }
  }).filter(Boolean) as string[];

  const validTitle = Work.map(({ title }) => {
    if (typeof title === "string") {
      return title;
    }
  }).filter(Boolean) as string[];

  const validDescription = Work.map(({ description}) => {
    if (typeof description === "string") {
      return description;
    }
  }).filter(Boolean) as string[];

  const valideLink = Work.map(({ link}) => {
    if (typeof link === "string") {
      return link;
    }
  }).filter(Boolean) as string[];

  return (
    <MaxWidthWrapper>
        <WorkSlider urls={validImage} title={validTitle} description={validDescription} link={valideLink} />
    </MaxWidthWrapper>
  );
};

export default Page;
