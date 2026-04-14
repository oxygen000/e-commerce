import * as z from "zod";

export const signupSchema = z
  .object({
    name: z.string("enter your name").min(2).nonempty(),
    email: z.email("enter your email"),
    password: z
      .string("enter your password")
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
    rePassword: z
      .string("confirm your password")
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
    phone: z.string("enter your phone number").min(10),
  })
  .refine(
    function (params) {
      return params.password === params.rePassword;
    },
    {
      error: "passwords don't match",
      path: ["rePassword"],
    },
  );


 export type SignupSchemaType = z.infer<typeof signupSchema>;