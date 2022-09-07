import { useContext } from "react";
import { CandidatesTestsContext } from "../contexts/CandidatesTestsContext";

export function useCandidatesTests() {
  const value = useContext(CandidatesTestsContext);

  return value;
}
