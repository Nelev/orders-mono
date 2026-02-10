import { Navigate } from "react-router-dom";
import useStore from "../store";
import { IState } from "../model/state";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = useStore((state: IState) => state.user);
  if (!user?.authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
