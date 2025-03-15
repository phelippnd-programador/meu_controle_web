import { Home } from "@mui/icons-material";
import { Icon, ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import Link from "next/link";
import React from 'react';
import * as Icons from '@mui/icons-material';
import { useFlags } from "@/presentation/hooks/FlagProvider";
interface ItemMenuProps {
    href: string;
    title: string;
    tooltip?:string;
    icon: keyof typeof Icons;
}
const ItemMenu: React.FC<ItemMenuProps> = ({ href, title, icon,tooltip }) => {
    const {clearAllFlags}=useFlags();
    const IconComponent = Icons[icon];
    return (
        <>
        <Tooltip onClick={()=>clearAllFlags()} placement="top" title={tooltip} arrow>
            <ListItem className='hover:bg-black ' component={Link} href={href}>
                <ListItemIcon className='text-yellow-50' >
                    <IconComponent />
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItem>
        </Tooltip>
        </>
    )
}

export default ItemMenu
