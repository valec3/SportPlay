import { z } from 'zod';

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    dni: z.string().length(8),
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});
