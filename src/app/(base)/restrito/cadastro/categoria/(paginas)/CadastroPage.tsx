'use client'
import ImageUpload from '@/presentation/components/imagem/ImageUpload'
import AppSelectColor from '@/presentation/components/input/AppSelectColor'
import AppTextField from '@/presentation/components/input/AppTextField'
import AppTitle from '@/presentation/components/title/AppTitle'
import { Button, Dialog, DialogContent, Divider } from '@mui/material'
import React, { useState } from 'react'
import { ChromePicker, ColorResult } from 'react-color'
interface CadastroDialogProps {
  setOpen:(value:boolean)=>void
}
const CadastroPage :React.FC<CadastroDialogProps> = ({setOpen}) => {
 
  return (
    <div className='flex flex-col gap-5 '>
      <AppTitle title='Nova Categoria' />
      <div className="w-full justify-center items-center  flex container flex-1 flex-col">

        <div className="max-w-96 gap-5 flex flex-col justify-center items-center">
          <h2>Imagem</h2>
          <ImageUpload id='image_categoria' />

          <AppSelectColor/>
          <AppTextField />
        </div>
      </div>
      <footer className='flex justify-end gap-4'>
        <Button onClick={()=> setOpen(false)} color='warning' >Cancelar</Button>
        <Button onClick={()=> setOpen(false)} color='success'>Salvar</Button>
      </footer>

    </div>
  )
}

export default CadastroPage