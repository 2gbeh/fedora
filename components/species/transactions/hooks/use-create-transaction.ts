import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserCredential } from "firebase/auth";
//
import { useToast } from "@/hooks/use-toast";
import { authService } from "@/services/auth-service";
import { firebaseUtil } from "@/lib/firebase/utils";
import { z, zodUtil } from "@/utils/zod-util";
import {
  TransactionCategoryEnum,
  TransactionTagEnum,
  TransactionTypeEnum,
} from "@/types/enums/transaction-enum";
import { WalletEnum } from "@/types/enums/wallet-enum";
import { PATH } from "@/constants/PATH";
import { MOCK } from "@/constants/MOCK";
import { selectorUtil } from "@/utils/selector-util";
import { LedgerNameEnum } from "@/types/enums/ledger-enum";
import { CUR_DATE, DEFAULT_LEDGER } from "@/constants/LOCALE";
import { sleep } from "@/utils";

const amountSplitSchema = z.object({
  amount: z.number(),
  narration: z.string(),
});

const formSchema = z.object({
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  ledgerId: z.string().optional(),
  contactId: z.string(),
  type: z.enum(TransactionTypeEnum),
  amount: z.number().positive(),
  amountSplit: z.array(amountSplitSchema).optional(),
  narration: z.string(),
  categories: z.array(z.enum(TransactionCategoryEnum)),
  tags: z.array(z.enum(TransactionTagEnum)).optional(),
  wallet: z.enum(WalletEnum),
  receipt: zodUtil.imageFile(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const defaultValues = MOCK.transactions.formData
  ? {
      date: CUR_DATE,
      ledgerId: DEFAULT_LEDGER.value,
      contactId: "Sunday Bike",
      type: TransactionTypeEnum.EXPENSE,
      amount: 20000,
      narration: "Fuel",
      categories: [TransactionCategoryEnum.UTILITIES],
      wallet: WalletEnum.OPAY,
    }
  : {
      date: CUR_DATE,
      ledgerId: DEFAULT_LEDGER.value,
      type: TransactionTypeEnum.EXPENSE,
      wallet: WalletEnum.OPAY,
    };

export const ledgerOptions = selectorUtil.fromEnum(LedgerNameEnum);
export const typeOptions = selectorUtil.fromEnum(TransactionTypeEnum);
export const categoriesOptions = selectorUtil.fromEnum(TransactionCategoryEnum);
export const tagsOptions = selectorUtil.fromEnum(TransactionTagEnum);
export const walletOptions = selectorUtil.fromEnum(WalletEnum);

export function useCreateTransaction() {
  const router = useRouter();
  const toast = useToast();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  //
  const [submitting, setSubmitting] = useState(false);
  //
  async function onSubmit(formData: FormSchemaType) {
    console.log("🚀 ~ onSubmit ~ formData:", formData);
    setSubmitting(true);
    await sleep()
    setSubmitting(false);

    // authService
    //   .signIn(formData)
    //   .then((res: UserCredential) => {
    //     // console.log("🚀 ~ onSubmit ~ res:", res);
    //     toast.success("Log in successful");
    //     router.push(PATH.transactions);
    //   })
    //   .catch((err) => {
    //     const message = firebaseUtil.translateError(err);
    //     toast.error(message);
    //   })
    //   .finally(() => {
    //     setSubmitting(false);
    //   });
  }

  return {
    form,
    submitting,
    onSubmit,
  };
}
