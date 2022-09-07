import { useContext } from "react";
import { QtdPredominanciasContext } from "../contexts/QtdPredominanciasContext";

export function useQtdPredominancias() {
  const value = useContext(QtdPredominanciasContext);

  return value;
}
