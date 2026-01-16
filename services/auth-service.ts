import { Dispatch, SetStateAction } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase/config";

export interface SessionDto {
  data: User | null;
  loading: boolean;
}

const getSession = (cb: Dispatch<SetStateAction<SessionDto>>) =>
  onAuthStateChanged(firebaseAuth, (user) => {
    // console.log("🚀 ~ AuthProvider ~ user:", user);
    cb({ data: user, loading: false });
  });

interface SignInRequest {
  email: string;
  password: string;
}

const signIn = (req: SignInRequest) =>
  signInWithEmailAndPassword(firebaseAuth, req.email, req.password);

export const authService = { getSession, signIn };
