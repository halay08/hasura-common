export enum UploadType {
  INCIDENT = 'INCIDENT',
  WORKLOAD = 'WORKLOAD',
  USERS = 'USERS',
}

export type TOpenWriteStreamParam = {
  key: string;
  contentType?: string;
  bucket: string;
  isPrivate?: boolean;
};

export type TOpenReadStreamParam = {
  key: string;
  bucket: string;
  isPrivate?: boolean;
};

export type TFileDetail = {
  file: Buffer;
  ext: string;
  mimeType: string;
};

export type TS3Config = {
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
};

export type TError = {
  message: string;
  code: string;
};

export type TUploaderOption = {
  compressImage: boolean;
  resizeWidth: number;
  uploadType: string;
  isPrivate?: boolean;
};

export type TUploadResult = {
  error?: TError;
  key?: string | null;
};

export type TUploadImagesQueryParam = {
  compressImage: boolean;
  resizeWidth: number;
  uploadType: string;
  isPrivate?: boolean;
};

export type TUploadImagesResult = {
  bucketUrl: string;
  files: TUploadResult[];
};

export type TResizeImageQueryParam = {
  size: string;
  imageKey: string;
};

export type TResizeImageResult = {
  bucketUrl: string;
  key: string;
};

export type TDeleteImageQueryParam = {
  imageKey: string;
};

export type TDeleteImageResult = {
  code: number;
  success: boolean;
};
