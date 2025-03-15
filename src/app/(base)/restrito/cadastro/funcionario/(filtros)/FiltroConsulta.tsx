import Filtro from '@/presentation/components/filtro/Filtro'
import AppSelect from '@/presentation/components/input/AppSelect'
import AppTextField from '@/presentation/components/input/AppTextField'
import AppTextFieldController from '@/presentation/components/input/AppTextFieldController'
import { usePost } from '@/presentation/hooks/ConsultaFiltro'
import { TypeTabelaFuncionario } from '@/presentation/types'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { set } from 'zod'
interface FiltroProps {
    onOpenNovo: () => void;
    setDataFiltro: (data: TypeTabelaFuncionario[] | undefined) => void;
};

const FiltroConsulta: React.FC<FiltroProps> = (props) => {
    const [filtro, setFiltro] = useState<any | null>(null);
    const { data, isLoading, error, buscar } = usePost<TypeTabelaFuncionario[]>(filtro ? `http://localhost:3001/funcionario` : null,filtro);
    const buscarDados = useCallback((dataForm: any) => {
        buscar(dataForm).then((dataRe) => {
            setFiltro(dataForm);
            props.setDataFiltro(data);
        }).catch(error => {console.log("Error", error)});
    }, []);

    const methods = useForm({
        // resolver: zodResolver(schema),
    });
    if (isLoading) {
        return <div>Carregando...</div>
    }

    return (
        <FormProvider {...methods}>
            <Filtro onFilter={(dataForm) => {
                buscarDados(dataForm)
            }}
                nomeFlag={"openCadastroFuncionario"}
                inputs={[{
                    name: "nome", render: ({ field }) => (
                        <AppTextFieldController label={'Nome'} {...field} />
                    )
                }
                    , {
                    name: "appTextField", render: ({ field }) => (
                        <AppTextFieldController label={"Ini"} {...field} />
                    )
                }]} title={'Pesquisa'} />

        </FormProvider>
    )
}

export default FiltroConsulta


