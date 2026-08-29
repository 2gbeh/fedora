import { useState } from "react";
import seedWallets from "@/services/wallets/data/seed.json";
import seedProjects from "@/services/projects/data/seed.json";


export function useCreateTransactionPreview() {
  // const [formData, setFormData] = useState<IFormData>(defaultValues);
  //
  return {  seedWallets, seedProjects };
}
