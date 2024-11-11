import { z } from "zod";

export const cadastroSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  idade: z.number().min(18, "Deve ser maior de idade"),
  senha: z.string().min(6, "Deve ter no mínimo 6 caracteres"),
});

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Deve ter no mínimo 6 caracteres"),
});

export type CadastroForm = z.infer<typeof cadastroSchema>;
export type LoginForm = z.infer<typeof loginSchema>;
