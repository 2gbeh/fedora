import { useEffect, useState } from "react";
import type { ImagePickerAsset } from "expo-image-picker";
//
import { useAppToast } from "@/hooks/use-app-toast";
import { ContactsService } from "@/services/contacts";
import { CategoriesService } from "@/services/categories";
import { WalletsService } from "@/services/wallets";
import { ProjectsService } from "@/services/projects";
import { OptionType } from "@/types";
import { DEBUG } from "@/constants/DEBUG";
import { CUR_DATE } from "@/constants";
import { TRANSACTION_TYPE_MAP } from "@/services/transactions/types";
import { sleep } from "@/utils";

export type CreateTransactionFormSchema = FormSchema;

interface FormSchema {
  type: string;
  typeText?: string;
  contactId?: string;
  contactIdText?: string;
  amount?: string;
  narration?: string;
  categoryIds?: string[];
  categoryIdsText?: string[];
  entryDate: string;
  //
  walletId: string;
  walletIdText?: string;
  projectId?: string;
  projectIdText?: string;
  receipt?: null | ImagePickerAsset;
  receiptText?: string;
  isDraft?: boolean;
  isIncognito?: boolean;
}

const mockValues = {
  type: TRANSACTION_TYPE_MAP.Debit,
  contactId: "8",
  amount: "15000",
  narration: "Pyjamas Bonnet",
  categoryIds: ["18"],
  entryDate: CUR_DATE,
  walletId: "3",
  isIncognito: true,
};

const defaultValues: FormSchema = {
  type: "dr",
  entryDate: CUR_DATE,
  walletId: "3",
};

export function useCreateTransaction() {
  const toast = useAppToast();
  const [contactsList, setContactsList] = useState<OptionType[]>();
  const [categoriesList, setCategoriesList] = useState<OptionType[]>();
  const [walletsList, setWalletsList] = useState<OptionType[]>();
  const [projectsList, setProjectsList] = useState<OptionType[]>();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormSchema>(
    DEBUG.createTransaction.formData ? mockValues : defaultValues,
  );
  const [openPreview, setOpenPreview] = useState(
    Boolean(DEBUG.createTransactionPreview.portal),
  );

  const canSave =
    formData.contactId?.trim().length &&
    Number(formData.amount) >= 500 &&
    formData.narration?.trim().length &&
    formData.categoryIds?.length &&
    formData.entryDate?.trim().length &&
    formData.walletId?.trim().length;

  useEffect(() => {
    fetchContactsList();
    fetchCategoriesList();
    fetchWalletsList();
    fetchProjectsList();
  }, []);

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ formData:", formData);
  }, [formData]);

  const mutateFormData = (
    formData: Partial<FormSchema>,
    meta?: OptionType | OptionType[],
  ) => {
    setFormData((prev) => ({ ...prev, ...formData }));
  };

  const fetchContactsList = async () => {
    if (!contactsList) {
      const res = await ContactsService.getListOptions();
      setContactsList(res);
    }
  };

  const fetchCategoriesList = async () => {
    if (!categoriesList) {
      const res = await CategoriesService.getListOptions();
      setCategoriesList(res);
    }
  };

  const fetchWalletsList = async () => {
    if (!walletsList) {
      const res = await WalletsService.getListOptions();
      setWalletsList(res);
    }
  };

  const fetchProjectsList = async () => {
    if (!projectsList) {
      const res = await ProjectsService.getListOptions();
      setProjectsList(res);
    }
  };

  const handleSubmit = async (asDraft?: boolean) => {
    setSubmitting(true);
    await sleep();
    asDraft
      ? toast.info("Transaction saved as draft!")
      : toast.success("Transaction saved successfully!");
    setFormData(defaultValues);
    setOpenPreview(false);
    setSubmitting(false);
  };

  return {
    formData,
    contactsList,
    categoriesList,
    walletsList,
    projectsList,
    submitting,
    openPreview,
    setOpenPreview,
    canSave,
    mutateFormData,
    handleSubmit,
  };
}
