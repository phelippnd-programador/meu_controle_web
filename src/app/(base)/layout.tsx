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
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { data: session, status } = useSession();
  const { t, i18n } = useTranslation();
  const router = useRouter();
  console.log("STATUS", status);
  if (status === 'loading') {
    return <Loading />
  }

  // if (status === 'unauthenticated') { router.push('/auth/login'); 
  //   return <Loading />;
  // }



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
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
  );
};

export default Layout;
