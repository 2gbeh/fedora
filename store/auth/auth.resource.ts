const authResource = {
  BAD_REQUEST: [
    { code: "auth/invalid-email", customData: {}, name: "FirebaseError" },
    { code: "auth/missing-password", customData: {}, name: "FirebaseError" },
    { code: "auth/invalid-credential", customData: {}, name: "FirebaseError" },
  ],
  TypeError: [
    "Cannot read properties of undefined (reading 'signOut')",
    "Cannot read properties of null (reading 'getIdToken')",
  ],
  Firebase: ["Firebase: Error (auth/network-request-failed)"],
};
