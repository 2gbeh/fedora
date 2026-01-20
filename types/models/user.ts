import { AccountStatusEnum, RoleEnum } from "../enums/user-enum";
import { DeviceDto } from "../interfaces/device-dto";
import { BaseAuditModel } from "./base";

export interface UserModel extends BaseAuditModel {
  name?: string | null;
  pin?: string | null;
  role?: RoleEnum | null;
  device?: DeviceDto | null;
  status?: AccountStatusEnum | null;
}
