import { z } from "zod";

export const loginSchema = z.object({
  cpf: z
    .string()
    .min(1, { message: "CPF é obrigatório *" })
    .transform((cpf) => cpf.replace(/[^\d]/g, ""))
    .refine((cpf) => /^\d{11}$/.test(cpf), {
      message: "CPF deve ter 11 dígitos *",
    }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres *" }),
});
