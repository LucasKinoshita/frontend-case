import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "./Login.schema";
import { LoginFormData } from "./Login.type";
import { IBankTransactionsService } from "../services/BankTransactions/BankTransactions.service";

export function useLoginModel(
  bankTransactionsService: IBankTransactionsService
) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleAuthLogin = async (data: LoginFormData) => {
    const { token } = await bankTransactionsService.signIn({
      ...data,
    });

    if (token) {
      localStorage.setItem("auth_token", token);
      navigate("/ibanking");
    }
  };

  const onSubmit = (data: LoginFormData) => handleAuthLogin(data);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
