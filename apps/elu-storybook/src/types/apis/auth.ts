export interface LoginRequest {
  phone: string;
  password: string;
}

export interface LoginResponse {
  data: {
    email: string;
  };
  message?: string;
  success?: boolean;
}
