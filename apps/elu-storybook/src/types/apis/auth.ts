export interface LoginRequest {
  phone: string;
  password: string;
}

export interface LoginResponse {
  data?: {
    email?: string;
  } | null;
  message?: string;
  success?: boolean;
}
