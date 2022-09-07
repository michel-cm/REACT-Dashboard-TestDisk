import { useContext } from "react";
import { ConfigsContext } from "../contexts/ConfigsContext";

export function useConfigs() {
  const value = useContext(ConfigsContext);

  return value;
}
