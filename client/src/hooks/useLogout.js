import { useAuthContext } from "./useAuthContext";
import { useProjectsContext } from "./useProjectsContext";

export const useLogout = () => {
  const { dispatch: logoutDispatch } = useAuthContext();
  const { dispatch: projectDispatch } = useProjectsContext();

  const logout = () => {
    localStorage.removeItem("user");
    logoutDispatch({ type: "LOGOUT" });
    projectDispatch({ type: "SET_PROJECTS", payload: [] });
  };

  return { logout };
};
