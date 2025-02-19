import { Button, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { ChromePicker, ColorResult } from 'react-color';

const AppSelectColor = () => {
    const [color, setColor] = useState<string>('#000000'); // Cor inicial
    const [open, setOpen] = useState<boolean>(false); // Controla a visibilidade do seletor
    const pickerRef = useRef<HTMLDivElement>(null); // Referência para o seletor de cor

    const handleChangeComplete = (color: ColorResult) => {
        setColor(color.hex); // Atualiza a cor selecionada
    };

    const togglePicker = () => {
        setOpen(!open); // Alterna entre abrir e fechar o seletor
    };

    const handleClickOutside = (event: MouseEvent) => {
        // Verifica se o clique foi fora do seletor de cor
        if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
            setOpen(false); // Fecha o seletor se o clique for fora
        }
    };

    // Adiciona o event listener quando o componente é montado
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Remove o listener ao desmontar
        };
    }, []);

    return (
        <div>
            {/* <TextField
                label="Escolher Cor"
                value={color}
                onClick={togglePicker}
                InputProps={{
                    readOnly: true,
                    style: { backgroundColor: color }, // Exibe a cor no campo
                }}
                fullWidth
            /> */}
            <div onClick={togglePicker}
                className='hover:cursor-pointer w-12 h-12 rounded-full overflow-hidden'
                style={{ backgroundColor: color }}
            >
                
            </div>

            {open && (
                <div
                    ref={pickerRef} // Referência para o seletor
                    className="absolute z-50 p-2 rounded-full bg-['#FFF']"
                >
                    <ChromePicker
                        color={color}
                        onChangeComplete={handleChangeComplete}
                    />
                </div>
            )}
        </div>
    );
}

export default AppSelectColor