"use client";

import { sendEmail } from "@/lib/action";
import { ContactFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      toast.success("Email sent");
      reset();
      return;
    }

    toast.error("Something went wrong");
  };

  return (
    <>
     <h1 className="text-center text-3xl text-white-smoke font-bold pt-6">Get in touch</h1>
    <form
      className="flex flex-1 flex-col gap-4 text-white-smoke p-6"
      onSubmit={handleSubmit(processForm)}
    >
      <div>
        <input
          placeholder="name"
          className="w-full rounded-lg"
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <input
          placeholder="email"
          className="w-full rounded-lg"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <textarea
          rows={5}
          cols={5}
          placeholder="message"
          className="w-full rounded-lg"
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>
      <button
        className="rounded-lg border border-white-smoke py-2 font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
    </>
  );
};

export default ContactForm;
