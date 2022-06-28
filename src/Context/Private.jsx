import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import PagLogin from "../Login/PagLogin";


const Private = ({ children }) => {
  const auth = useContext(AuthContext);
  if (!auth.user) {
    return <PagLogin></PagLogin>;
  }
  return children;
};

export default Private;
