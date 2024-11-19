import { useEffect } from "react";
import { NavigateFunction } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { loginSchema } from "./Login.schema";
import { LoginFormData } from "./Login.type";
import { IBankTransactionsService } from "../../services/BankTransactions/BankTransactions.service";

export function useLoginModel(
  bankTransactionsService: IBankTransactionsService,
  navigate: NavigateFunction
) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleAuthLogin = async (data: LoginFormData) => {
    try {
      const { token } = await bankTransactionsService.signIn({
        ...data,
      });

      if (token) {
        localStorage.setItem("auth_token", token);
        navigate("/ibanking");
      }
    } catch (error) {
      toast.error("CPF ou senha inválidos");
    }
  };

  const onSubmit = (data: LoginFormData) => handleAuthLogin(data);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      navigate("/ibanking");
    }
  }, [navigate]);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
