import { useContext } from "react";
import { PolleriaContext } from "../context/PolleriaContext";

const usePolleria = () => {
  const context = useContext(PolleriaContext);
  return context;
};

export default usePolleria;
