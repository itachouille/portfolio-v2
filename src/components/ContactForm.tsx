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
      <h1 className="text-center text-3xl text-white-smoke font-bold pt-6">
        Get in touch
      </h1>
      <form
        className="flex flex-1 flex-col gap-10 p-10"
        onSubmit={handleSubmit(processForm)}
      >
        <label className="relative block w-full">
          <input
            type="text"
            className="peer w-full rounded border border-neutral-500 p-2 text-sm focus:border-indigo-500"
            {...register("name")}
          />
          <span
            className="absolute left-2 top-0 -translate-y-1/2 rounded scale-100 bg-white px-2 text-xs font-bold transition-transform
            peer-focus:scale-0"
          >
            Name
          </span>
          {errors.name?.message && (
            <p className="ml-1 mt-1 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </label>
        <label className="relative block w-full">
          <input
            type="email"
            className="peer w-full rounded border border-neutral-500 p-2 text-sm focus:border-indigo-500"
            {...register("email")}
          />
          <span
            className="absolute left-2 top-0 rounded -translate-y-1/2 scale-100 bg-white px-2 text-xs font-bold transition-transform
            peer-focus:scale-0"
          >
            Email
          </span>
          {errors.email?.message && (
            <p className="ml-1 mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </label>
        <label className="relative block w-full">
          <textarea
            rows={5}
            cols={5}
            className="peer w-full rounded border border-neutral-500 p-2 text-sm focus:border-indigo-500 resize-none"
            {...register("message")}
          />
          <span
            className="absolute left-2 top-0 -translate-y-1/2 rounded scale-100 bg-white px-2 text-xs font-bold transition-transform
            peer-focus:scale-0"
          >
            Message
          </span>
          {errors.message?.message && (
            <p className="ml-1 mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </label>
        <button
          className="rounded-lg border text-white-smoke border-white-smoke py-2 font-bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
