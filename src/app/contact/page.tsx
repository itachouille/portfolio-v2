import ContactForm from "@/components/ContactForm"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"

const Page = () => {

  return (
      <MaxWidthWrapper className="text-center pt-8">
        <h1 className="text-3xl text-white-smoke font-bold">Contact me</h1>
        <ContactForm />
      </MaxWidthWrapper>
  )
}

export default Page