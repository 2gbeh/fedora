import { BaseDto } from "../base/types";

export interface ContactDto extends BaseDto {
  avatar?: string;
  name?: string;
  displayName: string;
  tel?: number;
  email?: string;
  notes?: string;
  isFavorite?: boolean;
  isTemp?: boolean;
}

export type QueryContactDto = {};

export type CreateContactDto = {};

export type UpdateContactDto = {};
