import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase/config";

const signIn = (req: { email: string; password: string }) =>
  signInWithEmailAndPassword(firebaseAuth, req.email, req.password);

export const authService = { signIn };
