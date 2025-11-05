import { axios } from '@/lib/axios';
import type { LoginRequest, LoginResponse } from '@/types/apis/auth';

export const loginApi = async (payload: LoginRequest) => {
  const { data } = await axios.post<LoginResponse>(
    '/client/auth/login',
    payload
  );
  return data;
};
