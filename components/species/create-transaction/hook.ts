import { useEffect, useState } from "react";
import type { ImagePickerAsset } from "expo-image-picker";
//
import { ContactsService } from "@/services/contacts";
import { CategoriesService } from "@/services/categories";
import { OptionType } from "@/types";
import { CUR_DATE } from "@/constants";

interface FormSchema {
  contactId?: string;
  type: string;
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

const defaultValues: FormSchema = {
  type: "dr",
  amount: "150000.528988525.896",
  entryDate: CUR_DATE,
  walletId: "3",
};

export function useCreateTransaction() {
  const [formData, setFormData] = useState<FormSchema>(defaultValues);
  const [contactsList, setContactsList] = useState<OptionType[]>();
  const [categoriesList, setCategoriesList] = useState<OptionType[]>();

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

  const handleSave = () => {
    resetFormData();
  };

  return {
    formData,
    contactsList,
    categoriesList,
    canSave,
    canConfirm,
    mutateFormData,
    handleSave,
  };
}
