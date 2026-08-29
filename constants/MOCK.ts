interface MockParams {
  loader?: number | boolean;
  portal?: number | boolean;
  formData?: number | boolean;
  action?: number | boolean;
  router?: number | boolean;
  //
  show?: number | boolean;
  skip?: number | boolean;
}

const devMode = 0;

export const MOCK = {
  auth: {
    formData: 1,
  },
  createTransaction: {
    formData: 1,
  },
  createTransactionPreview: {
    portal: 1,
  },
} as const satisfies Record<string, MockParams>;
