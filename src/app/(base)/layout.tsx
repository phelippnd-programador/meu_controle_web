'use client'
import Sidebar from '@/presentation/components/sidebar/Sidebar';
import Topbar from '@/presentation/components/topbar/Topbar';
import React, { ReactNode, useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loading from '@/presentation/components/loading/Loading';
import { useTranslation } from 'react-i18next';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AppAlert from '@/presentation/components/alert/AppAlert';
import { AlertProvider } from '@/presentation/components/provider/AlertProvider';
import { FlagProvider, useFlags } from '@/presentation/hooks/FlagProvider';
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { data: session, status } = useSession();
  const { t, i18n } = useTranslation();
  const router = useRouter();

  if (status === 'loading') {
    return <Loading />
  }
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AlertProvider >
        <div className="flex min-h-screen h-full">
          <div>
            <Sidebar isOpen={isSidebarOpen} />
          </div>
          <div className="flex flex-col flex-1">

            <Topbar toggleSidebar={toggleSidebar} />
            <main className="p-4 bg-gray-100 h-full">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {children}
              </LocalizationProvider>
            </main>

          </div>
        </div>
    </AlertProvider>
  );
};

export default Layout;
