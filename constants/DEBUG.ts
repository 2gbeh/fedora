interface MockParams {
  loader?: number | boolean;
  portal?: number | boolean;
  formData?: number | boolean;
  action?: number | boolean;
  router?: number | boolean;
}

export const DEBUG = {
  auth: {
    loader: 1,
    formData: 1,
  },
  transactions: {
    loader: 1,
  },
  createTransaction: {
    formData: 1,
  },
  createTransactionPreview: {
    portal: 0,
  },  
} as const satisfies Record<string, MockParams>;
