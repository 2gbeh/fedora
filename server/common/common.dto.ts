export interface ICommon {
  id: number;
  status?: number;
  created_at: string | Date;
  updated_at: null | string | Date;
  deleted_at: null | string | Date;
  uuid?: string;
}

export type readCommonDto = { id: number };
