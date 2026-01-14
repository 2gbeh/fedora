export const PATH = {
  home: "/",
  login: "/",
  loginWithPin: "/auth/pin",
  profile: "/auth/me",
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
  //
  settings: "/settings",
};
