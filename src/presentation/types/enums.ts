import { ItemSelect } from "../components/input/model/ItemSelect";

export const enumToOptions = (enumObj: any):ItemSelect[] => {
    return Object.entries(enumObj).map(([key, value]) => ({
        value:key ,
        label: typeof value === 'string' ? value : String(value) ,
    }));
};
export enum DiaSemana{
    SEG="Segunda",
    TER="Terça",
    QUA="Quarta",
    QUI="Quinta",
    SEX="Sexta",
    SAB="Sabado",
    DOM="Domingo",
}
export enum TipoDocumento {
    CPF = "1",
    CNPJ = "2",
    RG = "3",

}
export enum TipoTelefone {
    RESIDENCIAL = "Residencial",
    COMERCIAL = "Comercial",
    CELULAR = "Celular",
    FIXO="Fixo",
    WHATSAPP="Whatsapp",
}
export enum TipoResidencia{
    CASA="Casa",
    APARTAMENTO="Apartamento",
    COMERCIAL="Comercial",
    OUTROS="Outros",
}