import { BaseDto, BasePK } from "../base/types";
import { CategoryDto } from "../categories/types";
import { ContactDto } from "../contacts/types";
import { ProjectDto } from "../projects/types";
import { WalletDto } from "../wallets/types";

export interface TransactionDto extends BaseDto {
  amount: number;
  narration: string;
  receipt?: string;
  isDraft?: boolean;
  isIncognito?: boolean;
  isTemp?: boolean;
  entryDate: string;
  // 
  contactId: BasePK;
  contact?: ContactDto;
  categoryIds: BasePK[];
  categories?: CategoryDto[];
  walletId: BasePK;
  wallet?: WalletDto;
  projectId: BasePK;
  project?: ProjectDto;
}

export type QueryTransactionDto = {};

export type CreateTransactionDto = {};

export type UpdateTransactionDto = {};
