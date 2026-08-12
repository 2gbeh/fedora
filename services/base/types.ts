export type BasePK = string;

export interface BaseDto {
  id: BasePK;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}
