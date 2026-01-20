import { GeolocationDto } from "./geolocation-dto";

export interface DeviceDto {
  ipAddress?: string | null;
  userAgent?: string | null;
  geolocation?: GeolocationDto | null;
  lastSeen?: string | null;
}
