import * as z from "zod";

export const loginSchema = z
  .object({
    email: z.email("enter your email"),
    password: z
      .string("enter your password")
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
  })


   export type LoginSchemaType = z.infer<typeof loginSchema>;