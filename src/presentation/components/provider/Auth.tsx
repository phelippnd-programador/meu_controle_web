'use client'
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react';
import "@/config/i18n";

interface LayoutProps {
    children: ReactNode;
}

const LayoutAuth: React.FC<LayoutProps> = ({ children }) => {


    return (

        <SessionProvider>{children}</SessionProvider>

    );
};

export default LayoutAuth;
