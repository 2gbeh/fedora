import { User, UserCredential } from "firebase/auth";

export interface ICurrentUser {
  uid: string;
  displayName: null | string;
  photoURL: null | string;
  email: null | string;
  emailVerified: boolean;
  phoneNumber: null | string;
}

export type CurrentUserEntity = User | null;

export type UserCredentialEntity = UserCredential | null;

export interface CreateUserDTO {
  name?: string;
  email: string;
  password: string;
}

export interface SignInDTO {
  email: string;
  password: string;
}

export interface UpdateUserDTO {
  displayName?: string;
  photoURL?: string;
}
