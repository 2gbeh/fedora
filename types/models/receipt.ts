import { MimeTypeEnum } from "../enums/mime-type-enum";

export interface ReceiptModel {
  id: string;
  url: string;
  mimeType: MimeTypeEnum;
  bytes: number;
}
