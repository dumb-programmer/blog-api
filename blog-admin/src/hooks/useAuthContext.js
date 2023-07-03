import { useContext } from "react";
import AuthContent from "../context/AuthContext";

const useAuthContext = () => useContext(AuthContent);

export default useAuthContext;