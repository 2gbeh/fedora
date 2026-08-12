import { BaseDto } from "../base/types";

export interface CategoryDto extends BaseDto {
  name: string;
  description: string;
}

export type QueryCategoryDto = {};

export type CreateCategoryDto = {};

export type UpdateCategoryDto = {};
