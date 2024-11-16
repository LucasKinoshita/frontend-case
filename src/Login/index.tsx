import { useState, ChangeEvent } from "react";
import logoFullImage from "../assets/logo-full.svg";
import arrowRightImage from "../assets/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeCPF = (e: ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAuthLogin = async (cpf: string, password: string) => {
    const response = await fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cpf,
        password,
      }),
    });

    const json = await response.json();

    localStorage.setItem("auth_token", json.token);
    navigate("/ibanking");
  };

  const handleAuth = async () => {
    if (cpf && password) {
      await handleAuthLogin(cpf, password);
    }
  };

  return (
    <main id="login">
      <img src={logoFullImage} alt="Cora" title="Cora" />
      <h1>Fazer Login</h1>
      <input
        id="cpf"
        placeholder="Insira seu e-mail ou CPF"
        onChange={handleChangeCPF}
      />
      <input
        id="password"
        placeholder="Digite sua senha"
        onChange={handleChangePassword}
      />
      <button onClick={handleAuth}>
        Continuar
        <img src={arrowRightImage} />
      </button>
    </main>
  );
}

export { Login };
