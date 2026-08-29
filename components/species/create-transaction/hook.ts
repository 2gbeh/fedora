import { useEffect, useState } from "react";
import type { ImagePickerAsset } from "expo-image-picker";
//
import { ContactsService } from "@/services/contacts";
import { CategoriesService } from "@/services/categories";
import { WalletsService } from "@/services/wallets";
import { ProjectsService } from "@/services/projects";
import { OptionType } from "@/types";
import { DEBUG } from "@/constants/DEBUG";
import { CUR_DATE } from "@/constants";

export type CreateTransactionFormSchema = FormSchema;

interface FormSchema {
  type: string;
  contactId?: string;
  amount?: string;
  narration?: string;
  categoryIds?: string[];
  entryDate: string;
  //
  walletId: string;
  projectId?: string;
  receipt?: null | ImagePickerAsset;
  isDraft?: boolean;
  isIncognito?: boolean;
}

const defaultValues: FormSchema = DEBUG.createTransaction.formData
  ? {
      type: "dr",
      contactId: "8",
      amount: "15000",
      narration: "Pyjamas Bonnet",
      categoryIds: ["18"],
      entryDate: CUR_DATE,
      walletId: "3",
      isIncognito: true,
    }
  : {
      type: "dr",
      entryDate: CUR_DATE,
      walletId: "3",
    };

export function useCreateTransaction() {
  const [formData, setFormData] = useState<FormSchema>(defaultValues);
  const [contactsList, setContactsList] = useState<OptionType[]>();
  const [categoriesList, setCategoriesList] = useState<OptionType[]>();
  const [walletsList, setWalletsList] = useState<OptionType[]>();
  const [projectsList, setProjectsList] = useState<OptionType[]>();
  const [openPreview, setOpenPreview] = useState(
    Boolean(DEBUG.createTransactionPreview.portal),
  );

  const canSave =
    formData.contactId?.trim().length &&
    Number(formData.amount) >= 500 &&
    formData.narration?.trim().length &&
    formData.categoryIds?.length &&
    formData.entryDate?.trim().length;

  const canConfirm = formData.walletId?.trim().length;

  useEffect(() => {
    fetchContactsList();
    fetchCategoriesList();
    fetchWalletsList();
    fetchProjectsList();
  }, []);

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ formData:", formData);
  }, [formData]);

  const resetFormData = () => {
    setFormData(defaultValues);
  };

  const mutateFormData = (formData: Partial<FormSchema>) => {
    setFormData((prev) => ({ ...prev, ...formData }));
  };

  const fetchContactsList = async () => {
    const res = await ContactsService.getListOptions();
    setContactsList(res);
  };

  const fetchCategoriesList = async () => {
    const res = await CategoriesService.getListOptions();
    setCategoriesList(res);
  };

  const fetchWalletsList = async () => {
    const res = await WalletsService.getListOptions();
    setWalletsList(res);
  };

  const fetchProjectsList = async () => {
    const res = await ProjectsService.getListOptions();
    setProjectsList(res);
  };

  const handleSave = () => {
    setOpenPreview(true);
    // resetFormData();
  };

  return {
    formData,
    contactsList,
    categoriesList,
    walletsList,
    projectsList,
    openPreview,
    setOpenPreview,
    canSave,
    canConfirm,
    mutateFormData,
    handleSave,
  };
}
