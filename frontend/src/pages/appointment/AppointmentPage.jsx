import { useState } from "react";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";

import { toast } from "sonner";

import InputField from "../../components/ui/InputField";

const appointmentSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name is required"),

  email: z
    .string()
    .email("Invalid email"),

  phone: z
    .string()
    .min(10, "Phone number is required"),

  department: z
    .string()
    .min(1, "Select department"),

  doctor: z
    .string()
    .min(1, "Select doctor"),

  date: z
    .string()
    .min(1, "Select date"),

  time: z
    .string()
    .min(1, "Select time"),

  message: z.string().optional(),
});

export default function AppointmentPage() {
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver:
      zodResolver(
        appointmentSchema
      ),
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      console.log(data);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      toast.success(
        "Appointment booked successfully"
      );

      reset();
    } catch (error) {
      toast.error(
        "Something went wrong"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-zinc-50 px-6 pb-24 pt-40 transition-colors duration-300 dark:bg-black">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-cyan-500">
            Appointment
          </span>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-black dark:text-white">
            Book Your Appointment
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Experience seamless healthcare booking with our
            premium digital appointment system.
          </p>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 rounded-[40px] border border-black/10 bg-white/70 p-10 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
        >
          <form
            onSubmit={handleSubmit(
              onSubmit
            )}
            className="grid gap-8 md:grid-cols-2"
          >
            <InputField
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              error={errors.fullName}
              {...register("fullName")}
            />

            <InputField
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              error={errors.email}
              {...register("email")}
            />

            <InputField
              label="Phone Number"
              type="tel"
              placeholder="Enter phone number"
              error={errors.phone}
              {...register("phone")}
            />

            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Department
              </label>

              <select
                {...register(
                  "department"
                )}
                className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-black outline-none dark:border-white/10 dark:bg-zinc-900 dark:text-white"
              >
                <option value="">
                  Select Department
                </option>

                <option value="cardiology">
                  Cardiology
                </option>

                <option value="neurology">
                  Neurology
                </option>

                <option value="dermatology">
                  Dermatology
                </option>
              </select>

              {errors.department && (
                <p className="mt-2 text-sm text-red-500">
                  {
                    errors.department
                      .message
                  }
                </p>
              )}
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Doctor
              </label>

              <select
                {...register("doctor")}
                className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-black outline-none dark:border-white/10 dark:bg-zinc-900 dark:text-white"
              >
                <option value="">
                  Select Doctor
                </option>

                <option value="dr-sarah">
                  Dr. Sarah Wilson
                </option>

                <option value="dr-michael">
                  Dr. Michael Brown
                </option>
              </select>

              {errors.doctor && (
                <p className="mt-2 text-sm text-red-500">
                  {
                    errors.doctor
                      .message
                  }
                </p>
              )}
            </div>

            <InputField
              label="Appointment Date"
              type="date"
              error={errors.date}
              {...register("date")}
            />

            <InputField
              label="Appointment Time"
              type="time"
              error={errors.time}
              {...register("time")}
            />

            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Additional Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                {...register("message")}
                className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-black outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
              />
            </div>

            <div className="md:col-span-2">
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                disabled={
                  isSubmitting
                }
                className="w-full rounded-2xl bg-black px-8 py-5 text-lg font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-black"
              >
                {isSubmitting
                  ? "Booking Appointment..."
                  : "Book Appointment"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}