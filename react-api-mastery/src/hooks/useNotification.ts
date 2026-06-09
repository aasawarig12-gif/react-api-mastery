import { useContext } from "react";
import { NotificationContext } from "../providers/NotificationProvider";

export const useNotification = () => {
  return useContext(NotificationContext);
};