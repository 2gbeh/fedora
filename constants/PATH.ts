export const PATH = {
  home: "/",
  login: "/",
  loginPin: "/login/pin",
  forgotPassword: "/forgot-password",
  createPassword: "/create-password",
  verifyEmail: "/verify-email",
  //
  dashboard: "/dashboard",
  profile: "/profile",
  settings: "/settings",
  //
  transactions: "/transactions",
  //
  ledgers: "/ledgers",
  ledgerTransactions: (id: string) => `/ledgers/${id}/transactions`,
  //
  contacts: "/contacts",
  contactTransactions: (id: string) => `/contacts/${id}/transactions`,
  // 
  reports: "/reports",
  zentryAI: "/zentry-ai",
};