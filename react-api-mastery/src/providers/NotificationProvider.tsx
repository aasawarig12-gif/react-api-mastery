import { createContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

export const NotificationContext = createContext<any>(null);

export const NotificationProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "success" | "error" | "warning"
  >("success");

  const showNotification = (
    msg: string,
    type: "success" | "error" | "warning" = "success"
  ) => {
    setMessage(msg);
    setSeverity(type);
    setOpen(true);
  };

  return (
    <NotificationContext.Provider
      value={{ showNotification }}
    >
      {children}

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};