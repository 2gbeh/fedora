import { BaseDto, BasePK } from "../base/types";
import { CategoryDto } from "../categories/types";
import { ContactDto } from "../contacts/types";
import { WalletDto } from "../wallet/types";

export interface TransactionDto extends BaseDto {
  contactId: BasePK;
  contact?: ContactDto;
  amount: number;
  narration: string;
  categoryIds: BasePK[];
  categories?: CategoryDto[];
  walletId: BasePK;
  wallet?: WalletDto;
  receipt?: string;
  isDraft?: boolean;
  isIncognito?: boolean;
  isTemp?: boolean;
  entryDate: string;
}

export type QueryTransactionDto = {};

export type CreateTransactionDto = {};

export type UpdateTransactionDto = {};
