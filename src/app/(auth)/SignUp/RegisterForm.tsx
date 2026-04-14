"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {  FaFacebook, FaGoogle,  } from "react-icons/fa";
import { registerUser } from "./registerAction";
import { useForm, Controller } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { IoMdPersonAdd } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupSchemaType } from "./registerSchema";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(signupSchema),
  });

  async function handleSignUp(values: SignupSchemaType) {
    const { ok, data } = await registerUser(values);

    if (ok) {
      toast.success("Registration successful! Please log in.", {
        position: "top-right",
      });
      router.push("/Login");
    } else {
      toast.error(data.message || "Registration failed. Please try again.", {
        position: "top-right",
      });
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg px-6 py-10">
      <h2 className="text-center text-3xl font-semibold mb-2">
        Create Your Account
      </h2>
      <p className="text-center mb-6">Start your fresh journey with us today</p>

      {/* Social buttons */}
      <div className="flex gap-2 my-10">
        <button
          type="button"
          className="flex-1 flex justify-center items-center gap-2 py-2 border rounded-2xl hover:bg-gray-100"
        >
          <FaGoogle className="text-red-600" /> Google
        </button>
        <button
          type="button"
          className="flex-1 flex justify-center items-center gap-2 py-2 border rounded-2xl hover:bg-gray-100"
        >
          <FaFacebook className="text-blue-600" /> Facebook
        </button>
      </div>

      <div
        className="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center
        before:content-['or'] before:absolute before:top-1/2 before:left-1/2 
        before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:px-4"
      />

      {/* FORM */}
      <form className="space-y-5" onSubmit={form.handleSubmit(handleSignUp)}>
        {/* Name */}
        <div>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your name"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Email */}
        <div>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Password */}
        <div>
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Input
                  {...field}
                  type="password"
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
                  autoComplete="off"
                />
                
                
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          
        </div>

        {/* Confirm Password */}
        <div>
          <Controller
            name="rePassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
                <Input
                  {...field}
                  type="password"
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Confirm your password"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Phone */}
        <div>
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your phone number"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2">
          <input
            id="terms"
            type="checkbox"
            name="terms"
            className="accent-green-600"
          />
          <Label htmlFor="terms">
            I agree to the{" "}
            <Link href="/terms" className="text-green-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="text-green-600 hover:underline"
            >
              Privacy Policy
            </Link>
          </Label>
        </div>

        <Button className="w-full bg-green-600 py-3 text-white rounded-3xl cursor-pointer hover:bg-green-700 flex items-center justify-center gap-2">
          <IoMdPersonAdd />
          Create Account
        </Button>
      </form>

      <p className="border-t pt-6 mt-6 text-center text-sm">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-green-600 hover:underline font-medium"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
