import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export const useProjectsContext = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error(
      "Você deve chamar useProjectsContext dentro de um projectContextProvider"
    );
  }

  return context;
};
