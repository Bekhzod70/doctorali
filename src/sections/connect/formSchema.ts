import * as z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Iltimos, ismingizni kamida 2 belgidan iborat qiling" })
    .max(25, {
      message: "Iltimos, ismingizni maksimum 25 belgidan iborat qiling",
    }),
  phone: z
    .string()
    .trim()
    .min(9, {
      message: "Iltimos, telefon raqamingizni kamida 9 belgidan iborat qiling",
    })
    .max(20, {
      message: "Telefon raqamingiz juda uzun, 20 belgidan oshmasligi kerak",
    }),
});

export type FormSchema = z.infer<typeof formSchema>;
