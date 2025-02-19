import { DiaSemana, TipoDocumento, TipoResidencia, TipoTelefone } from "@/presentation/types/enums";
import dayjs from "dayjs";
import { array, z } from "zod";

export const schemaCadastro = z.object({
  endereco: z.object({
    cep: z.string()
      .length(8, { message: "CEP deve conter 8 caracteres" })
      .regex(/^\d{8}$/, { message: "CEP deve conter apenas números" })
      .nonempty({ message: "CEP é obrigatório" }),

    logradouro: z.string()
      .nonempty({ message: "Logradouro é obrigatório" })
      .min(3, { message: "Logradouro deve conter no mínimo 3 caracteres" }),

    numero: z.string()
      .nonempty({ message: "Número é obrigatório" })
      .regex(/^[0-9A-Za-z]+$/, { message: "Número inválido" }),

    complemento: z.string()
      .optional(),

    bairro: z.string()
      .nonempty({ message: "Bairro é obrigatório" })
      .min(3, { message: "Bairro deve conter no mínimo 3 caracteres" }),

    cidade: z.string()
      .nonempty({ message: "Cidade é obrigatória" })
      .min(3, { message: "Cidade deve conter no mínimo 3 caracteres" }),

    estado: z.string()
      .length(2, { message: "Estado deve conter 2 caracteres" })
      .regex(/^[A-Z]{2}$/, { message: "Estado deve conter apenas letras maiúsculas" }),

    ponto_referencia: z.string()
      .optional(),

    tipo_residencia: z.string().refine((value) => Object.keys(TipoResidencia).includes(value), {
      message: 'Tipo da residência inválida'
    }),
  }),
  "pessoais": z.object({
    "nome": z.string().nonempty({ message: "Nome é obrigatório" }).min(3, { message: "Nome deve conter no mínimo 3 caracteres" }),
    "data_nascimento": z.string()
    .refine((val) => dayjs(val).isValid(), {
      message: "Data de nascimento inválida"
    })
    // .refine((val) => {
    //   const minDate = new Date();
    //   minDate.setFullYear(minDate.getFullYear() - 18);
    //   return val <= new Date() && val >= minDate;
    // }, {
    //   message: "Você deve ter pelo menos 18 anos"
    // })
  }),
  "contato": z.object({
    "email": z.string()
      .email({ message: "E-mail inválido" })
      .nonempty({ message: "E-mail é obrigatório" }),
    "telefone": z.array(z.object({
      "ddd": z.string()
        .nonempty({ message: "DDD é obrigatório" })
        .min(2, { message: "DDD deve conter no mínimo 2 caracteres" })
        .max(2, { message: "DDD deve conter no máximo 2 caracteres" }),
      "numero": z.string()
        .nonempty({ message: "Telefone é obrigatório" })
        .min(8, { message: "Telefone deve conter no mínimo 8 caracteres" })
        .max(9, { message: "Telefone deve conter no máximo 9 caracteres" }),
      "tipo":  z.string().refine((value)=>Object.keys(TipoTelefone).includes(value),{
        message:"Tipo de Telefone Incorreto"
      })  // z.nativeEnum(TipoTelefone, { message: "Tipo de telefone é obrigatório" }),
    })).min(1, { message: "Telefone é obrigatório" }),
  }),
  "especialidades": z.array(z.object({
    "id": z.number({message:"Selecione um item"}),
  })),
  "horarios": z.array(z.object({
    "diasSemana": z.string()
      .refine((value) => Object.keys(DiaSemana).includes(value), {
        message: 'Chave inválida para o dia da semana'
      }),
    de: z.string().refine((val) => {
      return dayjs(val, 'HH:mm', true).isValid(); // Verifica se está no formato HH:mm
    }, { message: "Horário inválido" }),
    "ate": z.string().refine((val) => {
      return dayjs(val, 'HH:mm', true).isValid(); // Verifica se está no formato HH:mm
    }, { message: "Horário inválido" }),
  }))
});
export type TypeSchemaCadastro = typeof schemaCadastro;