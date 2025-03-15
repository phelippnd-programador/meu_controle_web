import { ReactNode, useContext, useState, createContext, useEffect } from "react";
import AppAlert from "../alert/AppAlert";

interface AlertContextProps {
    showAlert: (message: string, severity?: "success" | "error" | "warning" | "info") => void;

}

interface ActiveProviderProps {
    children: ReactNode;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<ActiveProviderProps> = ({ children }) => {
    const [alert, setAlert] = useState<string>('');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState<"success" | "error" | "warning" | "info">("info");

    const showAlert = (msg: string, type: "success" | "error" | "warning" | "info" = "info") => {
        setMessage(msg);
        setSeverity(type);
        setOpen(true);

        setTimeout(() => setOpen(false), 5000); // Fecha após 5 segundos
    };

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            <AppAlert message={message}  open={open} setOpen={setOpen} severity={severity}/>
        </AlertContext.Provider>
    );
};

export const useAlert = (): AlertContextProps => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error('useAlert must be used within an AlertProvider');
    }
    return context;
};
