'use client'
import Image from 'next/image';
import React, { useState } from 'react'
interface ImageUploadProp {
    id: string;
}
const ImageUpload:React.FC<ImageUploadProp> = ({id}) => {
    const [image, setImage] = useState<string | null>(null);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target && e.target.files) {
            const file = e.target.files[0];
            if (file instanceof File) {  // Verificação explícita do tipo
                const blob = new Blob([file], { type: file.type });  // Usando o Blob nativo do navegador
                const fileURL = URL.createObjectURL(blob);
                setImage(URL.createObjectURL(blob));  // Exemplo de uso correto do blob
            }
        }
    };
    return (<div className='flex justify-center items-center flex-col'>
        <input id={id} className='hidden hover:cursor-pointer' type="file" onChange={handleImageChange} />
        {image ? <label htmlFor={id} > <Image width={150} height={150} src={image} alt="Imagem carregada" /> </label > :
            <label htmlFor={id} ><Image className='rounded-md' width={150} height={150} src={'/upload_icon.svg'} alt="Imagem carregada" /></label>}
    </div>);
}

export default ImageUpload