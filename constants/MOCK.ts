interface IPrototyping {
  loader?: number | boolean;
  formData?: number | boolean;
  action?: number | boolean;
  portal?: number | boolean;
}

export const MOCK = {
  splash: {
    loader: 0,
  },
  auth: {
    formData: 1,
  },
  profile: {
    formData: 1,
  },
  dashboard: {
    loader: 1,
  },
  reports: {
    loader: 1,
  },
  transactions: {
    loader: 1,
    formData: 1,
    portal: 1,
  },
  ledgers: {
    loader: 1,
    formData: 1,
    portal: 1,
  },
  contacts: {
    loader: 1,
    formData: 1,
    portal: 1,
  },
  settings: {
    formData: 1,
  },
};
