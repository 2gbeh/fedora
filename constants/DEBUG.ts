interface MockParams {
  loader?: number | boolean;
  portal?: number | boolean;
  formData?: number | boolean;
  action?: number | boolean;
  router?: number | boolean;
}

export const DEBUG = {
  transactions: {
    loader: 1,
  },
} as const satisfies Record<string, MockParams>;
