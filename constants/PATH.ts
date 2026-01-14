export const PATH = {
  home: "/",
  login: "/",
  loginPin: "/login/pin",
  forgotPassword: "/forgot-password",
  createPassword: "/create-password",
  //
  profile: "/profile",
  settings: "/settings",
  //
  dashboard: "/dashboard",
  reports: "/dashboard/reports",
  //
  transactions: "/transactions",
  //
  ledgers: "/ledgers",
  ledgerTransactions: (id: string) => `/ledgers/${id}/transactions`,
  //
  contacts: "/contacts",
  contactTransactions: (id: string) => `/contacts/${id}/transactions`,
};