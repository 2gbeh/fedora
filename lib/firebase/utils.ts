import { FirebaseError } from "firebase/app";

function translateError(err: FirebaseError) {
  const mapper = {
    "auth/network-request-failed": "Network connection error",
    "auth/too-many-requests": "",
    "auth/invalid-credential": "Invalid auth credentials",
    "auth/user-not-found": "",
    "auth/invalid-email": "",
    "auth/email-already-in-use": "",
    "auth/wrong-password": "",
    "auth/weak-password": "",
  };

  type M = keyof typeof mapper;

  if (!err.code) return "Unknown error";
  return err.code in mapper ? mapper[err.code as M] : err.code;
}

export const firebaseUtil = {
  translateError,
};
