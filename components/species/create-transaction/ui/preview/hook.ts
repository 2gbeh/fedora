import { useEffect, useState } from "react";
// 
import { WalletsService } from "@/services/wallets";
import { ProjectsService } from "@/services/projects";
import { OptionType } from "@/types";

export function useCreateTransactionPreview() {
  const [walletsList, setContactsList] = useState<OptionType[]>();
  const [projectsList, setCategoriesList] = useState<OptionType[]>();

  useEffect(() => {
    fetchContactsList();
    fetchCategoriesList();
  }, []);

  const fetchContactsList = async () => {
    const res = await WalletsService.getListOptions();
    setContactsList(res);
  };

  const fetchCategoriesList = async () => {
    const res = await ProjectsService.getListOptions();
    setCategoriesList(res);
  };

  return { walletsList, projectsList };
}
