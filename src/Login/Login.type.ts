import { z } from "zod";
import { loginSchema } from "./Login.schema";

export type LoginFormData = z.infer<typeof loginSchema>;
