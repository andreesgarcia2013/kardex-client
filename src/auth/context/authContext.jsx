import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { loginRequest, logoutRequest, verifyTokenRequest } from "../../api/auth";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
  };

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);


    const signin = async (user) => {
        try {
          setErrors([])
          const res = await loginRequest(user);
          const userData = await verifyTokenRequest(res.data.token);
          setToken(res.data.token);
          setIsAuthenticated(true);
          localStorage.setItem('token', res.data.token);
          console.log(userData);
          setUser(userData.data.userData);
        } catch (error) {
          console.log(error);
          setErrors(error.response.data.message);
        }
      };

      const logout = async (token) => {
        await logoutRequest(token);
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);

      };

      useEffect(() => {
        const checkLogin = async () => {
          const tokenAlmacenado = localStorage.getItem('token');
          if (!tokenAlmacenado) {
            setIsAuthenticated(false);
            setLoading(false);
            return;
          }
    
          try {
            const res = await verifyTokenRequest(tokenAlmacenado);
            if (!res.data) return setIsAuthenticated(false);
            setIsAuthenticated(true);
            setUser(res.data.userData);
            setLoading(false);
            setToken(tokenAlmacenado)
          } catch (error) {
            setIsAuthenticated(false);
            setLoading(false);
          }
        };
        checkLogin();
      }, []);

      return (
        <AuthContext.Provider
          value={{
            user,
            signin,
            logout,
            isAuthenticated,
            errors,
            loading,
            token
          }}
        >
          {children}
        </AuthContext.Provider>
      );
  }

export default AuthContext;
