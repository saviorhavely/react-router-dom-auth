import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { Login } = useAuth();
  const navigate = useNavigate();

  return (
    <fieldset>
      {email}
      <form
        onSubmit={() => {
          try {
            Login({
              email,
              pass,
            });
            navigate("/");
          } catch (error) {
            console.log('errou o login')
          }
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button type="submit">Logar</button>
      </form>
    </fieldset>
  );
}

export default Login;
