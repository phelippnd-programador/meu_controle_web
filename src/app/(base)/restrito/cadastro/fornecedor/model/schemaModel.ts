import { DiaSemana, TipoDocumento, TipoResidencia, TipoTelefone } from "@/presentation/types/enums";
import dayjs from "dayjs";
import { array, z } from "zod";
const isDayjsObject = (val: any): val is dayjs.Dayjs => dayjs.isDayjs(val);

// Esquema para outros tipos de conta (banco, agência e conta obrigatórios)
const contaComDadosBancariosSchema = z.object({
  tipo_conta: z.string().optional(), // Apenas "1" e "2" são aceitos
  banco: z.string().optional(),
  agencia: z.string().optional(),
  conta: z.string().optional(),
  chave: z.string().optional()
}).superRefine((data, ctx) => {
  if (data.tipo_conta === "3") {
    if (!data.chave) {
      ctx.addIssue({
        code: "custom",
        path: ["chave"],
        message: "Chave é obrigatória para este tipo de conta"
      });
    }

  } else {
    if (!data.banco) {
      ctx.addIssue({
        code: "custom",
        path: ["banco"],
        message: "Banco, agência e conta são obrigatórios para este tipo de conta"
      }
      )
    }
    if (!data.agencia) {
      ctx.addIssue({
        code: "custom",
        path: ["agencia"],
        message: "Agência é obrigatórios para este tipo de conta"
      }
      )
    }
    if (!data.conta) {
      ctx.addIssue({
        code: "custom",
        path: ["conta"],
        message: "Conta é obrigatórios para este tipo de conta"
      }
      )
    }
  }
});


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
  dados: z.object({
    nome_fantasia: z.string().nonempty({ message: "Nome é obrigatório" }).min(3, { message: "Nome deve conter no mínimo 3 caracteres" }),
    categoria: z.string().nonempty({ message: "Categoria é obrigatória" }),
    cnpj: z.string()
      .length(14, { message: "CNPJ deve conter 14 caracteres" })
      .regex(/^\d{14}$/, { message: "CNPJ deve conter apenas números" })
      .nonempty({ message: "CNPJ é obrigatório" }),
    descricao: z.string().optional(),
  }),
  "representante": z.array(z.object({
    "nome": z.string().nonempty({ message: "Nome é obrigatório" }).min(3, { message: "Nome deve conter no mínimo 3 caracteres" }),
    "data_nascimento": z.string(),
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
  })).optional(),
  "dados_financeiros": z.object({
    "forma_pagamento": z.string().nonempty({ message: "Forma de pagamento é obrigatória" }),
    "dados_bancarios": z.array(contaComDadosBancariosSchema).optional()
  }).optional(),
  "contato_empresa": z.object({
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
      "tipo": z.string().nonempty({ message: "Tipo do telefone é obrigatório" })
    })).optional(),
  })
    .strict()
    .superRefine((data, ctx) => {
      if (!data || Object.keys(data).length === 0) {
        ctx.addIssue({
          code: "custom",
          message: "Os dados de contato da empresa são obrigatórios",
          path: []
        });
        return;
      }
    })
});
export type TypeSchemaCadastro = typeof schemaCadastro;