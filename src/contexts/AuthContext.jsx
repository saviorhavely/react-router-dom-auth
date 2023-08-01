import { useState, createContext, useEffect, useContext } from "react";

export const AuthContext = createContext({ user: {} });

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // eslint-disable-next-line react/prop-types
  const { children } = props;

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    // const storagedToken = localStorage.getItem("@App:token");

    if (storagedUser) {
      setUser(JSON.parse(storagedUser));
      // api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
    setLoading(false);
  }, []);

  async function Login(userData) {
    try {
      // const response = await api.post("/jwt-auth/v1/token", userData);
      // ...
      // api.defaults.headers.Authorization = `Bearer ${token}`;
      const loggedUser = { email: userData.email };

      localStorage.setItem("@App:user", JSON.stringify(loggedUser));
      // localStorage.setItem("@App:token", token);
      setUser(loggedUser);

      return loggedUser;
    } catch (error) {
      throw new Error("Houve algo de errado, tente novamente");
    }
  }

  const Logout = () => {
    localStorage.clear();
    setUser(null);
    window.location.href = "/login";
  };

  if (isLoading) return null;

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
