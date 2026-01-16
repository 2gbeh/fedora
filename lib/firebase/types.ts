interface UserCredential {
  user: User;
  providerId: string | null;
  _tokenResponse: TokenResponse;
  operationType: string;
}

interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  photoURL: string | null;
  providerData: ProviderData[];
  stsTokenManager: StsTokenManager;
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
}

interface ProviderData {
  providerId: string;
  uid: string;
  displayName: string | null;
  email: string;
  phoneNumber: string | null;
  photoURL: string | null;
}

interface StsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

interface TokenResponse {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  profilePicture: string | null;
  refreshToken: string;
  expiresIn: string;
}
