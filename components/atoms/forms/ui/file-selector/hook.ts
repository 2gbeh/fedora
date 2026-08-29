import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { InputProps } from "../../types";

export interface FileSelectorProps extends InputProps {
  variant: "img" | "doc";
  large?: boolean;
}

export function useFileSelector(params: FileSelectorProps) {
  const handleClick = async () => {
    params.variant === "img" ? await selectImage() : await selectDocument();
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);

    if (!result.canceled) {
      const asset = result.assets[0];

      const formData = new FormData();
      formData.append("image", {
        uri: asset.uri,
        name: asset.fileName ?? `photo-${Date.now()}.jpg`,
        type: asset.mimeType ?? "image/jpeg",
      } as any);
      formData.append("email", "user@example.com");
      formData.append("tel", "08012345678");

      const uploadResponse = await fetch("https://your-api.com/upload", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = await uploadResponse.json();
      console.log(uploadResponse.status, data);
    }
  };

  const selectDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync();
    console.log(result);

    if (!result.canceled) {
      const asset = result.assets[0];

      const formData = new FormData();
      formData.append("document", {
        uri: asset.uri,
        name: asset.name ?? `file-${Date.now()}`,
        type: asset.mimeType ?? "application/octet-stream",
      } as any);
      formData.append("email", "user@example.com");
      formData.append("tel", "08012345678");

      const uploadResponse = await fetch("https://your-api.com/upload", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = await uploadResponse.json();
      console.log(uploadResponse.status, data);
    }
  };

  return { handleClick };
}
