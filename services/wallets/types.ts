import { BaseDto } from "../base/types";

export interface WalletDto extends BaseDto {
  name: string;
  description?: string;
  default?: boolean;
}

export type QueryWalletDto = {};

export type CreateWalletDto = {};

export type UpdateWalletDto = {};
