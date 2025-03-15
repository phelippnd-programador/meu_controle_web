'use client'
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react';
import "@/config/i18n";
import { FlagProvider } from '@/presentation/hooks/FlagProvider';

interface LayoutProps {
    children: ReactNode;
}

const LayoutAuth: React.FC<LayoutProps> = ({ children }) => {


    return (

        <SessionProvider><FlagProvider>{children}</FlagProvider></SessionProvider>

    );
};

export default LayoutAuth;
