export interface ISlice {
  isLoading: boolean;
  status?: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
}

export interface IApiResponse<T> {
  data: T;
}

export interface IApiResponseError {
  error: string;
}

export type UploadPhotoDTO = {
  id: number | string;
  image: string;
};

export interface AvatarSchema {
  url?: string;
  file?: File;
  error?: string;
}
