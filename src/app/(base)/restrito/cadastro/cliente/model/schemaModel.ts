import { DiaSemana, TipoDocumento, TipoResidencia, TipoTelefone } from "@/presentation/types/enums";
import dayjs from "dayjs";
import { array, z } from "zod";
const isDayjsObject = (val: any): val is dayjs.Dayjs => dayjs.isDayjs(val);


export const schemaCadastro = z.object({
  id: z.string().optional(),
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
    ,
    estado: z.string()
      .nonempty({ message: "Estado é obrigatória" }),

    ponto_referencia: z.string()
      .optional(),

    tipo_residencia: z.string().nonempty({ message: "Tipo de residencia é obrigatória" }),
  }),
  "pessoais": z.object({
    nome: z.string().nonempty({ message: "Nome é obrigatório" }).min(3, { message: "Nome deve conter no mínimo 3 caracteres" }),
    cpf: z.string()
      .length(11, { message: "CPF deve conter 11 caracteres" })
      .regex(/^\d{11}$/, { message: "CPF deve conter apenas números" })
      .nonempty({ message: "CPF é obrigatório" }),
    "data_nascimento": z.string()
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
      "tipo": z.string().nonempty({ message: "Tipo do telefone é obrigatório" }) // z.nativeEnum(TipoTelefone, { message: "Tipo de telefone é obrigatório" }),
    })).min(1, { message: "Telefone é obrigatório" }),
  }),

});
export type TypeSchemaCadastro = typeof schemaCadastro;