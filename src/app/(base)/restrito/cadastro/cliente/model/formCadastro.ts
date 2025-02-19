import { z } from "zod";

enum TipoTelefone {
    Residencial = "1",
    Comercial = "2",
    Celular = "3"
}
enum TipoDocumento {
    CPF = "1",
    CNPJ = "2",
    RG = "3",

}

export const schemaCadastro = z.object({
    endereco: z.object({
        "cep": z.string().length(8, { message: "CEP deve conter 8 caracteres" }).nonempty({ message: "CEP é obrigatório" }),
        "logradouro": z.string().nonempty({ message: "Logradouro é obrigatório" }).min(3, { message: "Logradouro deve conter no mínimo 3 caracteres" }),
        "numero": z.string().nonempty({ message: "Número é obrigatório" }).min(1, { message: "Número deve conter no mínimo 1 caracteres" }),
        "complemento": z.string().nonempty({ message: "Complemento é obrigatório" }).min(3, { message: "Complemento deve conter no mínimo 3 caracteres" }),
        "bairro": z.string().nonempty({ message: "Bairro é obrigatório" }).min(3, { message: "Bairro deve conter no mínimo 3 caracteres" }),
    }),
    "pessoais": z.object({
        "nome": z.string().nonempty({ message: "Nome é obrigatório" }).min(3, { message: "Nome deve conter no mínimo 3 caracteres" }),
        "apelido": z.string().nonempty({ message: "Apelido é obrigatório" }).min(3, { message: "Apelido deve conter no mínimo 3 caracteres" }),
        "data_nascimento": z.date().min(new Date(new Date().setFullYear(new Date().getFullYear() - 18))
            , { message: "Data de nascimento inválida" }).max(new Date(), { message: "Data de nascimento inválida" }),
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
            "tipo": z.nativeEnum(TipoTelefone, { message: "Tipo de telefone é obrigatório" }),
        })).min(1, { message: "Telefone é obrigatório" }),
    }),
    "documentos": z.object({
        "tipo": z.nativeEnum(TipoDocumento, { message: "Tipo de documento é obrigatório" }),
        "numero": z.string(),
        "orgao_expedidor": z.string().optional(),
        "data_validade":z.date().optional(),
        "data_expedicao": z.date().optional(),
    }),
});
export type TypeSchemaCadastro = typeof schemaCadastro;