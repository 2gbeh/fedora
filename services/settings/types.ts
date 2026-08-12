import { BaseDto } from "../base/types";

export interface SettingDto extends BaseDto {
  name: string;
  value: string;
}

export type QuerySettingDto = {};

export type CreateSettingDto = {};

export type UpdateSettingDto = {};
