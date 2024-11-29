import { DateTime } from "luxon";
import { z } from "zod";

const messageRequired = "campo obrigatório";

export const cadastroSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  nascimento: z
    .string()
    .refine(
      (date) => {
        if (date) {
          const dt = DateTime.fromFormat(date, "yyyy-MM-dd");
          return DateTime.now().diff(dt, "years").years > 18;
        }
        return true;
      },
      {
        message: "deve ser maior que 18 anos",
      }
    )
    .or(z.literal("")),
  senha: z.string().min(6, "Deve ter no mínimo 6 caracteres"),
});

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  senha: z.string().min(1, messageRequired),
});

export const medicamentoSchema = z.object({
  nome: z.string().min(1, messageRequired),
  descricao: z.string(),
  dosagem: z.coerce.number().min(1, messageRequired),
  duracao: z.coerce.number().min(1, messageRequired),
  frequencia: z.coerce.number().gt(0, messageRequired).default(0),
  horario: z.string({ message: messageRequired }),
});
// .superRefine((data, ctx) => {
//   if (!verificaFrequenciaValida(data.horario, data.frequencia)) {
//     return ctx.addIssue({
//       code: z.ZodIssueCode.custom,
//       path: ["frequencia"],
//       message: "Frequência inválida",
//     });
//   }
// });

export type CadastroForm = z.infer<typeof cadastroSchema>;
export type LoginForm = z.infer<typeof loginSchema>;
export type MedicamentoForm = z.infer<typeof medicamentoSchema>;
export type EditarMedicamentoForm = z.infer<typeof medicamentoSchema>;
