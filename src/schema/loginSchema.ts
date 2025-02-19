import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }).nonempty({ message: 'Email é obrigatório' }),
  password: z.string().min(6, { message: 'A senha deve ter pelo menos 6 caracteres' }).nonempty({ message: 'Senha é obrigatória' }),
});
