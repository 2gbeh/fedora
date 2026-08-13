import { BaseDto, BasePK } from "../base/types";
import { CategoryDto } from "../categories/types";
import { ContactDto } from "../contacts/types";
import { WalletDto } from "../wallet/types";

export interface TransactionDto extends BaseDto {
  transactionDate: string;
  amount: number;
  narration: string;
  isDraft?: boolean;
  isIncognito?: boolean;
  isTemp?: boolean;
  receipt?: string;
  //
  walletId: BasePK;
  wallet: WalletDto;
  contactId: BasePK;
  contact: ContactDto;
  categoriesIds?: BasePK[];
  categories?: CategoryDto[];
}

export type QueryTransactionDto = {};

export type CreateTransactionDto = {};

export type UpdateTransactionDto = {};
