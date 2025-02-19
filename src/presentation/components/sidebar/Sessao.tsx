import { Divider } from '@mui/material';
import React, { ReactNode } from 'react'
interface SessaoProps {
    children: ReactNode | ReactNode[];
    title: string;
    visible: boolean;
}
const Sessao: React.FC<SessaoProps> = (props) => {
    return (
        <div className=''>

            <Divider className={`${!props.visible ? 'w-0' : 'w-full'} bg-white  brightness-75 transition-width duration-700`} />
            <div className={`${!props.visible ? 'opacity-0' : 'opacity-100'} px-2 font-bold brightness-75  shadow-white shadow-2xl transition-opacity transition-width duration-700`}> {props.title}</div>
            {props.children}
            <Divider className={`${!props.visible ? 'w-0' : 'w-full'} bg-white  brightness-75 transition-width duration-700`} />

        </div>
    )
}

export default Sessao