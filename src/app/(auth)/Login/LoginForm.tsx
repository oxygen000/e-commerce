"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  FaGoogle,
  FaFacebook,
  FaLock,
  FaEye,
  FaUsers,
  FaStar,
  FaEyeSlash,
} from "react-icons/fa";
import { loginSchema, LoginSchemaType  } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(values: LoginSchemaType) {


console.log("Login response:", values);

    signIn("credentials", {
      ...values,
      redirect: true,
      callbackUrl: "/",
    })


    // const LoginOk = await loginUser(values);

    

    // if (LoginOk) {
    //   toast.success("Login successful!", {
    //     position: "top-right",
    //   });
    //   router.push("/");
    // } else {
    //   toast.error( "Login failed. Please try again.", {
    //     position: "top-right",
    //   });
    // }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <span className="text-3xl font-bold text-green-600">
            Fresh<span className="text-gray-800">Cart</span>
          </span>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h1>

        <p className="text-gray-600">
          Sign in to continue your fresh shopping experience
        </p>
      </div>

      {/* Social Buttons */}
      <div className="space-y-3 mb-6">
        <button
          type="button"
          className="w-full flex cursor-pointer items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
        >
          <FaGoogle className="text-red-500 text-lg" />
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        <button
          type="button"
          className="w-full cursor-pointer flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
        >
          <FaFacebook className="text-blue-600 text-lg" />
          <span className="font-medium text-gray-700">
            Continue with Facebook
          </span>
        </button>
      </div>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500 font-medium">
            OR CONTINUE WITH EMAIL
          </span>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={form.handleSubmit(handleLogin)}>
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
                <div className="relative">
                  <Input
                    {...field}
                    id={field.name}
                    type={showPassword ? "text" : "password"}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Remember */}
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-primary-600 accent-primary-600 border-2 border-gray-300 rounded"
            />
            <span className="ml-3 text-sm text-gray-700">
              Keep me signed in
            </span>
          </label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-[#16A34A]   py-7 px-4 rounded-xl hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Sign In
        </Button>
      </form>

      {/* Footer */}
      <div className="text-center mt-8 pt-6 border-t border-gray-100">
        <p className="text-gray-600">
          New to FreshCart?
          <Link
            href="/SignUp"
            className="text-[#16A34A] hover:text-green-700 ms-2 font-semibold cursor-pointer"
          >
            Create an account
          </Link>
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500">
        <div className="flex items-center">
          <FaLock className="mr-1" />
          SSL Secured
        </div>

        <div className="flex items-center">
          <FaUsers className="mr-1" />
          50K+ Users
        </div>

        <div className="flex items-center">
          <FaStar className="mr-1" />
          4.9 Rating
        </div>
      </div>
    </div>
  );
}
