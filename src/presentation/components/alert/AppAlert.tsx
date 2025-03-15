import React from 'react'
import { Snackbar, Alert } from "@mui/material";
interface AlertProps {
    message?: string;
    open:boolean;
    setOpen: (open: boolean) => void;
    severity?: "success" | "error" | "warning" | "info";
}
const AppAlert: React.FC<AlertProps> = (props) => {
    return (
        <Snackbar open={props.open} autoHideDuration={5000} onClose={() => props.setOpen(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
            <Alert onClose={() => props.setOpen(false)} severity={props.severity} variant="filled">
                {props.message}
            </Alert>
        </Snackbar>
    )
}

export default AppAlert