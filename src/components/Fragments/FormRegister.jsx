import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormRegister() {
  return (
    <form action="">
      <InputForm
        label="Username"
        type="text"
        placeholder="Enter your Username"
        name="username"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="******"
        name="confirmPassword"
      />
      <Button classname="bg-blue-700 w-full text-white">Register</Button>
    </form>
  );
}
