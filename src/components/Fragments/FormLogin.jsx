import { useState } from "react";
import { LoginApi } from "../../services/auth.services";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    LoginApi(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="john doe"
        name="username"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <Button classname="bg-blue-700 w-full text-white" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
}

// "username": "johnd",
// "password": "m38rmF$",
