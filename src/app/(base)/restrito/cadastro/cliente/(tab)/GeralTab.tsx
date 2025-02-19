import AppSelect from '@/presentation/components/input/AppSelect'
import DeleteIcon from '@mui/icons-material/Delete';
import AppTextField from '@/presentation/components/input/AppTextField'
import AppTextFieldController from '@/presentation/components/input/AppTextFieldController'
import { Add, Apps, PlusOne, PlusOneSharp } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form';
import AppAdicionaTelefone from '@/presentation/components/botao_adicionar/AppAdicionaTelefone';

const GeralTab = () => {
    const { control } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "contato.telefone" // Nome do array no formulário
    });
    return (
        <div className='flex flex-col w-full gap-5'>
            <AppSelect id='tipo_pessoa' label='Tipo de pessoa' />
            <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppTextFieldController label={"Nome"} name={'pessoais.nome'} />
                <AppTextFieldController label={"Apelido"} name={'pessoais.apelido'} />

            </div>
            <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppTextField label={"CPF"} />
                <AppTextField label={"RG"} />

            </div>
            <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppTextFieldController label={"E-mail"} name={'contato.email'} />
                <AppTextFieldController label={"Data Nascimento"} name={'pessoais.data_nascimento'} />

            </div>
            <div className='p-0'>
                <div className='flex w-full'>
                    <Button onClick={()=>append({})} className='' fullWidth variant='contained' color='primary' startIcon={<Add />}>Adicionar Telefone</Button>
                </div>
                <AppAdicionaTelefone/>          

            </div>
            {/* <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppSelect label={"Apelido"}/>
                <AppSelect label={"Celular"}/>
            </div> */}
        </div>
    )
}

export default GeralTab