import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from '@mui/material'
import React from 'react';
import { ItemSelect } from './model/ItemSelect';


type AppSelectProps = SelectProps & {
    id: string;
    label: string;
    name?: string;
    itens?: ItemSelect | ItemSelect[];
    helperText?:string;
}
const AppSelect: React.FC<AppSelectProps> = (props) => {
    return (
        <FormControl className='m-0 p-0' fullWidth error={props.error}>
            <InputLabel id={props.id}>{props.label}</InputLabel>
            <Select
                {... props}
                labelId={props.id}
                variant="standard"
                className=''
                inputProps={{
                    className: " px-2 h-full w-full",

                }}
            >
                {Array.isArray(props.itens) ? (                                              
                        props.itens.map((v,index) => 
                            <MenuItem key={index} value={v.value} >{v?.label}</MenuItem>
                        )
                ) : (
                    <MenuItem value={props.itens?.value} >{props.itens?.label}</MenuItem>
                )}
            </Select>
            {props.error && <FormHelperText className='mx-0' >{props.helperText}</FormHelperText>}
        </FormControl>
    )
}

export default AppSelect