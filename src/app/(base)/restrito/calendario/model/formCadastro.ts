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
    cliente: z.string(),
    servico: z.object({
        tipo_servico: z.string().nonempty({ message: "Tipo de serviço é obrigatório" }),
        data: z.string().optional(),
        hora: z.string().nonempty({ message: "Hora é obrigatório" }),
        profissional: z.string().nonempty({ message: "Profissional é obrigatório" }),
    })
})
.transform((dados) => ({
    ...dados,
    title: `${dados.cliente} - ${dados.servico.tipo_servico} - ${dados.servico.profissional} `,
  }));
;
export type TypeSchemaCadastro = typeof schemaCadastro;