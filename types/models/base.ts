export interface BaseModel {
  id: string;
  createdAt: string;
  updatedAt?: string | null;
  deletedAt?: string | null;
}

export interface BaseAuditModel extends BaseModel {
  createdBy: string;
  updatedBy?: string | null;
  deletedBy?: string | null;
  isStub?: boolean;
}

export interface LookupModel {
  id: string;
  name: string;
}
